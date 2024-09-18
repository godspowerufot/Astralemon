"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAuth } from "@/hooks/useAuth"; // Import the useAuth hook
import MediaBears from "@/public/media logo.png";
import { steps } from "@/lib/expertlink";
import { ToastContainer, toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Toastify styles
import Modals from "./component/component"; // Modal component for resending verification email
import { api } from "@/lib/axios";
import ForgotPasswordModal from "./component/forgotPasswordmodal";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showModal, setShowModal] = useState(false); // State to show/hide modal

  // Use the useAuth hook
  const { login, loading, error } = useAuth();
  const router = useRouter();
  const [showResetModal, setShowResetModal] = useState(false);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = formData;
try{
 await login(email, password);
}
   catch(err) {
 if (
   err === "Account is not verified. Please verify your account to login."
 ) {
   setShowModal(true);
 }
   }// Call the login function from the useAuth hook
   

    // Handle specific errors like email not verified
    // Show modal for resending verification email
   
  };

  // Resend verification email handler
  const handleResendVerification = async () => {
    try {
      await api.post("/accounts/resend-verification/", {
        email: formData.email,
      });
      toast.success("Verification email sent successfully");
      setShowModal(false); // Close modal after sending
    } catch (err) {
      toast.error("Failed to send verification email");
    }
  };

  return (
    <div
      className={`h-[50%] bg-gray-100 text-gray-900 flex justify-center ${
        loading ? "blur-sm" : ""
      }`}
    >
      <ToastContainer /> {/* Toast Container for notifications */}
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow-2xl rounded-lg flex justify-center flex-1">
        <div className="lg:w-[80%] xl:w-[50.666667%] p-6 sm:p-12">
          <div className="mt-8 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">Login</h1>
            <p>Log in to your Astralemon account to continue</p>
            <div className="w-full flex-1 mt-8">
              <form onSubmit={handleSubmit}>
                <div className="mx-auto max-w-[35rem]">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <button
                    type="submit"
                    className="mt-5 text-white tracking-wide font-semibold bg-blue-600 text-gray-100 w-full py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    disabled={loading}
                  >
                    <span className="ml-3">
                      {loading ? "Processing..." : "Sign In"}
                    </span>
                  </button>
                </div>
              </form>

              <p className="mt-8 text-center">
                <span>Don&apos;t have an account?</span>
                <a
                  href="/registration"
                  className="text-blue-500 hover:text-blue-700 font-semibold ml-2"
                >
                  Sign up
                </a>
              </p>
              <div>
                {/* Existing login form */}
                {/* Forgot password link */}
                <p className="mt-8 text-center">
                  <span>Forgot your password?</span>
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-700 font-semibold ml-2"
                    onClick={() => setShowResetModal(true)}
                  >
                    Click here
                  </a>
                </p>

                {showResetModal && (
                  <ForgotPasswordModal
                    onClose={() => setShowResetModal(false)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 justify-center items-center flex-col bg-[#111213] text-center hidden lg:flex">
          <div className="flex justify-center">
            <Image
              alt="Logo"
              loading="lazy"
              width="100"
              height="100"
              decoding="async"
              src={MediaBears}
              className="transform scale-300 mt-3 w-full h-full"
            />
          </div>

          <div className="flex flex-col justify-center items-center mt-12 w-[70%]">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col mb-6">
                <div className="flex items-center text-left p-2">
                  <span className="w-full text-gray-600 text-sm">
                    <span className="flex ">
                      <span
                        className={` ml-[-3%] flex-shrink-0 pr-2 flex items-center ${step.icon}`}
                      >
                        <svg
                          className="w-8 h-8 border border-gray-500 rounded-full flex items-center justify-center"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <circle cx="12" cy="12" r="12" />
                          <text
                            className="text-white font-bold text-sm"
                            x="12"
                            y="12"
                            textAnchor="middle"
                            dominantBaseline="central"
                          >
                            {step.number}
                          </text>
                        </svg>
                      </span>
                      <span className="ml-[0%] block font-semibold text-white">
                        {step.title}
                      </span>
                    </span>
                    <div className="border-l-[4px] border-white pl-5">
                      <div className="overflow-visible transition-height duration-300">
                        <p className="text-white text-sm">{step.description}</p>
                      </div>
                    </div>
                  </span>
                </div>

                {step.number !== "3" && (
                  <div className="flex items-center">
                    <div className="border-l border-gray-500 flex-1 ml-3"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Modal for resending verification email */}
      {showModal && (
        <Modals
          title="Email not verified"
          onClose={() => setShowModal(false)}
          onAction={handleResendVerification}
          actionLabel="Resend Verification Email"
        >
          <p>
            Your email is not verified. Please click the button below to resend
            the verification email.
          </p>
        </Modals>
      )}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500"></div>
        </div>
      )}
    </div>
  );
};

export default Login;
