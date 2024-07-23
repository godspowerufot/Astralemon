import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 flex flex-col items-center px-8 py-16 w-full">
      <div className="w-full max-w-screen-xl flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <div className="flex items-center gap-2">
            <img
              className="h-12 w-12 object-cover"
              alt="Media Bear"
              src="/image-8.png"
            />
            <div className="text-2xl font-medium text-gray-900">Media Bear</div>
          </div>
          <nav className="flex gap-4 mt-4 md:mt-0">
            <a href="#solution" className="text-gray-500 text-base">
              Solution
            </a>
            <a href="#features" className="text-gray-500 text-base">
              Features
            </a>
            <a href="#workflow" className="text-gray-500 text-base">
              Workflow
            </a>
            <a href="#pricing" className="text-gray-500 text-base">
              Pricing
            </a>
            <a href="#faqs" className="text-gray-500 text-base">
              FAQs
            </a>
          </nav>
        </div>
        <div className="border-t border-gray-200 w-full" />
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <p className="text-gray-500 text-base text-center md:text-left">
            © 2024 Media Bear, Inc. All rights reserved.
          </p>
          <div className="flex gap-2 mt-4 md:mt-0">
            <a
              href="https://xcompany.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900"
            >
              <i className="fab fa-twitter h-6 w-6 md:h-8 md:w-8"></i>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900"
            >
              <i className="fab fa-youtube h-6 w-6 md:h-8 md:w-8"></i>
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900"
            >
              <i className="fab fa-discord h-6 w-6 md:h-8 md:w-8"></i>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900"
            >
              <i className="fab fa-facebook h-6 w-6 md:h-8 md:w-8"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
