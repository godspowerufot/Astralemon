"use client";
import React, { useState } from "react";

const DisplayInstaProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"monthly" | "yearly">("monthly");
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);


  return (
    <div id="wrapper" className="max-w-4xl mx-auto mt-12 p-4">
      {/* Flex container for the cards */}
      <div className="flex  items-startflex-col lg:flex-row gap-8">
        {/* First Card */}
        <div className="main-content flex items-stretch text-black justify-center flex-col gap-[5%] bg-white border-2 p-10 rounded-lg shadow-md flex-1">
          <div className="flex  flex-col items-center mb-4">
            <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
              <img
                src="/api/placeholder/64/64"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-lg font-bold">Gorden Iorretta</h2>
              <p className="text-sm text-gray-400">@Gorden_Iorretta</p>
            </div>
          </div>
          <div className="flex justify-between text-sm mb-4">
            <div>
              <p className="text-gray-400">Posts</p>

              <p className="font-bold">53</p>
            </div>
            <div>
              <p className="text-gray-400">Followers</p>
              <p className="font-bold">1,363</p>
            </div>
            <div>
              <p className="text-gray-400">Following</p>
              <p className="font-bold">34</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="bg-green-500 text-white px-4 py-2 rounded-md flex-grow">
              Connect
            </button>
            <button className="bg-red text-white px-4 py-2 rounded-md flex-grow">
              Disconnect
            </button>
          </div>
          <div className="mt-4 text-sm text-gray-400">
            <p>Status: Not Connected</p>
          </div>
        </div>

        {/* Second Card */}
        <div>
          <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
            <div className="flex items-center bg-[#eeeff0] p-2 rounded-md w-72">
              <button
                className={`flex-1 px-4 py-2 rounded-l-md ${
                  activeTab === "monthly"
                    ? "bg-white text-blue-600 font-semibold"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("monthly")}
              >
                Target
              </button>
              <button
                className={`flex-1 px-4 py-2 rounded-r-md ${
                  activeTab === "yearly"
                    ? "bg-white text-blue-600 font-semibold"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("yearly")}
              >
                Yearly
              </button>
            </div>
          </div>

          <div className="info-card bg-white border-2 p-10 rounded-lg shadow-md flex-1">
            <h2 className="text-2xl font-bold mb-4">Functionalities</h2>
            <p className="mb-4">
              {" "}
              Connect your Instagram account to access our custom coded
              algorithm
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
      </div>
    </div>
  );
};

export default DisplayInstaProfile;
