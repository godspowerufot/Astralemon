"use client"
import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { Check, X } from "lucide-react";
import { getAccessToken } from "@/utils/util";
import { toast } from "react-toastify";
import CheckoutForm from "./checkout";
import { title } from "process";

interface Feature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: number;
  priceId: string;
  features: Feature[];
  featured?: boolean;
  onGetStarted: (plan: string) => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  priceId,
  features,
 
  featured = false,
  onGetStarted,
}) => {


  return (
    <div
      className={`w-full max-w-sm bg-white rounded-lg shadow-md p-6 flex flex-col items-center ${
        featured ? "ring-2 ring-blue-500" : ""
      }`}
    >
      {featured && (
        <div className="text-blue-500 text-sm font-semibold mb-2">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="text-3xl font-bold mb-1">${price}</div>
      <p className="text-sm text-gray-500 mb-4">
        {`Per ${price >= 1000 ? "year" : "month"}`}
      </p>

      <button
        className={`w-full py-2 rounded-md mb-6 transition-colors ${
          featured
            ? "bg-blue-500 text-white hover:bg-blue-600"
            : "bg-black text-white hover:bg-gray-700"
        }`}
        onClick={() =>  onGetStarted(title)}
      >
        Get Started
      </button>

      <ul className="w-full mt-4 space-y-2">
        {features.map((feature, index) => (
          <ListItem
            key={index}
            text={feature.text}
            included={feature.included}
          />
        ))}
      </ul>
    </div>
  );
};

interface ListItemProps {
  text: string;
  included: boolean;
}

const ListItem: React.FC<ListItemProps> = ({ text, included }) => {
  return (
    <li className="flex items-center">
      {included ? (
        <Check className="w-5 h-5 text-green-500 mr-2" />
      ) : (
        <X className="w-5 h-5 text-red-500 mr-2" />
      )}
      <span className={included ? "text-gray-700" : "text-gray-400"}>
        {text}
      </span>
    </li>
  );
};

export default PricingCard;
