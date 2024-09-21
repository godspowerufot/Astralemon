"use client";
import React, { useState } from "react";
import Card from "./cards";
import TargetCard from "./target";

const DisplayInstaProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState("target");


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
          {/* /dividing card */}
           <Card />
        </div>
        {/* Second Card */}

        <div className="info-card bg-white border- p-10 rounded-lg shadow-md flex-1">
          <div className="flex gap-8">
            {/* Tab Buttons */}
            <h2
              className={`cursor-pointer text-lg font-medium ${
                activeTab === "setting" ? "text-blue-600" : "text-gray-600"
              }`}
              onClick={() => setActiveTab("setting")}
            >
              Setting
            </h2>
            <h2
              className={`cursor-pointer text-lg font-medium ${
                activeTab === "target" ? "text-blue-600" : "text-gray-600"
              }`}
              onClick={() => setActiveTab("target")}
            >
              Target
            </h2>
          </div>

          {/* Render different content based on active tab */}
          <div className="mt-8">
            {activeTab === "setting" ? (
              <div>
                <h2 className="text-gray-600">
                  Hi, this is the Setting content!
                </h2>
              </div>
            ) : (
              <div>
                <TargetCard/>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayInstaProfile;
