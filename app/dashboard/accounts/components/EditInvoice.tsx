import React from "react";
import { Pencil, PencilIcon } from "lucide-react";

const InvoiceInformation = () => {
  const invoiceInfo = [
    { label: "Name for socials", value: "Divine" },
    { label: "SIRET", value: "821300BS" },
    { label: "Address", value: "71682e Brooks Street" },
    { label: "Postal code", value: "khjasfqwou" },
    { label: "City", value: "Paris" },
    { label: "Country", value: "France" },
  ];

  return (
    <div className="w-full mx-auto  mt-8">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Invoice information</h2>
          <button className="text-blue-600 border-blue-400 border-[1px]  border-solid rounded-xl flex items-center justify-center h-[30px] w-[80px]">
            <PencilIcon className="w-4 h-4 mr-1" />
            Edit
          </button>
        </div>
        <hr className="border-gray-200" />
        <div className="space-y-4">
          {invoiceInfo.map((item, index) => (
            <div key={index} className="flex">
              <span className="text-gray-500 text-[14px] w-[100%]">{item.label}</span>
              <span className="text-black font-[500] text-[14px] w-full">
                {item.value}
              </span>{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvoiceInformation;
