import React from "react";
import MediaBear from "@/public/iconssvg/media-bear-icon.svg";
import Image from "next/image";
const AppFooter = () => {
  return (
    <footer className="bg-[#F9FAFB] border-t border-gray-200">
      <div className="container mx-auto px-4 py-8 flex flex-wrap items-center justify-between">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="flex items-center gap-4 max-md:flex-col max-md:items-start">
            <Image src={MediaBear} alt="Logo" className="h-15 w-15" />
            <h3 className="text-lg font-bold">MEDIA BEAR</h3>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex 
        justify-s md:justify-end space-x-4">
          <div className=" max-md:flex justify-center flex flex-row items-center max-md:flex-col gap-4">
            <a
              href="#"
              className="px-3 py-2 hover:bg-gray-700 rounded-lg transition-all cursor-pointer"
            >
              Solution
            </a>
            <a
              href="#"
              className="px-3 py-2 hover:bg-gray-700 rounded-lg transition-all cursor-pointer"
            >
              Features
            </a>
            <a
              href="#"
              className="px-3 py-2 hover:bg-gray-700 rounded-lg transition-all cursor-pointer"
            >
              Workflow
            </a>
            <a
              href="#"
              className="px-3 py-2 hover:bg-gray-700 rounded-lg transition-all cursor-pointer"
            >
              Pricing
            </a>
            <a
              href="#"
              className="px-3 py-2 hover:bg-gray-700 rounded-lg transition-all cursor-pointer"
            >
              FAQS
            </a>
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
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.54 6.42a8.54 8.54 0 0 0-2.5-2.5C18.54 2.93 16.58 2.5 12 2.5S5.46 2.93 3.96 3.92a8.54 8.54 0 0 0-2.5 2.5C.93 8.54.5 10.5.5 15s.43 6.46 1.42 7.96a8.54 8.54 0 0 0 2.5 2.5c1.5 1 3.46 1.43 7.58 1.43s6.08-.43 7.58-1.43a8.54 8.54 0 0 0 2.5-2.5c1-1.5 1.43-3.46 1.43-7.58s-.43-6.08-1.43-7.58zm-11.04 11.53v-9.9l7.07 4.95-7.07 4.95z" />
            </svg>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.34-1.59.57-2.46.67.88-.53 1.56-1.37 1.88-2.37-.82.5-1.73.86-2.69 1.05-.77-.82-1.88-1.33-3.1-1.33-2.35 0-4.26 1.91-4.26 4.26 0 .34.04.67.11.98-3.54-.18-6.68-1.87-8.78-4.45-.37.63-.58 1.37-.58 2.15 0 1.48.75 2.78 1.89 3.54-.7-.02-1.37-.22-1.95-.54v.06c0 2.06 1.47 3.78 3.42 4.18-.36.1-.74.16-1.13.16-.28 0-.54-.02-.8-.07.54 1.68 2.12 2.91 3.99 2.95-1.46 1.15-3.3 1.83-5.31 1.83-.34 0-.68-.02-1.02-.06 1.89 1.21 4.14 1.91 6.56 1.91 7.87 0 12.18-6.52 12.18-12.18 0-.18-.01-.36-.02-.54.83-.61 1.54-1.38 2.11-2.25z" />
            </svg>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.16C6.41 2.16 2.16 6.41 2.16 12c0 4.93 3.63 9.04 8.38 9.88v-6.99h-2.53v-2.74h2.53V9.42c0-2.5 1.49-3.88 3.77-3.88 1.08 0 2.02.08 2.29.11v2.66h-1.57c-1.23 0-1.47.59-1.47 1.44v1.88h2.94l-.38 2.74h-2.56v6.99c4.75-.84 8.38-4.95 8.38-9.88 0-5.59-4.25-9.84-9.84-9.84z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
