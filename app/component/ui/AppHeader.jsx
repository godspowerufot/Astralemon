"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import MediaBear from "@/public/media logo.png";
import Button from "@/app/component/atoms/Button";
import Link from "next/link";

const AppHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleNavigation = (path) => {
    closeMenu();
    router.push(path);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center  bg-[url('/back.png')] ">
      <nav className="w-full   flex items-center max-md:bg-white max-md:text-[#2D72FF] justify-around max-md:justify-between text-black rounded-[100px] px-4 py-3 max-md:pr-5">
        <div className="flex h-[72px] items-center gap-4 max-md:mr-[15%] max-md:w-[100%]">
          <Link href="/">
            <Image
              src={MediaBear}
              alt="Logo"
              className="h-auto w-auto  max-md:w-[500px] max-md:h-[200px]"
            />
          </Link>
        </div>

        <div className="hidden mr-[10%] md:flex gap-4">
          <a
            href="/#solution"
            className="px-3 py-2 hover:text-[#2D72FF] rounded-lg transition-all cursor-pointer"
            onClick={() => handleNavigation("/#solution")}
          >
            Solution
          </a>
          <a
            href="/#features"
            className="px-3 py-2 hover:text-[#2D72FF] rounded-lg transition-all cursor-pointer"
            onClick={() => handleNavigation("/#features")}
          >
            Feature
          </a>
          <a
            href="/#workflow"
            className="px-3 py-2 hover:text-[#2D72FF] rounded-lg transition-all cursor-pointer"
            onClick={() => handleNavigation("/#workflow")}
          >
            Workflow
          </a>
          <a
            href="/#pricing"
            className="px-3 py-2 hover:text-[#2D72FF] rounded-lg transition-all cursor-pointer"
            onClick={() => handleNavigation("/#pricing")}
          >
            Pricing
          </a>
          <a
            href="/#faqs"
            className="px-3 py-2 hover:text-[#2D72FF] rounded-lg transition-all cursor-pointer"
            onClick={() => handleNavigation("/#faqs")}
          >
            FAQS
          </a>
        </div>
        <div className="flex gap-[20px] max-md:hidden">
          <Link href="/Login">
            <Button className="h-[45px] bg-transparent border border-blue-600 flex items-center justify-center text-blue-600 text-[14px] text-center rounded-[10px]  md:w-[100px] lg:w-[95px]">
              Log in
            </Button>
          </Link>
          <Link href="/Registration">
            <Button className="h-[45px]  w-max bg-blue-600 flex items-center justify-center text-white text-[14px] text-center rounded-[10px]">
              Join AstraLemon
            </Button>
          </Link>
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

          <ul className="flex flex-col items-center gap-y-8 gap-4">
            <li>
              <a
                href="/#solution"
                className="px-3 py-2 hover:bg-gray-700 rounded-lg transition-all cursor-pointer"
                onClick={() => handleNavigation("/#solution")}
              >
                Solution
              </a>
            </li>
            <li>
              <a
                href="/#features"
                className="px-3 py-2 hover:bg-gray-700 rounded-lg transition-all cursor-pointer"
                onClick={() => handleNavigation("/#features")}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="/#workflow"
                className="px-3 py-2 hover:bg-gray-700 rounded-lg transition-all cursor-pointer"
                onClick={() => handleNavigation("/#workflow")}
              >
                Workflow
              </a>
            </li>
            <li>
              <a
                href="/#pricing"
                className="px-3 py-2 hover:bg-gray-700 rounded-lg transition-all cursor-pointer"
                onClick={() => handleNavigation("/#pricing")}
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="/#faqs"
                className="px-3 py-2 hover:bg-gray-700 rounded-lg transition-all cursor-pointer"
                onClick={() => handleNavigation("/#faqs")}
              >
                FAQS
              </a>
            </li>
            <li>
              <div className="flex flex-col gap-[20px]">
                <Link href="/Login">
                  <Button className="h-[45px] bg-transparent border border-blue-600 flex items-center justify-center text-blue-600 text-[14px] text-center rounded-none w-[155px]">
                    Log in
                  </Button>
                </Link>
                <Link href="/Registration">
                  <Button className="h-[45px] w-max bg-transparent border border-blue-600 flex items-center justify-center text-blue-600 text-[14px] text-center rounded-none ">
                    Join AstraLemon
                  </Button>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
