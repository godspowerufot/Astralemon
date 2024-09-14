import React, { useState } from "react";
import Subscription from "./subscription"; // Placeholder component for Subscription
import Invoices from "./invoices";

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Invoices");

  const renderComponent = () => {
    switch (activeTab) {
      case "Subscription":
        return <Subscription />;
      case "Invoices":
        return <Invoices />;
      default:
        return null;
    }
  };

  return (
    <section id="pricing">
      <div className="flex flex-col items-start lg:items-start lg:flex-row justify-between  lg:p-2 lg:full md:w-full w-[80%]">
        <h2 className="text-black text-[30px] dark:text-white max-md:text-2xl font-bold leading-[1.208] md:text-[45px]">
          {activeTab}
        </h2>
        <div className="flex items-center space-x-8 p-2">
          {["Invoices", "Subscription"].map((tab) => (
            <div
              key={tab}
              className={`cursor-pointer text-[15px] lg:text-[18px] pb-2 ${
                activeTab === tab ? "border-b-2  border-blue-500" : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 overflow-x-auto ">
        <div className="lg:w-full w-full mx-0">{renderComponent()}</div>
      </div>
    </section>
  );
};

export default Tabs;
