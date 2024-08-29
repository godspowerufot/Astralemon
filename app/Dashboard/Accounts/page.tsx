"use client";
import React from "react";
import MyAccount from "./components/Edit";
import InvoiceInformation from "./components/EditInvoice";
const AccountPage = () => {
  return (
    <div className="bg-gray-100 ">
  <MyAccount/>
  <InvoiceInformation/>
    </div>
  );
};

export default AccountPage;
