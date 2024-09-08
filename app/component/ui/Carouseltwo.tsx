import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ImGift } from "react-icons/im";

const HeroSectiontwo = () => {
  return (
    <section className="relative py-16 overflow-hidden" data-aos="zoom-in">
      <div className="relative container w-fit bg-[#E7EFFFF8] flex lg:items-start lg:justify-between lg:flex-row items-center p-8 justify-center rounded-lg lg:h-[50%] flex-col mx-auto z-10 max-md:w-[80%]">
        <div className="mt-[10%] lg:ml-5">
          <h1 className="text-4xl font-bold max-md:text-3xl text-gray-900">
            Share Your Link
          </h1>
          <p className="mt-4 max-md:w-[100%] text-lg text-wrap max-md:text-[16px] text-gray-700">
            Earn 15% for life on your affiliates. share your referral link with
            your friends, partners, and customers.
          </p>
          <div className="flex gap-[20px]">
            <Link href="https://discord.gg/KNZA3KQQ">
              <button className="mt-8 px-6 py-3 max-md:h-[40px] flex items-center justify-center max-md:text-[14px] bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 transition duration-300">
                Get Referral Link
              </button>
            </Link>
          </div>
        </div>
        {/* Wrapping image with custom positioning */}
        <div className="relative lg:w-auto lg:h-auto w-full h-full max-md:absolute max-md:bottom-[-37px] max-md:right-[-8px] max-md:w-[50%] max-md:h-[auto] z-[11111]">
          <img
            alt="graph"
            src={"/avatar-network.png"}
            className="object-cover hidden lg:block w-full h-auto max-md:absolute max-md:bottom-0 max-md:right-0"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSectiontwo;
