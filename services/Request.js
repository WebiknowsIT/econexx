import axios from "axios";
import * as url from "@/utils/Url";
import {
  getLocalStorageItem,
  setLocalStorageItem,
  removeLocalStorageItem,
} from "@/utils/localStorage";

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) prom.reject(error);
    else prom.resolve(token);
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
  });

  // ============================
  // ✅ REQUEST INTERCEPTOR
  // ============================
  request.interceptors.request.use((config) => {
    const userInfo = getLocalStorageItem("user-info", {});
    const token = userInfo?.token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });

  // ============================
  // ✅ RESPONSE INTERCEPTOR
  // ============================
  request.interceptors.response.use(
    (response) => response.data,

    async (error) => {
      if (!error.response) {
        return Promise.reject({
          status: "error",
          message: "Network error",
        });
      }

      const { status, data: errData } = error.response;
      const originalRequest = error.config;

      // ============================
      // 🔐 HANDLE 401
      // ============================
      if (status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        const userInfo = getLocalStorageItem("user-info", {});
        const refreshToken = userInfo?.refresh_token;

        // ❌ No refresh_token → logout (current behavior)
        if (!refreshToken) {
          removeLocalStorageItem("user-info");

          if (typeof window !== "undefined") {
            window.location.href = "/login";
          }

          return Promise.reject({
            status: "error",
            message: "Session expired. Please login again.",
          });
        }

        // ============================
        // ⏳ QUEUE HANDLING
        // ============================
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
          // 🔁 FUTURE REFRESH API
          const res = await axios.post(
            `${baseUrl || url.BASE_URL}/api/refresh-token`,
            { refresh_token: refreshToken }
          );

          const newToken = res?.data?.data?.access_token;

          if (!newToken) throw new Error("No token returned");

          // ✅ Update storage
          const updatedUser = {
            ...userInfo,
            token: newToken,
          };

          setLocalStorageItem("user-info", updatedUser);

          // ✅ Update default header
          request.defaults.headers.common.Authorization = `Bearer ${newToken}`;

          processQueue(null, newToken);

          // 🔁 Retry original request
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          return request(originalRequest);

        } catch (err) {
          processQueue(err, null);

          removeLocalStorageItem("user-info");

          if (typeof window !== "undefined") {
            window.location.href = "/login";
          }

          return Promise.reject({
            status: "error",
            message: "Session expired. Please login again.",
          });
        } finally {
          isRefreshing = false;
        }
      }

      return Promise.reject({
        status: "error",
        message: errData?.message || "Something went wrong",
        data: errData,
      });
    }
  );

  return request;
}