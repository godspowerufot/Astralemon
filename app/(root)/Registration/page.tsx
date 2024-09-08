// pages/Register.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import MediaBears from "@/public/media logo.png";
import { useAuth } from "@/hooks/useAuth"; // Import the useAuth hook
import { steps } from "@/lib/expertlink";

const Register = () => {
  // Manage form data
  const [formData, setFormData] = useState({
    first_name: "",
    username: "",
    last_name: "",
    email: "",
    password: "",
    phone_no: "",
    referred_by: "", // Optional field, assuming it is a UUID or similar value
  });

  // Use the custom useAuth hook
  const { register, loading, error } = useAuth();
  const router = useRouter();

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

    // Call the register function from the useAuth hook
    await register(formData.email, formData.username, formData.password);

    if (!error) {
      alert("Registration successful!");
      router.push("/Dashboard"); // Redirect to the login page
    } else {
      alert("Registration failed: " + error);
    }
  };

  // Handle navigation (e.g., to Login page)
  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="h-[50%] bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow-2xl rounded-lg flex justify-center flex-1">
        <div className="lg:w-[50%] xl:w-[50.666667%] p-6 sm:p-12">
          <div className="mt-8 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">Register</h1>
            <p>Register to create your account</p>
            <div className="w-full flex-1 mt-8">
              <form onSubmit={handleSubmit}>
                <div className="mx-auto max-w-[35rem]">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    value={formData.first_name}
                    onChange={handleChange}
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    value={formData.last_name}
                    onChange={handleChange}
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="text"
                    name="phone_no"
                    placeholder="Phone Number"
                    value={formData.phone_no}
                    onChange={handleChange}
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="text"
                    name="referred_by"
                    placeholder="Referred By (UUID)"
                    value={formData.referred_by}
                    onChange={handleChange}
                  />
                  <button
                    type="submit"
                    className="mt-5 tracking-wide text-white font-semibold bg-blue-600 text-gray-100 w-full py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    disabled={loading}
                  >
                    <span className="ml-3">
                      {loading ? "Processing..." : "Sign Up"}
                    </span>
                  </button>
                </div>
              </form>
              {error && (
                <p className="mt-4 text-red-500 text-center">{error}</p>
              )}
              <p className="mt-8 text-center">
                <span>Already have an account?</span>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 font-semibold ml-2"
                  onClick={() => handleNavigation("/Login")}
                >
                  Sign in
                </a>
              </p>
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
    </div>
  );
};

export default Register;
