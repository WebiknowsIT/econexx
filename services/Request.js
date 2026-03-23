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

  // ============================
  // ✅ REQUEST INTERCEPTOR
  // ============================
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

  // ============================
  // ✅ RESPONSE INTERCEPTOR
  // ============================
  request.interceptors.response.use(
    (response) => {
      return response.data;
    },

    async (error) => {
      let message = "Oops, something went wrong.";
      let data = null;

      // ❌ Network error
      if (!error.response) {
        if (error.code === "ECONNABORTED") {
          message = "Request timeout. Please try again.";
        } else {
          message = "Unable to connect to server.";
        }

        return Promise.reject({ status: "error", message, data });
      }

      const originalRequest = error.config;
      const { status, data: errData } = error.response;

      data = errData;
      message = errData?.message || message;

      // ============================
      // 🔐 TOKEN REFRESH
      // ============================
      if (status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        const userInfo = getLocalStorageItem("user-info", {});
        const refreshToken = userInfo?.refresh_token; // ✅ FIXED

        if (!refreshToken) {
          localStorage.removeItem("user-info");
          return Promise.reject({
            status: "error",
            message: "Session expired. Please login again.",
            data,
          });
        }

        // ⏳ Queue system
        if (isRefreshing) {
          return new Promise((resolve, reject) => {
            failedQueue.push({ resolve, reject });
          })
            .then((newToken) => {
              originalRequest.headers.Authorization = `Bearer ${newToken}`;
              return axios(originalRequest); // ✅ FIXED
            })
            .catch((err) => Promise.reject(err));
        }

        isRefreshing = true;

        try {
          const refreshResponse = await axios.post(
            `${baseUrl || url.BASE_URL}/api/v1/student/refresh-token`,
            { refresh_token: refreshToken },
            {
              headers: {
                Authorization: `Bearer ${refreshToken}`,
              },
            }
          );

          const newToken =
            refreshResponse?.data?.data?.token ||
            refreshResponse?.data?.token;

          if (!newToken) {
            throw new Error("No token returned");
          }

          // ✅ Save new token
          const updatedUser = {
            ...userInfo,
            token: newToken,
          };
          setLocalStorageItem("user-info", updatedUser);

          // ✅ Update default header
          request.defaults.headers.common.Authorization = `Bearer ${newToken}`;

          processQueue(null, newToken);

          // 🔁 Retry request
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          return axios(originalRequest); // ✅ FIXED
        } catch (err) {
          processQueue(err, null);

          localStorage.removeItem("user-info");

          return Promise.reject({
            status: "error",
            message: "Session expired. Please login again.",
            data: err?.response?.data || null,
          });
        } finally {
          isRefreshing = false;
        }
      }

      // ============================
      // ❗ ERROR HANDLING
      // ============================
      if (status === 500) {
        message = "Internal Server Error. Please try again later.";
      } else if (errData?.description) {
        message = errData.description;
      }

      return Promise.reject({
        status: "error",
        message,
        data,
      });
    }
  );

  return request;
}