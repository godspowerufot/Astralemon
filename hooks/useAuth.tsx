// hooks/useAuth.ts
"use client";
import { useState } from "react";
import api from "../lib/axios";
import { setTokens, clearTokens } from "../utils";

// Define types for the parameters and return values
interface AuthResponse {
  access: string;
  refresh: string;
}

export const useAuth = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Registration handler
  const register = async (
    email: string,
    username: string,
    password: string
  ): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post("/register/", {
        email,
        username,
        password,
      });
      console.log("User registered:", response.data);
      setLoading(false);
    } catch (err: any) {
      // `any` type is used for catching any type of error
      setLoading(false);
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  // Login handler
  const login = async (username: string, password: string): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post<AuthResponse>("/token/", {
        username,
        password,
      });

      // Store tokens
      setTokens(response.data.access, response.data.refresh);

      console.log("User logged in:", response.data);
      setLoading(false);
    } catch (err: any) {
      setLoading(false);
      setError(err.response?.data?.message || "Login failed");
    }
  };

  // Logout handler
  const logout = (): void => {
    clearTokens();
  };

  return {
    register,
    login,
    logout,
    loading,
    error,
  };
};
