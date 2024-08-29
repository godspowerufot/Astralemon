"use client";
import React from "react";

// Define the type for subscription data
interface Subscription {
  id: string;
  account: string;
  subscriptionType: string;
  date: string;
}

// The subscription data array with type annotation
const subscriptionData: Subscription[] = [
  {
    id: "California",
    account: "@_diviinesamuel",
    subscriptionType: "Premium",
    date: "Aug 8, 2024",
  },
  {
    id: "Nevada",
    account: "@_diviinesamuel",
    subscriptionType: "Premium",
    date: "Aug 8, 2024",
  },
  {
    id: "Texas",
    account: "@_diviinesamuel",
    subscriptionType: "Premium",
    date: "Aug 8, 2024",
  },
  {
    id: "Arizona",
    account: "@_diviinesamuel",
    subscriptionType: "Premium",
    date: "Aug 8, 2024",
  },
  {
    id: "Washington",
    account: "@_diviinesamuel",
    subscriptionType: "Premium",
    date: "Aug 8, 2024",
  },
];

const Subscription: React.FC = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-4 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-6 lg:w-full xl:pb-1 w-full">
      <h4 className="mb-6 text-lg font-semibold text-black dark:text-white">
        Subscription Details
      </h4>

      <div className="overflow-x-auto">
        <div className="min-w-[500px]">
          {/* Ensure width is enough to trigger scrolling */}
          <div className="grid grid-cols-4 gap-2">
            <div className="p-2">
              <h5 className="text-xs font-medium uppercase">ID</h5>
            </div>
            <div className="p-2">
              <h5 className="text-xs font-medium uppercase">
                ACCOUNT CONNECTED
              </h5>
            </div>
            <div className="p-2 text-center">
              <h5 className="text-xs font-medium uppercase">SUBSCRIPTION</h5>
            </div>
            <div className="p-2 text-center">
              <h5 className="text-xs font-medium uppercase">DATE</h5>
            </div>
          </div>
          {subscriptionData.map((subscription, key) => (
            <div
              className={`grid grid-cols-4 gap-2 ${
                key === subscriptionData.length - 1
                  ? ""
                  : "border-b border-stroke dark:border-strokedark"
              }`}
              key={key}
            >
              <div className="flex items-center gap-2 p-2">
                <p className="font-semibold text-black dark:text-white text-sm">
                  {subscription.id}
                </p>
              </div>
              <div className="flex items-center justify-center p-2">
                <p className="text-[#6B7280] text-sm">{subscription.date}</p>
              </div>

              <div className="flex items-center gap-2 p-2">
                <p className="font-semibold text-black dark:text-white text-sm">
                  {subscription.account}
                </p>
              </div>

              <div className="flex items-center justify-center p-2">
                <p className="font-semibold text-black dark:text-white text-sm">
                  {subscription.subscriptionType}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subscription;
