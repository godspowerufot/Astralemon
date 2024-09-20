"use client";
import React, { useState, useEffect, useRef, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation"; // Use `useSearchParams` to get the URL params
import Image from "next/image";
import MediaBears from "@/public/media logo.png";
import { useAuth } from "@/hooks/useAuth"; // Import the useAuth hook
import { steps } from "@/lib/expertlink";

interface FormData {
  first_name: string;
  username: string;
  last_name: string;
  email: string;
  password: string;
}

const Register = () => {
  const [formData, setFormData] = useState<FormData>({
    first_name: "",
    username: "",
    last_name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );
  const [showModal, setShowModal] = useState(false);
  const { register, loading, error } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams(); // To extract the ref query param
const inputRefs: Partial<Record<keyof Omit<FormData, 'referred_by'>, React.RefObject<HTMLInputElement>>> = {
  first_name: useRef(null),
  last_name: useRef(null),
  username: useRef(null),
  email: useRef(null),
  password: useRef(null),
};

 
 

  const validateForm = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    (Object.keys(formData) as (keyof FormData)[]).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "This field is required";
      }
    });
    setErrors(newErrors);

    // Focus on the first error field
    if (Object.keys(newErrors).length > 0) {
      const firstErrorKey = Object.keys(newErrors)[0] as keyof FormData;
      inputRefs[firstErrorKey]?.current?.focus();
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name as keyof FormData]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name as keyof FormData]: "", // Clear the error as user types
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const referralCode = searchParams.get("ref"); // Get referral code from URL

    // If there's a referral code, include it in the form data
    if (referralCode) {
      setFormData((prevData) => ({ ...prevData, referred_by: referralCode }));
    }
    if (validateForm()) {
      await register(formData);
    }
  };

  const handleNavigation = (path: string) => {
    router.push(path);
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
  return (

    <>
      {/* Main container with loading blur effect */}
      <div
        className={`h-[50%] bg-gray-100 text-gray-900 flex justify-center ${
          loading ? "blur-sm" : ""
        }`}
      >
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow-2xl rounded-lg flex justify-center flex-1">
          <div className="lg:w-[50%] xl:w-[50.666667%] p-6 sm:p-12">
            <div className="mt-8 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold">Register</h1>
              <p>Register to create your account</p>
              <div className="w-full flex-1 mt-8">
                <form onSubmit={handleSubmit}>
                  <div className="mx-auto max-w-[35rem]">
                    {[
                      "first_name",
                      "last_name",
                      "username",
                      "email",
                      "password",
                    ].map((field, index) => (
                      <div key={index} className="mt-5">
                        <input
                          ref={inputRefs[field as keyof FormData]}
                          className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border ${
                            errors[field as keyof FormData]
                              ? "border-red"
                              : "border-gray-200"
                          } placeholder-gray-500 text-sm focus:outline-none ${
                            errors[field as keyof FormData]
                              ? "focus:border-red"
                              : "focus:border-gray-400"
                          } focus:bg-white`}
                          type={
                            field === "email"
                              ? "email"
                              : field === "password"
                              ? "password"
                              : "text"
                          }
                          name={field}
                          placeholder={
                            field === "username"
                              ? "Choose a username"
                              : field
                                  .replace("_", " ")
                                  .charAt(0)
                                  .toUpperCase() +
                                field.replace("_", " ").slice(1)
                          }
                          value={formData[field as keyof FormData]}
                          onChange={handleChange}
                        />

                        {errors[field as keyof FormData] && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors[field as keyof FormData]}
                          </p>
                        )}
                      </div>
                    ))}

                    <button
                      type="submit"
                      className="mt-5 tracking-wide text-white font-semibold bg-blue-600 text-gray-100 w-full py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                      disabled={loading}
                    >
                      {loading ? (
                        <svg
                          className="animate-spin h-5 w-5 mr-3 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          ></path>
                        </svg>
                      ) : (
                        <span className="ml-3">Sign Up</span>
                      )}
                    </button>
                  </div>
                </form>

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
                          className={`ml-[-3%] flex-shrink-0 pr-2 flex items-center ${step.icon}`}
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
                        <span className="pl-4 font-medium text-white">{step.title}</span>
                      </span>
                    </span>
                  </div>
                  <span className="pl-6 border-l-white  text-white pr-2 text-gray-300 text-sm text-left">
                    {step.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </>
  );
};

export default Register;
