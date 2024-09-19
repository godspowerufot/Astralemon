"use client";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "../lib/axios";
import { setTokens, clearTokens, getAccessToken } from "../utils/util";


interface AuthResponse {
  access: string;
  refresh: string;
  user_id: string;
}

interface ReferralResponse {
  referral_link: string;
}

export const useAuth = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [referralCode, setReferralCode] = useState<string>("");
  const router = useRouter();

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
    // Convert the email to lowercase
    const { referred_by, ...restFormData } = formData;
    const validFormData = {
      ...restFormData,
      email: formData.email.toLowerCase(), // Convert email to lowercase
    };

    // Use the appropriate endpoint based on whether `referred_by` exists
    const endpoint = referred_by
      ? `https://api.astralemon.com/accounts/register/?ref=${referred_by}`
      : "/accounts/register/";

    const response = await api.post(endpoint, validFormData);
    toast.success("Kindly check your mail for a Verification");

    // Handle the response
    setLoading(false);
 console.log(response)
    router.push("/dashboard");
    return true;
  } catch (err: any) {
    // Handle errors
    setLoading(false);
    const errorMessage =
      err.response?.data?.username||
      err.response?.data?.error||
      err.response?.data?.email;
    setError(errorMessage);
    console.log(err);

    // Extract the error message from the Axios error object
  
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
        email: email.toLowerCase(), // Ensures email is in lowercase,
        password,
      });

      setTokens(
        response.data.access,
        response.data.refresh,
        response.data.user_id
      );
     toast.success("Login successful");

      setLoading(false);
      router.push("/dashboard");
    } catch (err: any) {
      setLoading(false);
   console.log(err);

   // Extract the error message from the Axios error object
   const errorMessage =
     err.response?.data?.error || // Backend error message
     err.response?.data?.message || // Alternate backend error field
     "Login failed"; // Fallback message

   setError(errorMessage);
   toast.error(errorMessage);
    }
  };



  // Logout handler
  const logout = (): void => {
    clearTokens();
    toast.info("Logged out successfully.");
    router.push("/Login");
  };

  // Function to get referral code (ref=)
  const getReferralLink = async (): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      const accessToken = getAccessToken();

      if (!accessToken) {
        setError("User not authenticated or token has expired.");
        setLoading(false);
        return;
      }

      const response = await api.get("/accounts/api/get-referral-link/", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const referralLink = response?.data?.referral_link;

      // Extract the 'ref' parameter from the URL
    

      setReferralCode(referralLink || ""); // Set the referral code

      setLoading(false);
    } catch (err: any) {
      setLoading(false);
      setError("Failed to fetch referral link.");
    }
  };

  return {
    register,
    login,
    logout,
    getReferralLink,
    referralCode,
    loading,
    error,
  };
};
