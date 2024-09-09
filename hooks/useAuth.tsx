"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "../lib/axios";
import { setTokens, clearTokens } from "../utils/util"; // Updated path

interface AuthResponse {
  access: string;
  refresh: string;
  user_id: string; // Added user_id to the response
}

export const useAuth = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter(); // Use Next.js router for navigation

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

      setLoading(false);
      console.log("User registered:", response?.data);
setTokens(response.data.access, response.data.refresh, response.data.user_id);
      // Navigate to /Dashboard on successful registration
      router.push("/Dashboard");
    } catch (err: any) {
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

      // Store tokens and user_id
      setTokens(
        response.data.access,
        response.data.refresh,
        response.data.user_id
      );

      setLoading(false);
      console.log("User logged in:", response.data);

      // Navigate to /Dashboard on successful login
      router.push("/Dashboard");
    } catch (err: any) {
      setLoading(false);
      setError(err.response?.data?.message || "Login failed");
    }
  };

  // Logout handler
  const logout = (): void => {
    clearTokens();
    // Optionally redirect to the login page after logging out
    router.push("/Login");
  };

  return {
    register,
    login,
    logout,
    loading,
    error,
  };
};
