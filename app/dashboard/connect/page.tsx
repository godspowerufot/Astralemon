
"use client";
import React, { useState } from "react";
import { toast,ToastContainer } from "react-toastify";
import { api } from "@/lib/axios";
import "react-toastify/dist/ReactToastify.css";
import { getAccessToken } from "@/utils/util";
import { useRouter } from "next/navigation";
const ConnectInstagram: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
const router=useRouter()
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

      toast.success("Instagram account connected successfully!");
console.log(response)
      setLoading(false);
      router.push("/dashboard/connect/displayprofile")
    } catch (err: any) {
    setLoading(false);
      console.log(err);

      // Extract the error message from the Axios error object
      const errorMessage =
        err.response?.data?.error || // Backend error message
        err.response?.data?.message || // Alternate backend error field
        "Connection failed"; // Fallback message
      
      setError(errorMessage);
      toast.error(errorMessage);
    }
  };

  return (
    <div id="wrapper" className=" lg:mx-auto  w-full mt-12 p-1 lg:p-4">
      {/* Flex container for the cards */}
      <ToastContainer />
      <div className="flex flex-col lg:p-5  lg:flex-row gap-8">
        {/* First Card */}
        <div className="main-content flex w-[20rem] md:w-[100%] lg:w-full items-stretch justify-center flex-col gap-[5%] bg-white p-3 lg:p-10 rounded-lg lg:flex-1">
          <div className="header mb-5 flex justify-center mt-5">
            <img
              src="https://i.imgur.com/zqpwkLQ.png"
              alt="Instagram Logo"
            
            />
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleConnect();
            }}
            className="  w-full"
          >
            <label htmlFor="Username" className="text-xl lg:text2xl ">
              {" "}
              Username
            </label>
            <input
              type="text"
              placeholder="enter username"
              className="input-2 w-full border h-[20%] border-[#ACB9CD] lg:p-6 p-3  mt-3 bg-[#F6F7F9]    rounded-lg "
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <div className="overlap-text relative mt-5">
              <label htmlFor="Password" className="  text-xl lg:text-2xl ">
                Password
              </label>
              <input
                type="password"
                placeholder=" enter password"
                className="input-2 w-full border h-[20%] lg:p-6 p-3 border-1 border-[#ACB9CD]  mt-3 bg-[#F6F7F9]    rounded-lg "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="btn w-full rounded-full  mt-5  mb-5  text-[1.2em] lg:p-4 p-2 font-light lg:mt-[7%]  bg-blue-500 text-white   lg:font-bold hover:bg-blue-600 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Connecting..." : "Connect"}
            </button>
          </form>
        </div>

        {/* Second Card */}
        <div className="info-card bg-white  h-fit p-10 rounded-lg w-full flex-1">
          <h2 className="text-2xl font-bold mb-4">Functionalities</h2>
          <hr className="bg-[#6B7280] w-full mb-3 " />
          <p className="mb-4 text-[#6B7280]  font-medium lg:text-[1.2em] ">
            {" "}
            Connect your Instagram account to access our custom coded algorithm
          </p>
          <h3 className="lg:text-2xl text-xl  mt-5 font-semibold mb-2">
            You &apos;re information provided is secured.
          </h3>
          <ol className="list-decimal   text-[#6B7280] lg:text-[1.2em] font-medium list-inside mb-4">
            <li>Connect your account.</li>
            <li>Confirm with 2 factor authentication. (optional)</li>
            <li>Chose your target audience.</li>
            <li>Start the algorithm.</li>
          </ol>
        
        </div>
      </div>

      {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
    </div>
  );
};

export default ConnectInstagram;