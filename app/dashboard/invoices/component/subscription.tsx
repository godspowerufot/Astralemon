"use client";
import { useSubscriptionDetails } from "@/hooks/useFetchSubscription";
import { useUserDetails } from "@/hooks/useLoguser";
import React from "react";

// Define the type for subscription data
interface Subscription {
  account: string;
  subscriptionType: string;
  date: string;
  id: string;
}

// The subscription data array with type annotation
const subscriptionData: Subscription[] = [
  {
    id: "1",
    account: "@_diviinesamuel",
    subscriptionType: "Premium",
    date: "Aug 8, 2024",
  },
  {
    id: "2",
    account: "@_diviinesamuel",
    subscriptionType: "Premium",
    date: "Aug 8, 2024",
  },
  {
    id: "3",
    account: "@_diviinesamuel",
    subscriptionType: "Premium",
    date: "Aug 8, 2024",
  },
  {
    id: "4",
    account: "@_diviinesamuel",
    subscriptionType: "Premium",
    date: "Aug 8, 2024",
  },
];

const Subscription: React.FC = () => {
  const { data: userData } = useUserDetails();
  const {
    subscriptions,
    loading: subsLoading,
    error: subsError,
  } = useSubscriptionDetails(userData?.id);
  // Function to format the timestamp to display only date and year
  const formatDate = (timestamp: string | number | Date) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };
  return (
    <div className="rounded-sm border border-stroke bg-white px-4 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-6 lg:w-full xl:pb-1 w-full">
      <h4 className="mb-6 text-lg font-semibold text-black dark:text-white">
        Subscription Details
      </h4>

      <div className="overflow-x-auto">
        <div className="w-[300px] md:w-full">
          <div className="grid grid-cols-4 gap-2 min-w-[400px] md:min-w-full">
            {/* Column Headers */}
            <div className="p-2 flex justify-center text-center">
              <h5 className="text-xs font-medium uppercase">SUBSCRIPTION ID</h5>
            </div>
            <div className="p-2 flex justify-center text-center">
              <h5 className="text-xs font-medium uppercase">ACCOUNT</h5>
            </div>
            <div className="p-2 flex justify-center text-center">
              <h5 className="text-xs font-medium uppercase">DATE</h5>
            </div>
            <div className="p-2 flex justify-center text-center">
              <h5 className="text-xs text-nowrap font-medium uppercase">
                SUBSCRIPTION PLAN
              </h5>
            </div>
          </div>

          {/* Data Rows */}
          {subscriptions.map((subscription, key) => (
            <div
              className={`grid grid-cols-4 gap-2 min-w-[400px] md:min-w-full ${
                key === subscriptions.length - 1
                  ? ""
                  : "border-b border-stroke dark:border-strokedark"
              }`}
              key={key}
            >
              <div className="flex items-center text-center justify-center w-full p-2">
                <p className="text-[#6B7280] text-sm">{subscription.id}</p>
              </div>

              <div className="flex items-center text-center justify-center w-full gap-2 p-2">
                <p className="font-semibold text-black dark:text-white text-sm">
                  {subscription?.amount}
                </p>
              </div>

              <div className="flex items-center justify-center text-center w-full p-2">
                <p className="text-[#6B7280] text-sm">
                  {formatDate(subscription?.timestamp)}
                </p>
              </div>

              <div className="flex items-center justify-center text-center w-full p-2">
                <p className="font-semibold text-black dark:text-white text-sm">
                  {subscription.description}
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
