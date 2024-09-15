"use client";
import axios from "axios";
import { clearTokens } from "../utils/util";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";

// Create axios instance
export const api = axios.create({
  baseURL: "https://api.astralemon.com/",
});
const useAxiosPrivate = () => {
  const { auth }: any = useAuth();

  useEffect(() => {
    // Request interceptor to add access token to headers
    const requestIntercept = api.interceptors.request.use(
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
    const responseIntercept = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error?.config;
        if (error.response.status === 401 && !originalRequest?._retry) {
          originalRequest._retry = true;

          try {
            // Log the old access token
            const oldAccessToken = Cookies.get("accessToken");
            console.log("Old access token:", oldAccessToken);

            // Call refresh token endpoint
            const refreshToken = Cookies.get("refreshToken");
            const { data } = await api.post("/token/refresh/", {
              refresh: refreshToken,
            });

            // Store new access token
            Cookies.set("accessToken", data.access);

            // Log the new access token
            console.log("New access token:", data.access);

            // Update header and retry original request
            api.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${data.access}`;
            originalRequest.headers["Authorization"] = `Bearer ${data.access}`;

            return api(originalRequest);
          } catch (error) {
            console.log("Refresh token expired.");
            clearTokens(); // Clear tokens on error
            return Promise.reject(error);
          }
        }
        return Promise.reject(error);
      }
    );

    // Cleanup function to remove interceptors
    return () => {
      api.interceptors.request.eject(requestIntercept);
      api.interceptors.response.eject(responseIntercept);
    };
  }, [auth]);
  return api; // This ensures that the Axios instance is returned, not a function.
};

export default useAxiosPrivate;
