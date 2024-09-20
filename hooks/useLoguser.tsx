"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { api } from "../lib/axios"; // Assuming this is your Axios instance
import { getAccessToken, clearTokens } from "../utils/util"; // Your utility functions for token management
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface UserDetails {
  id: number;
  password: string;
  last_login: string;
  email: string;
  username: string;
  first_name: string;
  last_name: string;
  phone_no: string;
  referrer_id: string;
  is_staff: boolean;
  is_active: boolean;
  is_superuser: boolean;
  date_joined: string;
  is_verified: boolean;
  referred_by: number;
  groups: number[];
  user_permissions: number[];
}

export const useUserDetails = () => {
  const [data, setData] = useState<UserDetails | null>(null);
  const [dataInsta, setDataInsta] = useState<UserDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const [userId, setUserId] = useState<number | undefined>();

  useEffect(() => {
    const fetchUserDetails = async () => {
      setLoading(true);
      setError(null);

      const accessToken = getAccessToken();

      if (!accessToken) {
        setError("User not authenticated or token has expired.");
        setLoading(false);
        router.push("/Login"); // Redirect to login if no token found
        return;
      }

      try {
        const response = await api.get<UserDetails>(
          "/accounts/logged-in-user/",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`, // Pass the token in the header
            },
          }
        );
        setUserId(response?.data?.id);
        setData(response?.data);
        console.log(response?.data)
        setLoading(false);
      } catch (err: any) {
        setLoading(false);

        // Handle 401 Unauthorized error by redirecting the user to the login page
        if (err.response?.status === 401) {
          setError("Session has expired. Please log in again.");
          clearTokens(); // Clear the tokens since they may have expired
          router.push("/Login"); // Redirect to login page
        } else {
          const errorMessage =
            err.response?.data?.message || "Failed to fetch user details";
          setError(errorMessage);
          toast.error(errorMessage);
        }
      }
    };

    fetchUserDetails();
  }, [router]);

  // Define the fetchInstaDetails function separately, and only call it when userId is defined
  const fetchInstaDetails = async () => {
 

    setLoading(true);
    setError(null);

    const accessToken = getAccessToken();

    if (!accessToken) {
      setError("User not authenticated or token has expired.");
      setLoading(false);
      router.push("/Login"); // Redirect to login if no token found
      return;
    }

    try {
      const response = await api.get(
        `/api/instagram-accounts/`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`, // Pass the token in the header
          },
        }
      );
      setLoading(false);
    } catch (err: any) {
      setLoading(false);
console.log(err)
      // Handle 401 Unauthorized error by redirecting the user to the login page
      if (err.response?.status === 401) {
        setError("Session has expired. Please log in again.");
        clearTokens(); // Clear the tokens since they may have expired
      } else {
        const errorMessage =
          err.response?.data?.message || "Failed to fetch Instagram details";
        setError(errorMessage);
        toast.error(errorMessage);
      }
    }
  };
  

  // Trigger the fetchInstaDetails when userId is updated and defined
  useEffect(() => {
    
      fetchInstaDetails();
    
  }, [userId]);

  return {
    data,
    dataInsta,
    loading,
    error,
  };
};
