
"use client";
import React, { useState } from "react";
import { toast,ToastContainer } from "react-toastify";
import { api } from "@/lib/axios";
import "react-toastify/dist/ReactToastify.css";
import { getAccessToken } from "@/utils/util";
const ConnectInstagram: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleConnect = async () => {
    setLoading(true);
    setError(null);
    const accessToken = getAccessToken();

    try {
      const response = await api.post(
        "/api/instagram-accounts/create/",
        {
          username,
          password,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`, // Pass the token in the header
          },
        }
      );
console.log(response)
      toast.success("Instagram account connected successfully!");

      setLoading(false);
    } catch (err: any) {
      setLoading(false);
      console.log(err)
      const errorMessage = err.response?.data?.message || "Connection failed";
      setError(errorMessage);
      toast.error(errorMessage);
    }
  };

  return (
    <div id="wrapper" className="max-w-4xl mx-auto mt-12 p-4">
      {/* Flex container for the cards */}
      <ToastContainer/>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* First Card */}
        <div className="main-content flex items-stretch justify-center flex-col gap-[5%] bg-white border-2 p-10 rounded-lg shadow-md flex-1">
          <div className="header mb-5 flex justify-center">
            <img
              src="https://i.imgur.com/zqpwkLQ.png"
              alt="Instagram Logo"
              className="h-12 w-44"
            />
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleConnect();
            }}
            className="l-part space-y-4"
          >
            <input
              type="text"
              placeholder="Username"
              className="input-1 w-full border border-gray-300 p-2 rounded-md focus:ring focus:ring-blue-300"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <div className="overlap-text relative mt-5">
              <input
                type="password"
                placeholder="Password"
                className="input-2 w-full border border-gray-300 p-2 rounded-md focus:ring focus:ring-blue-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="btn w-full bg-blue-500 text-white p-2 rounded-md font-bold hover:bg-blue-600 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Connecting..." : "Connect"}
            </button>
          </form>
        </div>

        {/* Second Card */}
        <div className="info-card bg-white border-2 p-10 rounded-lg shadow-md flex-1">
          <h2 className="text-2xl font-bold mb-4">Functionalities</h2>
          <p className="mb-4">
            {" "}
            Connect your Instagram account to access our custom coded algorithm
          </p>
          <h3 className="text-xl font-semibold mb-2">
            You &apos;re information provided is secured.
          </h3>
          <ol className="list-decimal list-inside mb-4">
            <li>Connect your account.</li>
            <li>Confirm with 2 factor authentication. (optional)</li>
            <li>Chose your target audience.</li>
            <li>Start the algorithm.</li>
          </ol>
          <p className="text-sm text-gray-500">
            Time estimation: <b>2 minutes</b>
          </p>
        </div>
      </div>

      {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
    </div>
  );
};

export default ConnectInstagram;