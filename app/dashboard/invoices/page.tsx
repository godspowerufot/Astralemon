"use client";
import * as React from "react";
import Link from "next/link";
import { useState } from "react";
import Tabs from "./component/tabs";
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
function InvoicesPage() {
  const [activeTab, setActiveTab] = useState("monthly");
  // Paste the stripe-pricing-table snippet in your React component
  return (
    <section
      id="pricing"
      className="relative z-10 overflow-hidden w-fulllg:w-full md:w-full  dark:bg-dark"
    >
      {" "}
   
          <Tabs />
    
  
    </section>
  );
}

export default InvoicesPage;
