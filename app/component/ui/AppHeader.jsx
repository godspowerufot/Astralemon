"use client";
import { useState } from "react";
import Image from "next/image";
import MediaBear from "@/public/iconssvg/media-bear-icon.svg";
import Button from "@/app/component/atoms/Button";

const AppHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="container  mx-auto pt-8 flex flex-col md:flex-row justify-center items-center">
      <nav className="w-full max-md:gap-[70px]  max-w-screen-xl flex items-center max-md:bg-white max-md:text-[#2D72FF] justify-around  text-black rounded-[100px] px-4 py-3">
        <div className="flex items-center gap-4 max-md:mr-[15%]">
          <Image src={MediaBear} alt="Logo" className="h-10 w-10" />
          <h3 className="text-lg font-bold">Astra Lemon</h3>
        </div>

        <div className="hidden md:flex gap-4">
          <a
            href="#solution"
            className="px-3 py-2 hover:text-[#2D72FF] rounded-lg transition-all cursor-pointer"
          >
            Solution
          </a>
          <a
            href="#features"
            className="px-3 py-2 hover:text-[#2D72FF] rounded-lg transition-all cursor-pointer"
          >
            Features
          </a>
          <a
            href="#workflow"
            className="px-3 py-2 hover:text-[#2D72FF] rounded-lg transition-all cursor-pointer"
          >
            Workflow
          </a>
          <a
            href="#pricing"
            className="px-3 py-2 hover:text-[#2D72FF] rounded-lg transition-all cursor-pointer"
          >
            Pricing
          </a>
          <a
            href="#faqs"
            className="px-3 py-2 hover:text-[#2D72FF] rounded-lg transition-all cursor-pointer"
          >
            FAQS
          </a>
        </div>
        <div className="flex gap-[20px] max-md:hidden">
          <Button className="h-[45px] bg-blue-600 flex items-center justify-center text-white text-[14px] text-center rounded-[20px]  w-[155px]">
            Log in
          </Button>
          <Button className="h-[45px] bg-blue-600 flex items-center justify-center  text-white text-[14px] text-center rounded-[20px]  w-[155px]">
            Join AstraLemon
          </Button>
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden text-black focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </nav>

      <div
        className={`fixed top-0 left-0 w-full z-10 h-[76%] bg-white text-black transition-transform duration-300 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col items-center p-4 gap-4 mt-16">
          <button
            onClick={closeMenu}
            className="absolute top-4 right-4 text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          <ul className="flex flex-col items-center  gap-y-8 gap-4">
            <li>
              <a
                href="#solution"
                className="px-3 py-2 hover:bg-gray-700 rounded-lg transition-all cursor-pointer"
                onClick={closeMenu}
              >
                Solution
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="px-3 py-2 hover:bg-gray-700 rounded-lg transition-all cursor-pointer"
                onClick={closeMenu}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#workflow"
                className="px-3 py-2 hover:bg-gray-700 rounded-lg transition-all cursor-pointer"
                onClick={closeMenu}
              >
                Workflow
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="px-3 py-2 hover:bg-gray-700 rounded-lg transition-all cursor-pointer"
                onClick={closeMenu}
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#faqs"
                className="px-3 py-2 hover:bg-gray-700 rounded-lg transition-all cursor-pointer"
                onClick={closeMenu}
              >
                FAQS
              </a>
            </li>
            <li>
              <div className="flex flex-col gap-[20px] ">
                <Button className="h-[45px] bg-blue-600 flex items-center justify-center text-white text-[14px] text-center rounded-[20px]  w-[155px]">
                  Log in
                </Button>
                <Button className="h-[45px] bg-blue-600 flex items-center justify-center  text-white text-[14px] text-center rounded-[20px]  w-[155px]">
                  Join AstraLemon
                </Button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
