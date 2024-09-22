'use client'
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Search } from "lucide-react";
const TargetCard = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("Add Profile");
  const [search, setSearch] = useState("");
const users = [
  { id: 1, username: "@divine", name: "Divine Samuel" },
  { id: 2, username: "@jane_doe", name: "Jane Doe" },
  { id: 3, username: "@john_smith", name: "John Smith" },
  { id: 4, username: "@emily_clark", name: "Emily Clark" },
  { id: 5, username: "@michael_lee", name: "Michael Lee" },
];
  return (
    <div>
      <div className="flex items-center bg-[#eeeff0] p-2 rounded-md   lg:w-72">
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
          <div className="flex  flex-col w-full ">
            {/* input */}
            <div className="flex w-full items-center gap-4 justify-start">
              {/* Search icon inside the input field */}
              <div className="relative w-full">
                <Search className="absolute text-[#ACB9CD] h-6 left-3 top-[55%] transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="search username"
                  className="input-2 border h-12 border-[#ACB9CD] pl-[3rem] lg:pl-[5rem] pr-4 mt-3 bg-[#F6F7F9] rounded-lg w-full"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  required
                />
              </div>

              <div className="rounded-lg px-3 flex h-[35px]  mr-5 justify-center gap-2  mt-2  items-center text-[1.2em]    bg-blue-500 text-white   font-bold hover:bg-blue-600 disabled:opacity-50">
                <Search className="h-5" />
                <p className="text-white  font-light hidden lg:block ">
                  search{" "}
                </p>
              </div>
            </div>
            <h2 className="mt-7 mb-5 text-black-2 font-medium text-[1.5em]">
              Results
            </h2>
            <div className="flex flex-col gap-x-5 ">
              {users.map((user, index) => (
                <div
                  key={index}
                  className="flex lg:gap-7 justify-between  items-center p-4 bg-white rounded-lg "
                >
                  <div className="w-10 h-10 rounded-full bg-slate-400 overflow-hidden"></div>
                  <h2 className="lg:text-[1em] text-[0.7em]  font-medium">
                    {user.username}
                  </h2>
                  <h2 className="lg:text-[1em] text-[0.7em] font-medium text-nowrap">
                    {user.name}
                  </h2>
                  <div className="btn lg:w-[5em] font-light p-2 lg:p-1 rounded-lg flex items-center justify-center gap-2 text-[0.7em] lg:text-[1em] bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50">
                    Add
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            {/* Target Content */}
            <div className="flex w-full items-center gap-4 justify-start">
              {/* Search icon inside the input field */}
              <div className="relative w-full">
                <Search className="absolute text-[#ACB9CD] h-6 left-3 top-[55%] transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="search hashtag"
                  className="input-2 border h-12 border-[#ACB9CD]  pl-[3rem] lg:pl-[5rem] pr-4 mt-3 bg-[#F6F7F9] rounded-lg w-full"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  required
                />
              </div>

              <div className="rounded-lg px-3 flex h-[35px]  mr-5 justify-center gap-2  mt-2  items-center text-[1.2em]    bg-blue-500 text-white   font-bold hover:bg-blue-600 disabled:opacity-50">
                <Search className="h-5" />
                <p className="text-white  font-light hidden lg:block ">
                  search{" "}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TargetCard;
