"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";
const SettingCard = () => {
  // State to track the active tab
  const settings = [
    { id: 1, label: "Story views" },
    { id: 2, label: "Story likes" },
    { id: 3, label: "Interactive user voting" },
  ];

 const [activeToggles, setActiveToggles] = useState(
   settings.map(() => false) // Initialize all toggles as false (inactive)
 );
   const [isActive, setIsActive] = useState(false);
   const [isActivetwo, setIsActivetwo] = useState(false);


 const handleToggle = (index:any) => {
   const newToggles = [...activeToggles];
   newToggles[index] = !newToggles[index];
   setActiveToggles(newToggles);
 };

  return (
    <>
      {/* Content based on the active tab */}
      <div className="mt-8    w-full ">
        <div>
          <h2 className="text-[#4B5563] text-[1.3em] font-semibold">
            Story action
          </h2>
          {settings.map((setting, index) => (
            <div
              key={setting.id}
              className="flex justify-between items-center mb-2"
            >
              <h3 className="text-[#6B7280] text-[1em]">{setting.label}</h3>

              <button
                onClick={() => handleToggle(index)}
                className={`w-14 h-7.5 rounded-full flex items-center px-1 transition-colors duration-300 ${
                  activeToggles[index] ? "bg-blue-500" : "bg-gray"
                }`}
              >
                <span
                  className={`h-6 w-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                    activeToggles[index] ? "translate-x-7" : ""
                  }`}
                ></span>
              </button>
            </div>
          ))}
        </div>
        <div>
          {/* Action */}
          <h2 className="text-[#4B5563] mt-3 text-[1.3em] font-semibold">Action</h2>
          <div className="flex justify-between items-center">
            <span
              className="text-[#6B7280]
"
            >
              <h2 className="text-[#111928] mt-2 font-medium">
                {" "}
                Liking user posts{" "}
              </h2>
              <h4>Daily user likes limit -120</h4>
            </span>
        
              <button
                onClick={() => setIsActivetwo(!isActivetwo)}
                className={`w-14 h-7.5 rounded-full flex items-center px-1 transition-colors duration-300 ${
                  isActivetwo ? "bg-blue-500" : "bg-gray"
                }`}
              >
                <span
                  className={`h-6 w-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                    isActivetwo ? "translate-x-7" : ""
                  }`}
                ></span>
              </button>
          
          </div>
        </div>
        <div>
          {/* Action */}
          <h2 className="text-[#4B5563] mt-3 text-[1.3em] font-semibold">Follow/Unfollowed</h2>
          <div className="flex justify-between items-center">
            <span
              className="text-[#6B7280]
"
            >
              <h2 className="text-[#111928] mt-2 font-medium">
                {" "}
                Liking user posts{" "}
              </h2>
              <h4>Daily user likes limit -50</h4>
            </span>
        
              <button
                onClick={() => setIsActive(!isActive)}
                className={`w-14 h-7.5 rounded-full flex items-center px-1 transition-colors duration-300 ${
                  isActive ? "bg-blue-500" : "bg-gray"
                }`}
              >
                <span
                  className={`h-6 w-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                    isActive ? "translate-x-7" : ""
                  }`}
                ></span>
              </button>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingCard;
