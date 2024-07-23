import React from "react";
import Image from "next/image";
import BackgroundImage from "@/public/image6.png"; // Update the path as necessary

const HeroSection = () => {
  return (
    <section className="relative py-16 overflow-hidden" data-aos="zoom-in">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Wrapper with padding around the image */}
        <div className="relative h-full w-full max-w-[1200px] max-md:w-[50%] p-5">
          {" "}
          {/* Adjust padding as needed */}
          <div className="absolute inset-0 rounded-xl overflow-hidden">
            <Image
              src={BackgroundImage}
              alt="Background"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
      <div className="relative container mx-auto text-center z-10">
        <h1 className="text-4xl font-bold max-md:text-3xl text-gray-900">
          The Ideal solution for Your Product
        </h1>
        <p className="mt-4 text-lg  max-md:text-[16px] text-gray-700">
          By choosing MediaBear to find the ideal subscribers, you are sure to
          be able to offer your services/products to the right people.
        </p>
        <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 transition duration-300">
          Get started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
