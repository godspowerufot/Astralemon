'use client'
// components/Register.tsx
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import MediaBear from "@/public/media logo.png";
import LoginImage from "@/public/Secure login-bro.svg";
import useRegister from "@/hooks/useRegister"; // Adjust the import path as necessary
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
const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { register, loading, error } = useRegister();
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
    const response = await register(formData);

    if (response) {
      alert("Registration successful");
      // Redirect to login page or handle successful registration
    } else {
      alert("Registration failed: " + error);
    }
  };

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="h-[50%] bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-[50%] xl:w-[50.666667%] p-6 sm:p-12">
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
            <h1 className="text-2xl xl:text-3xl font-extrabold">Register</h1>
            <div className="w-full flex-1 mt-8">
              <div className="flex flex-col items-center">
                <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                  <div className="bg-white p-2 rounded-full">
                    <svg
                      className="w-4"
                      viewBox="0 0 533.5 544.3"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M533.5 278.4c0-22.1-1.9-43.3-5.4-64H272v121.5h146.6c-6.4 34.8-25.1 64.2-53.4 83.5v69.2h86.2c50.4-46.4 81.1-115.1 81.1-210.2z"
                        fill="#4285f4"
                      />
                      <path
                        d="M272 544.3c72.7 0 133.6-24.2 178.1-65.3l-86.2-69.2c-24 16.1-54.3 25.7-91.9 25.7-70.6 0-130.4-47.6-151.7-111.5H30.4v71.6c44.4 88.4 135.5 148.7 241.6 148.7z"
                        fill="#34a853"
                      />
                      <path
                        d="M120.3 323.9c-10.6-30.8-10.6-64.1 0-94.9v-71.7H30.4c-44.4 88.5-44.4 193.7 0 282.2l89.9-71.6z"
                        fill="#fbbc04"
                      />
                      <path
                        d="M272 107.6c38.2 0 72.4 13.2 99.3 39.2l74.6-74.6c-48.4-44.4-110.8-72.2-173.9-72.2-106.1 0-197.2 60.3-241.6 148.7l89.9 71.7C141.6 155.2 201.4 107.6 272 107.6z"
                        fill="#ea4335"
                      />
                    </svg>
                  </div>
                  <span className="ml-4">Sign Up with Google</span>
                </button>
              </div>
              <div className="my-12 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  Or sign up with e-mail
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mx-auto max-w-xs">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
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
                  <button
                    type="submit"
                    className="mt-5 tracking-wide font-semibold bg-blue-600 text-gray-100 w-full py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    disabled={loading}
                  >
                    {loading ? (
                      <svg
                        className="w-6 h-6 animate-spin -ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6V3m0 0l-3 3m3-3l3 3m-3 0v9"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6 -ml-2"
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
                      {loading ? "Processing..." : "Sign Up"}
                    </span>
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

export default Register;
