"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import MediaBear from "@/public/media logo.png";
import useLogin from "@/hooks/useLogin"; // Adjust the import path accordingly

const steps = [
  {
    icon: "text-blue-500",
    number: "1",
    title: "Connectez votre compte Instagram",
    description:
      "Nous prenons en charge la double authentification et tout est 100% crypté et sécurisé !",
  },
  {
    icon: "text-blue-500",
    number: "2",
    title: "Choisissez votre audience idéale",
    description:
      "Configurez l'algorithme pour qu'il s'adapte à votre niche en identifiants quelques concurrents.",
  },
  {
    icon: "text-blue-500",
    number: "3",
    title: "Profitez de l'IA et de notre algorithme",
    description:
      "Notre algorithme effectuera des actions pour vous et vous gagnerez des followers réels et ciblés.",
  },
];

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { login, loading, error } = useLogin();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, password } = formData;

    const { success, error } = await login(username, password);

    if (success) {
      alert("Login successful");
      // Redirect to dashboard or another page
      router.push("/dashboard");
    } else {
      alert("Login failed: " + error);
    }
  };

  return (
    <div className="h-[50%] bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-[80%] xl:w-[50.666667%] p-6 sm:p-12">
          <div>
            <Image
              src={MediaBear}
              alt="Logo"
              width={100}
              height={100}
              className="w-32 mx-auto"
            />
          </div>
          <div className="mt-8 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">Login</h1>
            <div className="w-full flex-1 mt-8">
              <form onSubmit={handleSubmit}>
                <div className="mx-auto max-w-xs">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
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
                    className="mt-5 tracking-wide font-semibold bg-blue-600 text-gray-100 w-full py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    {loading ? (
                      <svg
                        className="w-6 h-6 -ml-2 animate-spin"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 4v8m0 0h8m-8 0H4"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6 -ml-2 pr-2" // Added padding-right
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 21v-2a4 4 0 00-8 0v2m8-10a4 4 0 01-8 0m8 0V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v6m8 0H4"
                        ></path>
                      </svg>
                    )}
                    <span className="ml-3">
                      {loading ? "Processing..." : "Sign In"}
                    </span>
                  </button>
                </div>
              </form>
              <p className="mt-8 text-center">
                <span>Don&apos;t have an account?</span>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 font-semibold ml-2"
                  onClick={() => router.push("/Registration")}
                >
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 justify-center items-center flex-col bg-black text-center hidden lg:flex">
          <div className="flex justify-center">
            <Image
              alt="Logo"
              loading="lazy"
              width="100"
              height="20"
              decoding="async"
              src={MediaBear}
              className="transform scale-300 mt-3"
            />
          </div>

          <div className="flex flex-col justify-center items-center mt-12 w-[70%]">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col mb-6">
                <div className="flex items-center text-left p-2">
                  <span className="w-full text-gray-600 text-sm">
                    <span className="flex ">
                      {" "}
                      <span
                        className={` ml-[-3%] flex-shrink-0 pr-2 flex items-center ${step.icon}`}
                      >
                        <svg
                          className="w-8 h-8 border border-gray-500 rounded-full flex items-center justify-center" // Thicker border and rounded full
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
                      {" "}
                      {/* Changed border color and thickness */}
                      <div className="overflow-visible transition-height duration-300">
                        <p className="text-white text-sm">{step.description}</p>
                      </div>
                    </div>
                  </span>
                </div>

                {step.number !== "3" && (
                  <div className="flex items-center">
                    <div className="border-l border-gray-500 flex-1 ml-3"></div>{" "}
                    {/* Changed border color and thickness */}
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

export default Login;
