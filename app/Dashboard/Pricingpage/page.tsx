'use client'
import * as React from "react";
import Link from "next/link";
import { useState } from "react";
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "stripe-pricing-table": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}
function PricingPage() {
   const [activeTab, setActiveTab] = useState("monthly");
  // Paste the stripe-pricing-table snippet in your React component
  return (
    <section
      id="pricing"
      className="relative z-10 overflow-hidden dark:bg-dark"
    >
      {" "}
      <div className="flex flex-col items-start lg:items-start lg:flex-row md:flex-row  justify-between p-4">
        <h2 className="text-black  text-[30px] dark:text-white max-md:text-2xl font-bold leading-[1.208] md:text-[45px]">
          Pricing
        </h2>
        <div className="flex items-center   bg-[#eeeff0]   p-2 rounded-[5px] w-[300px]">
          <button
            className={`px-4 w-[150px] py-2 rounded-l-md focus:outline-none ${
              activeTab === "monthly"
                ? "bg-white text-blue-600"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("monthly")}
          >
            Monthly
          </button>
          <button
            className={`px-4 w-[150px] py-2 rounded-r-md focus:outline-none ${
              activeTab === "yearly"
                ? "bg-white text-blue-600"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("yearly")}
          >
            Yearly
          </button>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-3" data-aos="fade-in">
            <div className="mx-auto mb-[60px] max-w-[510px] text-start"></div>

            <stripe-pricing-table
              pricing-table-id={process.env.STRIPE_PRICING_TABLE_ID}
              publishable-key={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
            ></stripe-pricing-table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingPage;
