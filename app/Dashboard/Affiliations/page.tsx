"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import { useAuth } from "@/hooks/useAuth";
import "react-toastify/dist/ReactToastify.css";

const Affiliations = () => {
  const { getReferralLink, referralCode, loading, error }:any = useAuth();

  useEffect(() => {
    // Fetch referral link when component mounts
    getReferralLink();
  }, []);

  const handleCopy = () => {
        toast.success("Referral link copied to clipboard!");

    navigator.clipboard.writeText(referralCode); // Copy the referral link to clipboard
  };

  return (
    <div className="overflow-hidden">
      <ToastContainer />

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Affiliations</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
          Request withdrawal
        </button>
      </div>
      <div className="w-[100%] lg:w-full">
        <div
          className="relative mb-6 rounded-xl overflow-hidden bg-cover bg-center p-6"
          style={{
            backgroundImage: "url('/image6.png')", // Update the path as necessary
          }}
        >
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-black">Share your link</h3>
            <p className="text-lg text-black">
              Earn 15% for life on your affiliates. Share your referral link
              with your friends, partners, and customers.
            </p>
            <div className="mt-4 flex flex-row sm:flex-row items-center bg-white rounded-lg overflow-hidden p-3">
              <input
                type="text"
                placeholder="Your referral link"
                value={referralCode} // Display the referral link
                className="flex-1 px-4 py-2 text-gray-700 outline-none w-full sm:w-auto"
                readOnly
              />
              <button
                className="mt-2 sm:mt-0 sm:ml-2 px-4 py-2 text-blue-600 border-blue-400 border-[1px] border-solid rounded-xl flex items-center justify-center h-[40px] sm:h-[30px] w-[130px] sm:w-auto"
                onClick={handleCopy}
                disabled={loading}
              >
                {loading ? "Loading..." : "Copy link"}
              </button>
            </div>
            {error && <p className="text-red-600 mt-2">{error}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
            <div className="flex flex-col">
              <h4 className="text-gray-500">Referral earnings</h4>
              <p className="text-3xl font-semibold">$23,657</p>
            </div>
            <Image
              width={22}
              height={22}
              src={"/images/icon/Vector.png"}
              alt="info"
              priority
            />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
            <div className="flex flex-col">
              <h4 className="text-gray-500">Available balance</h4>
              <p className="text-3xl font-semibold">$3,344</p>
            </div>
            <Image
              width={22}
              height={22}
              src={"/images/icon/Vector.png"}
              alt="info"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Affiliations;
