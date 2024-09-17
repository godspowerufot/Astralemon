import React from "react";
import Image from "next/image";
import BackgroundImage from "@/public/image6.png"; // Update the path as necessary
import Link from "next/link";
const HeroSectiontwo = () => {
  return (
    <section className="p-5 lg:p-16">
      <div
        className="relative bg-[#E7EFFFF8]   py-16 overflow-hidden"
        data-aos="zoom-in"
      >
        <div className="  absolute inset-0 flex items-center justify-center">
          {/* Wrapper with padding around the image */}
          <div className="relative h-full w-full max-w-[1200px] max-md:w-[90%] p-5">
            {" "}
            {/* Adjust padding as needed */}
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              <Image
                src={"/back.png"}
                alt="Background"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
        <div className="relative container  flex items-center justify-center  flex-col mx-auto text-center z-10 max-md:w-[80%]">
          <h1 className="text-4xl font-bold max-md:text-3xl text-gray-900">
            The ideal solution for Your Product
          </h1>
          <p className="mt-4 max-md:w-[100%] text-lg lg:w-[800px] text-wrap max-md:text-[16px] text-gray-700">
            By choosing Astralemon to find the ideal subscribers, you are sure
            to be able to offer yourservices/products to the right people.
          </p>
          <div className="flex gap-[20px]">
            <Link href="/dashboard/Affiliations">
              <button className="mt-8 px-6 py-3 max-md:h-[40px]  flex items-center justify-center max-md:text-[14px] bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 transition duration-300">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectiontwo;
