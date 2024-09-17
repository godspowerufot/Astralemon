"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
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

      setLoading(false);
      toast.success("Instagram account connected successfully!");
    } catch (err: any) {
      setLoading(false);
      const errorMessage = err.response?.data?.message || "Connection failed";
      setError(errorMessage);
      toast.error(errorMessage);
    }
  };

  return (
    <div id="wrapper" className="max-w-lg mx-auto mt-12 p-4">
      <div className="main-content bg-white border-2 border-gray-300 p-10 rounded-lg shadow-md">
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
          <div className="overlap-text relative">
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
     
      {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
    
    </div>
  );
};

export default ConnectInstagram;
