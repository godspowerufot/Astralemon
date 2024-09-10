"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "../lib/axios";
import { setTokens, clearTokens } from "../utils/util"; // Updated path
import { toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

interface AuthResponse {
  access: string;
  refresh: string;
  user_id: string;
}

export const useAuth = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  // Registration handler
  const register = async (formData: {
    first_name: string;
    username: string;
    last_name: string;
    email: string;
    password: string;
    phone_no: string;
    referred_by?: string; // Optional referralId
  }): Promise<boolean> => {
    setLoading(true);
    setError(null);

    try {
      // Determine the correct endpoint based on whether referralId is provided
      const endpoint = formData.referred_by
        ? `/accounts/register/?ref=${formData.referred_by}`
        : "/accounts/register/";

      const response = await api.post(endpoint, formData); // Send all form data
      setLoading(false);

      setTokens(
        response.data.access,
        response.data.refresh,
        response.data.user_id
      );

      router.push("/Dashboard");
      return true;
    } catch (err: any) {
      setLoading(false);

      // Log detailed error information
      console.error("Registration error details:", {
        message: err.message,
        response: err.response?.data,
        status: err.response?.status,
        headers: err.response?.headers,
        request: err.request,
      });

      const errorMessage = err.response?.data?.message || "Registration failed";
      setError(errorMessage);

      toast.error(errorMessage);
      return false;
    }
  };

  // Login handler
  const login = async (email: string, password: string): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.post<AuthResponse>("/accounts/login", {
        email,
        password,
      });

      setTokens(
        response.data.access,
        response.data.refresh,
        response.data.user_id
      );
      setLoading(false);

      // Show success toast
      toast.success("Login successful!");

      // Navigate to dashboard
      router.push("/Dashboard");
    } catch (err: any) {
      setLoading(false);
      const errorMessage = err.response?.data?.message || "Login failed";
      setError(errorMessage);

      // Show error toast
      toast.error(errorMessage);
    }
  };

  // Logout handler
  const logout = (): void => {
    clearTokens();
    toast.info("Logged out successfully.");
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
