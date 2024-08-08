import React from "react";
import Image from "next/image";
import BackgroundImage from "@/public/image6.png"; // Update the path as necessary
import Link from "next/link";
const HeroSection = () => {
  return (
    <section className="relative py-16 overflow-hidden" data-aos="zoom-in">
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Wrapper with padding around the image */}
        <div className="relative h-full w-full max-w-[1200px] max-md:w-[90%] p-5">
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
      <div className="relative container  flex items-center justify-center  flex-col mx-auto text-center z-10 max-md:w-[80%]">
        <h1 className="text-4xl font-bold max-md:text-3xl text-gray-900">
          Join the community
        </h1>
        <p className="mt-4 max-md:w-[100%] text-lg w-[1000px] text-wrap max-md:text-[16px] text-gray-700">
          Join our Telegram or Discord Community to give your opinion on what we
          should implement next, and to keep up to date with all the latest news
          & updates on AstraLemon. You will also be able to preview future
          features on the channel{" "}
        </p>
        <div className="flex gap-[20px]">
          <Link             href="https://discord.gg/KNZA3KQQ">

          <button className="mt-8 px-6 py-3 max-md:h-[40px]  flex items-center justify-center max-md:text-[14px] bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 transition duration-300">
            Join Discord
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
