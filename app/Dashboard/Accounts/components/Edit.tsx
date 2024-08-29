import React from "react";
import { PencilIcon } from "lucide-react";

const MyAccount = () => {
  const profileInfo = [
    { label: "First name", value: "Divine" },
    { label: "Last name", value: "Samuel" },
    { label: "Email", value: "enodivinesamuel@gmail.com" },
    { label: "Phone", value: "+234 813 121 0163" },
  ];

  return (
    <div className="w-full mx-auto ">
      <h1 className="text-2xl font-bold mb-6">My Account</h1>

      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[20px] text-black font-semibold">Profile information</h2>
          <button className="text-blue-600 border-blue-400 border-[1px]  border-solid rounded-xl flex items-center justify-center h-[30px] w-[80px]">
            <PencilIcon className="w-4 h-4 mr-1" />
            Edit
          </button>
        </div>
        <hr className="border-gray-200" />
        <div className="space-y-4">
          {profileInfo.map((item, index) => (
            <div key={index} className="flex">
              <span className="text-gray-500 w-1/3">{item.label}</span>
              <span className="text-black font-[500] text-[14px] -2/3">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
