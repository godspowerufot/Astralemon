'use client'
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
const TargetCard = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("Add Profile");
  const [search, setSearch] = useState("");

  return (
    <div>
      <div className="flex items-center bg-[#eeeff0] p-2 rounded-md w-72">
        <button
          className={`flex-1 px-4 py-2 rounded-l-md ${
            activeTab === "Add Profile"
              ? "bg-white text-blue-600 font-semibold"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("Add Profile")}
        >
          Add Profile
        </button>
        <button
          className={`flex-1 px-4 py-2 no-wrap rounded-r-md ${
            activeTab === "Add hashtag"
              ? "bg-white  text-blue-600 font-semibold"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("Add hashtag")}
        >
          Add hashtag
        </button>
      </div>

      {/* Content based on the active tab */}
      <div className="mt-8     w-full ">
        {activeTab === "Add Profile" ? (
          <div className="flex w-full ">
            {/* input */}
            <div className="flex w-full items-center gap-4 justify-start">
              <input
                type="text"
                placeholder="enter a Username"
                className="input-2  border h-[10%] border-[#ACB9CD] p-6   mt-3 bg-[#F6F7F9]    rounded-lg "
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                required
              />
              <div className="btn lg:w-[10em]  p-[0.5em] rounded-lg flex item-center  mr-5 justify-center gap-2   mt-2 text-[1.2em]    bg-blue-500 text-white   font-bold hover:bg-blue-600 disabled:opacity-50">
                <BiSearch className="text-white h-8" />
                <p className="text-white  font-light">search </p>
              </div>
            </div>
            {/* Setting Content */}
          </div>
        ) : (
          <div>
            {/* Target Content */}
            <h2 className="text-blue-600 ">This is the Target Content</h2>
            <p>You can view and set your targets here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TargetCard;
