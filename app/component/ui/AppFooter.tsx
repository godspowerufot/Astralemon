import React from "react";
import MediaBear from "@/public/iconssvg/media-bear-icon.svg";
import Image from "next/image";
const AppFooter = () => {
  return (
    <footer className="bg-[#F9FAFB] border-t border-gray-200 mt-8">
      <div className="container mx-auto px-4 py-8 flex flex-wrap items-center justify-between">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="flex items-center gap-4 max-md:flex-col max-md:items-start max-md:ml-[3%] max-md:mb-[2%]">
            <Image src={MediaBear} alt="Logo" className="h-15 w-15" />
            <h3 className="text-lg font-bold">ASTRA LEMON</h3>
          </div>
        </div>
        <div
          className="w-full md:w-1/2 flex 
        max-md:justify-start md:justify-end space-x-4"
        >
          <div className=" max-md:flex justify-center flex flex-row items-center max-md:flex-col max-md:justify-start max-md:items-start gap-4">
            <div className="hidden md:flex gap-4 max-md:flex max-md:flex-col ">
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
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 flex flex-wrap items-center justify-between">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <span className="text-gray-600 text-sm">
            © 2024 Media Bear, Inc. All rights reserved.
          </span>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 50 50"
              style={{ fill: "#737373" }}
            >
              <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
            </svg>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              style={{ fill: "#737373" }}
            >
              <path d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"></path>
            </svg>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              style={{ fill: "#737373" }}
            >
              <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
            </svg>
          </a>

          <a href="#" className="text-gray-600 hover:text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              style={{ fill: "#737373" }}
            >
              <path d="M25.12,6.946c-2.424-1.948-6.257-2.278-6.419-2.292c-0.256-0.022-0.499,0.123-0.604,0.357 c-0.004,0.008-0.218,0.629-0.425,1.228c2.817,0.493,4.731,1.587,4.833,1.647c0.478,0.278,0.638,0.891,0.359,1.368 C22.679,9.572,22.344,9.75,22,9.75c-0.171,0-0.343-0.043-0.501-0.135C21.471,9.598,18.663,8,15.002,8 C11.34,8,8.531,9.599,8.503,9.615C8.026,9.892,7.414,9.729,7.137,9.251C6.86,8.775,7.021,8.164,7.497,7.886 c0.102-0.06,2.023-1.158,4.848-1.65c-0.218-0.606-0.438-1.217-0.442-1.225c-0.105-0.235-0.348-0.383-0.604-0.357 c-0.162,0.013-3.995,0.343-6.451,2.318C3.564,8.158,1,15.092,1,21.087c0,0.106,0.027,0.209,0.08,0.301 c1.771,3.11,6.599,3.924,7.699,3.959c0.007,0.001,0.013,0.001,0.019,0.001c0.194,0,0.377-0.093,0.492-0.25l1.19-1.612 c-2.61-0.629-3.99-1.618-4.073-1.679c-0.444-0.327-0.54-0.953-0.213-1.398c0.326-0.443,0.95-0.541,1.394-0.216 C7.625,20.217,10.172,22,15,22c4.847,0,7.387-1.79,7.412-1.808c0.444-0.322,1.07-0.225,1.395,0.221 c0.324,0.444,0.23,1.066-0.212,1.392c-0.083,0.061-1.456,1.048-4.06,1.677l1.175,1.615c0.115,0.158,0.298,0.25,0.492,0.25 c0.007,0,0.013,0,0.019-0.001c1.101-0.035,5.929-0.849,7.699-3.959c0.053-0.092,0.08-0.195,0.08-0.301 C29,15.092,26.436,8.158,25.12,6.946z M11,19c-1.105,0-2-1.119-2-2.5S9.895,14,11,14s2,1.119,2,2.5S12.105,19,11,19z M19,19 c-1.105,0-2-1.119-2-2.5s0.895-2.5,2-2.5s2,1.119,2,2.5S20.105,19,19,19z"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
