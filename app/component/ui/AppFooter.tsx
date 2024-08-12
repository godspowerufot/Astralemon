'use client'
import React from "react";
import { useRouter } from "next/navigation";
import MediaBear from "@/public/media logo.png";
import MediaBears from "@/public/iconssvg/lemon.svg";
import Image from "next/image";

const AppFooter = () => {
  const router = useRouter();

  const handleNavigation = (hash: string) => {
    router.push(hash);
  };

  return (
    <footer className="bg-[#F9FAFB] border-t border-gray-200 mt-8">
      <div className="container mx-auto px-4 py-8 flex flex-wrap items-center justify-between">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="flex items-center gap-4 max-md:flex-col max-md:items-start max-md:ml-[3%] max-md:mb-[2%]">
            <Image src={MediaBear} alt="Logo" className="h-[10%] w-[10%]" />
          </div>
        </div>
        <div
          className="w-full md:w-1/2 flex 
        max-md:justify-start md:justify-end space-x-4"
        >
          <div className="max-md:flex justify-center flex flex-row items-center max-md:flex-col max-md:justify-start max-md:items-start gap-4">
            <div className="hidden md:flex gap-4 max-md:flex max-md:flex-col ">
              <a
                onClick={() => handleNavigation("/#solution")}
                className="px-3 py-2 hover:text-[#2D72FF] rounded-lg transition-all cursor-pointer"
              >
                Solution
              </a>
              <a
                onClick={() => handleNavigation("/#Features")}
                className="px-3 py-2 hover:text-[#2D72FF] rounded-lg transition-all cursor-pointer"
              >
                Features
              </a>
              <a
                onClick={() => handleNavigation("/#workflow")}
                className="px-3 py-2 hover:text-[#2D72FF] rounded-lg transition-all cursor-pointer"
              >
                Workflow
              </a>
              <a
                onClick={() => handleNavigation("/#pricing")}
                className="px-3 py-2 hover:text-[#2D72FF] rounded-lg transition-all cursor-pointer"
              >
                Pricing
              </a>
              <a
                onClick={() => handleNavigation("/#faqs")}
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
            © 2024 AstraLemon, Inc. All rights reserved.
          </span>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end space-x-4">
          <a
            href="https://x.com/AstraLemonAI"
            className="text-gray-600 hover:text-gray-900"
          >
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
          <a
            href="https://www.youtube.com/@AstraLemon"
            className="text-gray-600 hover:text-gray-900"
          >
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
          <a
            href="https://www.facebook.com/astralemon"
            className="text-gray-600 hover:text-gray-900"
          >
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

          <a
            href="https://discord.gg/KNZA3KQQ"
            className="text-gray-600 hover:text-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              style={{ fill: "#737373" }}
            >
              <path d="M25.12,6.946c-2.424-1.948-6.257-2.278-6.419-2.292c-0.256-0.022-0.499,0.123-0.604,0.357 c-0.004,0.008-0.218,0.629-0.425,1.228c2.817,0.493,4.731,1.587,4.833,1.647c0.303,0.184,0.4,0.582,0.217,0.885 c-0.121,0.2-0.334,0.313-0.56,0.313c-0.113,0-0.228-0.03-0.33-0.092c-0.027-0.016-2.768-1.61-6.091-1.609 c-0.022,0-0.044,0-0.066,0c-0.03,0-0.074,0-0.129,0c-1.962,0.007-3.853,0.4-5.58,1.162c-0.272,0.12-0.591-0.002-0.73-0.267 c-0.143-0.267-0.035-0.598,0.235-0.738c0.085-0.045,2.052-1.061,4.933-1.549c-0.189-0.553-0.379-1.108-0.383-1.122 c-0.088-0.28-0.366-0.452-0.657-0.414c-0.186,0.024-4.561,0.556-6.431,2.322C4.355,13.62,3.66,21.059,4.045,25.877 c0.002,0.021,0.008,0.043,0.013,0.063c0.001,0.004,0.002,0.007,0.003,0.011c0.131,0.532,0.968,1.996,3.531,2.034 c0.098,0.002,0.196,0.003,0.293,0.003c0.787,0,1.558-0.104,2.297-0.31c0.24-0.065,0.375-0.311,0.31-0.551 c-0.065-0.239-0.309-0.378-0.551-0.31c-1.44,0.393-3.953,0.663-4.623-1.248c-0.002-0.006-0.004-0.012-0.005-0.019 c-0.358-4.133,0.287-9.928,2.742-12.031c0.013-0.011,0.027-0.022,0.04-0.034c1.525-1.396,5.372-2.176,8.578-1.886 c3.06,0.274,6.03,1.696,7.566,2.529c2.422,1.291,3.025,7.012,2.652,10.823c-0.717,1.916-3.239,1.663-4.604,1.273 c-0.241-0.069-0.493,0.065-0.562,0.307c-0.07,0.241,0.064,0.493,0.307,0.562c0.53,0.152,1.15,0.269,1.831,0.269 c1.49,0,3.197-0.463,3.787-2.411c0.004-0.011,0.006-0.023,0.008-0.035C27.034,21.012,26.591,11.27,25.12,6.946z M11.754,19.766 c-1.232,0-2.243-1.151-2.243-2.562c0-1.411,1.011-2.562,2.243-2.562s2.243,1.151,2.243,2.562 C13.997,18.616,12.986,19.766,11.754,19.766z M18.246,19.766c-1.232,0-2.243-1.151-2.243-2.562c0-1.411,1.011-2.562,2.243-2.562 s2.243,1.151,2.243,2.562C20.489,18.616,19.478,19.766,18.246,19.766z"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
