import { useState, useEffect } from "react";
import { api } from "../lib/axios"; // Assuming this is your Axios instance
import { getAccessToken, clearTokens } from "../utils/util"; // Your utility functions for token management
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Subscription {
  id: number;
  amount: string;
  timestamp: string;
  description: string;
  reference: string;
  profile: number;
}

export const useSubscriptionDetails = (userId: number | undefined) => {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSubscriptionDetails = async () => {
      if (!userId) return; // Ensure userId is defined before fetching

      setLoading(true);
      setError(null);

      const accessToken = getAccessToken();

      if (!accessToken) {
        setError("User not authenticated or token has expired.");
        setLoading(false);
        return;
      }

      try {
        const response = await api.get<Subscription[]>(
          `/api/payment_history/${userId}/`, // Dynamic user ID in the URL
          {
            headers: {
              Authorization: `Bearer ${accessToken}`, // Pass the token in the header
            },
          }
        );
        console.log(response?.data)
        setSubscriptions(response.data);
        setLoading(false);
      } catch (err: any) {
        setLoading(false);
        // Handle errors and unauthorized responses
        if (err.response?.status === 401) {
          setError("Session has expired. Please log in again.");
          clearTokens();
        } else {
          const errorMessage =
            err.response?.data?.message || "Failed to fetch subscription details.";
          setError(errorMessage);
          toast.error(errorMessage);
        }
      }
    };

    fetchSubscriptionDetails();
  }, [userId]);

  return {
    subscriptions,
    loading,
    error,
  };
};
