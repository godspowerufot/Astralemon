import React from "react";
import { PencilIcon } from "lucide-react";
import { useUserDetails } from "@/hooks/useLoguser";

const MyAccount = () => {
  const { data, loading, error } = useUserDetails(); // Use the hook

  // Show a loading state if the data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  // Handle any errors during data fetching
  if (error) {
    return <div>Error: {error}</div>;
  }

  // If data is successfully fetched, display the profile information
  const profileInfo = [
    { label: "First name", value: data?.first_name || "N/A" },
    { label: "Last name", value: data?.last_name || "N/A" },
    { label: "Email", value: data?.email || "N/A" },
    { label: "Phone", value: data?.phone_no || "N/A" },
  ];

  return (
    <div className="w-full mx-auto ">
      <h1 className="text-2xl font-bold mb-6">My Account</h1>

      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[20px] text-black font-semibold">
            Profile information
          </h2>
          <button className="text-blue-600 border-blue-400 border-[1px] border-solid rounded-xl flex items-center justify-center h-[30px] w-[80px]">
            <PencilIcon className="w-4 h-4 mr-1" />
            Edit
          </button>
        </div>
        <hr className="border-gray-200" />
        <div className="space-y-4">
          {profileInfo.map((item, index) => (
            <div key={index} className="flex">
              <span className="text-gray-500 w-1/3">{item.label}</span>
              <span className="text-black font-[500] text-[14px] w-2/3">
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
