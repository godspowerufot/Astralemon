"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import {api} from "@/lib/axios"
import "react-toastify/dist/ReactToastify.css";
import { setTokens, clearTokens, getAccessToken } from "@/utils/util";

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
      console.log(response?.data)
      toast.success("Instagram account connected successfully!");
    } catch (err: any) {
      setLoading(false);
      const errorMessage = err.response?.data?.message || "Connection failed";
      setError(errorMessage);
      toast.error(errorMessage);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Connect Instagram Account</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleConnect();
        }}
      >
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 p-2 block w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 block w-full border rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          {loading ? "Connecting..." : "Connect"}
        </button>
      </form>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default ConnectInstagram;
