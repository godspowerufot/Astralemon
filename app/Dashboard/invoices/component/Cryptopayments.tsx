"use client";
import React from "react";

// Define the type for invoice data
interface Invoice {
  id: string;
  date: string;
  status: "Active" | "Deactivated" | "Suspended";
}

// The invoice data array with type annotation
const invoiceData: Invoice[] = [
  { id: "California", date: "Aug 8, 2024", status: "Active" },
  { id: "Nevada", date: "Aug 8, 2024", status: "Deactivated" },
  { id: "Texas", date: "Aug 8, 2024", status: "Suspended" },
  { id: "Arizona", date: "Aug 8, 2024", status: "Active" },
  { id: "Washington", date: "Aug 8, 2024", status: "Deactivated" },
  { id: "Paris", date: "Aug 8, 2024", status: "Suspended" },
];

// Function to get status color with type annotation
const getStatusColor = (status: Invoice["status"]): string => {
  switch (status) {
    case "Active":
      return "text-green-700 bg-green-100";
    case "Deactivated":
      return "text-red bg-[#FDE8E8]";
    case "Suspended":
      return "text-yellow-700 bg-yellow-100";
    default:
      return "";
  }
};

const CryptoPayments: React.FC = () => {
  return (
    <div className="w-full mt-8  rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 md:w-full lg:w-full xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Crypto Payment
      </h4>

      <div className="overflow-x-auto">
        <div className="w-[150px] md:w-full">
          {" "}
          {/* Adjusted for responsive design */}
          {/* Ensure width is enough to trigger scrolling */}
          <div className="grid grid-cols-3 gap-4 min-w-[400px] md:w-full">
            {" "}
            {/* Adjusted grid min-width */}
            <div className="p-2.5 xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                PAYMENT ID
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                DATE
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                STATUS
              </h5>
            </div>
          </div>
          {invoiceData.map((invoice, key) => (
            <div
              className={`grid grid-cols-3 gap-4 min-w-[400px] md:min-w-full ${
                // Adjusted grid min-width for scrollability
                key === invoiceData.length - 1
                  ? ""
                  : "border-b border-stroke dark:border-strokedark"
              }`}
              key={key}
            >
              <div className="flex items-center gap-2 p-2.5 xl:p-5">
                <p className="font-semibold text-black dark:text-white">
                  {invoice.id}
                </p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-[#6B7280] text-[15px]">{invoice.date}</p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                    invoice.status
                  )}`}
                >
                  {invoice.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CryptoPayments;
