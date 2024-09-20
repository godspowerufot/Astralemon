"use client"; 

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast ,ToastContainer} from "react-toastify";
import { api } from "@/lib/axios"; // Ensure your Axios instance is correctly configured
import "react-toastify/dist/ReactToastify.css";
import { getAccessToken } from "@/utils/util";
const PasswordReset = () => {
  const [newPassword, setNewPassword] = useState<string>("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const searchParams = useSearchParams(); 

 
  const uid = searchParams.get("uid");
  const token = searchParams.get("token");
 console.log(uid,token)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
 const accessToken = getAccessToken();

    // Validate passwords match
    if (newPassword !== newPasswordConfirm) {
      toast.error("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      setLoading(true)
      // send request  to the reset password confirm endpoint
      await api.post(
        "/accounts/password-reset-confirm/",
        {
          uid,
          token,
          new_password: newPassword,
          new_password_confirm: newPasswordConfirm,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        }
      );
setLoading(false)
      toast.success("Password reset successful");
      router.push("/Login"); // Redirect to login after success
    } catch (err: any) {
      console.log(err)
      toast.error(err.response?.data?.error || "Failed to reset password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <ToastContainer/>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Reset Password</h2>

        <div className="mb-4">
          <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
            New Password
          </label>
          <input
            id="newPassword"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="newPasswordConfirm" className="block text-sm font-medium text-gray-700">
            Confirm New Password
          </label>
          <input
            id="newPasswordConfirm"
            type="password"
            value={newPasswordConfirm}
            onChange={(e) => setNewPasswordConfirm(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? "Resetting Passwords..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
};

// components/Spinner.js
const Spinner = () => (
  <div className="flex justify-center items-center h-full">
    <svg
      className="animate-spin h-8 w-8 border-t-4 border-blue-500 border-solid rounded-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  </div>
);


const PasswordResetPage = () => {
  return (
    <Suspense fallback={<Spinner/>}>
      <PasswordReset />
    </Suspense>
  );
};

export default PasswordResetPage;
