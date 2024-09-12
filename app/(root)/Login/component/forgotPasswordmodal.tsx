import React, { useState } from "react";
import { toast } from "react-toastify"; // Toastify for notifications
import { api } from "@/lib/axios";

const ForgotPasswordModal = ({ onClose, onResetRequestSuccess }: any) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle email input
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // Submit email for password reset
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post("/accounts/password-reset/", { email });
      setLoading(false);
      toast.success("Password reset link sent. Please check your email.");
    } catch (err) {
      setLoading(false);
      toast.error("Failed to send reset link. Please try again.");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4">Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className="block text-gray-700">
            Enter your email to reset password:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
            required
          />
          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white w-full py-2 rounded-md"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
