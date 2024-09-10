import React, { useState } from "react";
import { toast } from "react-toastify"; // Toastify for notifications
import { api } from "@/lib/axios";
import Modal from "./component";
const ForgotPasswordModal = ({ onClose, onResetRequestSuccess }: any) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle email input
  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  // Submit email for password reset
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post("/accounts/password-reset/", { email });
      setLoading(false);
      toast.success("Password reset link sent. Please check your email.");
      onResetRequestSuccess(); // Trigger to switch to the next modal
    } catch (err) {
      setLoading(false);
      toast.error("Failed to send reset link. Please try again.");
    }
  };

  return (
    <Modal title="Forgot Password" onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Enter your email to reset password:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          className="w-full px-4 py-2 mt-2 border rounded-md"
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
    </Modal>
  );
};

export default ForgotPasswordModal;
