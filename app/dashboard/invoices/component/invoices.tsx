"use client";
import React from "react";

// Define the type for invoice data
interface Invoice {
  invoiceNumber: string;
  account: string;
  bill: string; // Previously 'subscriptionType'
  date: string;
  amount: string; // New field
}

// The invoice data array with type annotation
const invoiceData: Invoice[] = [
  {
    invoiceNumber: "#12345",
    account: "@_diviinesamuel",
    bill: "Premium",
    date: "Aug 8, 2024",
    amount: "500",
  },
  {
    invoiceNumber: "#12346",
    account: "@_diviinesamuel",
    bill: "Premium",
    date: "Aug 8, 2024",
    amount: "500",
  },
  {
    invoiceNumber: "#12347",
    account: "@_diviinesamuel",
    bill: "Premium",
    date: "Aug 8, 2024",
    amount: "500",
  },
  {
    invoiceNumber: "#12348",
    account: "@_diviinesamuel",
    bill: "Premium",
    date: "Aug 8, 2024",
    amount: "500",
  },
  {
    invoiceNumber: "#12349",
    account: "@_diviinesamuel",
    bill: "Premium",
    date: "Aug 8, 2024",
    amount: "500",
  },
];

const Invoice: React.FC = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-4 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-6 lg:w-full xl:pb-1 w-full">
      <h4 className="mb-6 text-lg font-semibold text-black dark:text-white">
        Invoice Details
      </h4>

      <div className="overflow-x-auto">
        <div className="w-[300px] md:w-full">
          {/* Ensure width is enough to trigger scrolling */}
          <div className="grid grid-cols-5 gap-2 min-w-[600px] md:min-w-full">
            <div className="p-2">
              <h5 className="text-xs font-medium uppercase">Invoice Number</h5>
            </div>
            <div className="p-2 text-center">
              <h5 className="text-xs font-medium uppercase">ACCOUNT</h5>
            </div>
            <div className="p-2 text-center">
              <h5 className="text-xs font-medium uppercase">BILL</h5>
            </div>
            <div className="p-2 text-center">
              <h5 className="text-xs font-medium uppercase">DATE</h5>
            </div>
            <div className="p-2 text-center">
              <h5 className="text-xs font-medium uppercase">AMOUNT</h5>
            </div>
          </div>

          {invoiceData.map((invoice, key) => (
            <div
              className={`grid grid-cols-5 gap-2 min-w-[600px] md:min-w-full ${
                key === invoiceData.length - 1
                  ? ""
                  : "border-b border-stroke dark:border-strokedark"
              }`}
              key={key}
            >
              <div className="flex items-center gap-2 p-2">
                <p className="font-semibold text-black dark:text-white text-sm">
                  {invoice.invoiceNumber}
                </p>
              </div>
              <div className="flex items-center justify-center p-2">
                <p className="text-[#6B7280] text-sm">{invoice.account}</p>
              </div>
              <div className="flex items-center justify-center p-2">
                <p className="text-[#6B7280] text-sm">{invoice.bill}</p>
              </div>
              <div className="flex items-center justify-center p-2">
                <p className="font-semibold text-black dark:text-white text-sm">
                  {invoice.date}
                </p>
              </div>
              <div className="flex items-center justify-center p-2">
                <p className="font-semibold text-black dark:text-white text-sm">
                  {invoice.amount}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Invoice;
