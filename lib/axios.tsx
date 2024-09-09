"use client";
import axios from "axios";
import { clearTokens } from "../utils/util"; // Updated path
import Cookies from "js-cookie";

// Create axios instance
const api = axios.create({
  baseURL: "http://52.91.135.209:8000/api",
});

// Request interceptor to add access token to headers
api.interceptors.request.use(
  (config) => {
    const token = Cookies.get("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle 401 errors (token refresh)
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Call refresh token endpoint
        const refreshToken = Cookies.get("refreshToken");
        const { data } = await api.post("/token/refresh/", {
          refresh: refreshToken,
        });

        // Store new access token
        Cookies.set("accessToken", data.access);

        // Update header and retry original request
        api.defaults.headers.common["Authorization"] = `Bearer ${data.access}`;
        originalRequest.headers["Authorization"] = `Bearer ${data.access}`;

        return api(originalRequest);
      } catch (error) {
        console.log("Refresh token expired. Logging out...");
        clearTokens(); // Clear tokens on error
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
