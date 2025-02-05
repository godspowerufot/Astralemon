"use client";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "../lib/axios"; // Assuming this is your Axios instance
import { getAccessToken, clearTokens } from "../utils/util"; // Your utility functions for token management


interface UpdateUserDetails {
  first_name?: string;
  last_name?: string;
  phone_no?: string;
  username?: string;
}
interface passwordDetails {
  old_password: string,
  new_password: string,
  confirm_password: string

}

export const useUpdateUserDetails = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [LoadingChange, setLoadingChange] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const updateUserDetails = async (updatedData: UpdateUserDetails) => {
    setLoading(true);
    setError(null);

    const accessToken = getAccessToken();

    if (!accessToken) {
      setError("User not authenticated or token has expired.");
      clearTokens();
      router.push("/Login");
      setLoading(false);
      return;
    }

    try {
      const response = await api.put("/accounts/user/update/", updatedData, {
        headers: {
          Authorization: `Bearer ${accessToken}`, // Pass the token in the header
        },
      });
      toast.success("Profile updated successfully!");


      setLoading(false);
      return response.data; // Optionally return updated data
    } catch (err: any) {
      setLoading(false);
      const errorMessage =
        err.response?.data?.message || "Failed to update user details";
      setError(errorMessage);
      toast.error(errorMessage);

      // Handle 401 Unauthorized error by redirecting the user to login
      if (err.response?.status === 401) {
        clearTokens();
        router.push("/Login");
      }
    }
  };

   const changePasswords=async(PasswordData:any)=>{
 setLoadingChange(true);
 setError(null);

 const accessToken = getAccessToken();

 if (!accessToken) {
   setError("User not authenticated or token has expired.");
   clearTokens();
   router.push("/Login");
   setLoadingChange(false);
   return;
 }

 try {
   const response = await api.put("/accounts/change-password", PasswordData, {
     headers: {
       Authorization: `Bearer ${accessToken}`, // Pass the token in the header
     },
   });
   toast.success("Password changed successfully!");

   setLoadingChange(false);
   return response.data; // Optionally return updated data
 } catch (err: any) {
   setLoadingChange(false);
   const errorMessage =
     err.response?.data?.message || "Failed to change password  details";
   setError(errorMessage);
   toast.error(errorMessage);
console.log(err)
   // Handle 401 Unauthorized error by redirecting the user to login
   if (err.response?.status === 401) {
     clearTokens();
     router.push("/Login");
   }
 }


 
   }
  return {
    updateUserDetails,
    changePasswords,
LoadingChange,
    loading,
    error,
  };
};
