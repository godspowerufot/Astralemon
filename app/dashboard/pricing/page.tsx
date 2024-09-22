"use client";
import React, { useState } from "react";

import PricingPage from "./Pricingcard";

// if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
//   console.error(
//     "Stripe publishable key is not set in the environment variables."
//   );
// }

const PricingPages: React.FC = () => {
  const [activeTab, setActiveTab] = useState("monthly");


  return (
    <>
       <section
        id="pricing"
        className="relative z-10 overflow-hidden dark:bg-dark lg:p-8"
      >
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
          <h2 className="text-black dark:text-white text-3xl md:text-5xl font-bold mb-4">
            Pricing
          </h2>
          <div className="flex items-center bg-[#eeeff0] p-2 rounded-md w-72">
            <button
              className={`flex-1 px-4 py-2 rounded-l-md ${
                activeTab === "monthly"
                  ? "bg-white text-blue-600 font-semibold"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("monthly")}
            >
              Monthly
            </button>
            <button
              className={`flex-1 px-4 py-2 rounded-r-md ${
                activeTab === "yearly"
                  ? "bg-white text-blue-600 font-semibold"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("yearly")}
            >
              Yearly
            </button>
          </div>
        </div>
      
      <PricingPage activeTabs={activeTab}/>
      </section>
      </>
  );
};

export default PricingPages;
