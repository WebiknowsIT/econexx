import axios from "axios";
import * as url from "@/utils/Url";
import { getLocalStorageItem, setLocalStorageItem } from "@/utils/localStorage";

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

export function request(baseUrl) {
  const request = axios.create({
    baseURL: baseUrl || url.BASE_URL,
    timeout: 90000,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: false,
  });

  // ✅ Request Interceptor (attach token)
  request.interceptors.request.use((config) => {
    const userInfo = getLocalStorageItem("user-info", {});
    const token = userInfo?.token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      delete config.headers.Authorization;
    }

    return config;
  });

  // ✅ Response Interceptor
  request.interceptors.response.use(
    (response) => {
      if (response?.data?.data) {
        response.data = response.data.data;
      }
      return response;
    },
    async (error) => {
      let message = "Oops, something went wrong at our end.";
      let data = null;

      // ✅ Network error
      if (!error.response) {
        if (error.code === "ECONNABORTED") {
          message = "Network timeout, please try again.";
        } else {
          message = "Unable to connect to the server.";
        }
        return Promise.reject({ status: "error", message, data });
      }

      const originalRequest = error.config;
      const { status, data: errData } = error.response;

      data = errData;
      message = errData?.message || message;

      // ✅ Handle 401 refresh token logic
      if (status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        const userInfo = getLocalStorageItem("user-info", {});
        const refreshToken = userInfo?.token;

        // ❌ If no refresh token, logout
        if (!refreshToken) {
          return Promise.reject({
            status: "error",
            message: "Session expired. Please login again.",
            data,
          });
        }

        // ✅ If refresh already running, wait in queue
        if (isRefreshing) {
          return new Promise((resolve, reject) => {
            failedQueue.push({ resolve, reject });
          })
            .then((newToken) => {
              originalRequest.headers.Authorization = `Bearer ${newToken}`;
              return request(originalRequest);
            })
            .catch((err) => Promise.reject(err));
        }

        isRefreshing = true;

        try {
          // ✅ Call refresh token API using NORMAL axios (not request instance)
          const refreshResponse = await axios.post(
            `${baseUrl || url.BASE_URL}/api/v1/student/refresh-token`,
            { refresh_token: refreshToken },
            {
              //headers: { "Content-Type": "application/json" },
              headers: {
                Authorization: `Bearer ${refreshToken}`, // refresh token
              },
              
            }
          );

          const newToken =
            refreshResponse?.data?.data?.token ||
            refreshResponse?.data?.token;

          if (!newToken) {
            throw new Error("Refresh token API did not return token");
          }

          // ✅ Update localStorage
          const updatedUserInfo = { ...userInfo, token: newToken };
          setLocalStorageItem("user-info", updatedUserInfo);

          // ✅ Update default header for next requests
          request.defaults.headers.common.Authorization = `Bearer ${newToken}`;

          processQueue(null, newToken);

          // ✅ Retry original request
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          return request(originalRequest);
        } catch (err) {
          processQueue(err, null);

          return Promise.reject({
            status: "error",
            message: "Session expired. Please login again.",
            data: err?.response?.data || null,
          });
        } finally {
          isRefreshing = false;
        }
      }

      // ✅ Your old error formatting
      if (status === 500 && message === "No message available") {
        message = "Internal Server Error. Please try again later.";
      } else if (errData?.description) {
        message = errData.description;
      }

      return Promise.reject({ status: "error", message, data });
    }
  );

  return request;
}
