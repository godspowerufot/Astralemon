"use client";
import React, { useState } from "react";
import Card from "./cards";

const DisplayInstaProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"monthly" | "yearly">("monthly");
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);


  return (
    <div id="wrapper" className=" mx-auto mt-12 p-2 lg:p-4">
      {" "}
      {/* Flex container for the cards */}
      <div className="flex  w-full items-start flex-col lg:flex-row gap-8">
        {/* First Card */}
        <div className="flex flex-1 flex-col ustify-center w-full ">
          <div className=" w-full   flex justify-center flex-col gap-[5%] bg-white  p-10 rounded-lg flex-1">
            <div className="flex  relative flex-col items-center mb-4">
              <div className="w-5 h-5  absolute top-0 right-0  float-right rounded-full bg-green-400 overflow-hidden "></div>

              <div className="w-30 h-30 rounded-full bg-slate-400 overflow-hidden mr-4"></div>
              <div>
                <h2 className="text-[1.3em] mt-2 font-bold">Divine Samuel </h2>
                <p className="text-[1em] text-center text-[#6B7280]">@divine</p>
              </div>
            </div>
            <div className="flex justify-center  items-center gap-[10%] mt-2 text-sm mb-4">
              <div>
                <p className="font-bold">Posts</p>

                <p className="text-[#6B7280]">53</p>
              </div>
              <div>
                <p className="font-bold">Followers</p>
                <p className=" text-[#6B7280]">1,363</p>
              </div>
              <div>
                <p className="text-gray-400 font-bold">Following</p>
                <p className="text-[#6B7280]">34</p>
              </div>
            </div>

            <button className="bg-transparent border-solid text-red border-red border-[1px] px-4 py-2 rounded-full ">
              Disconnect
            </button>
          </div>
          {/* second display pages */}
          <h2 className="mt-7 mb-5 text-black-2 font-medium text-[1.5em]">
            Saved user account profiles
          </h2>
            {/* /dividing card */}{" "}
           <Card/>
        </div>
        {/* Second Card */}

        <div className="info-card bg-white border- p-10 rounded-lg shadow-md flex-1">
          <div>
            <h2 className="text-gray-3">
Setting 
            </h2>
            <h2 className="text-blue">
              Target
              </h2>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default DisplayInstaProfile;
