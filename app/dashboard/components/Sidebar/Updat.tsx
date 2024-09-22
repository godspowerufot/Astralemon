"use client";
import Image from "next/image";
import { CloseButton } from "@chakra-ui/react";
import { X } from "lucide-react";
const Update = () => {
  return (
    <>
      <div className="w-full  fixed  bottom-0 left-0   flex items-center  p-6">
        <div
          className="w-full  mb-6 rounded-xl  flex-col flex items-start justify-start p-4"
          style={{
            background:
              "linear-gradient(90deg, rgba(91, 145, 255, 1), rgba(120, 186, 252, 1))", // Gradient background
          }}
        >
          <div className="flex justify-between items-start gap-16 text-white">
            <h2 className="font-semibold text-nowrap">Upgrade plan</h2>
            <CloseButton className="font-semibold  ml-[10%] float-end" />
          </div>
          <p className="mt-3 text-[#FFFFFF]">
            Upgrade your plan to professional to access all our services
            tailored for you.
          </p>
          <button className="bg-white border-solid text-blue-500 w-full mt-4  px-4 py-2 rounded-full">
            Update now
          </button>
        </div>
      </div>
    </>
  );
};

export default Update;
