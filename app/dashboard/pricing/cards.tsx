"use client";
import React from "react";
import { Check, X } from "lucide-react";
import Image from "next/image"
interface Feature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  subscription:string;
  price: number;
  priceId: string;
  imgurl:string;
text:string;
  features: Feature[];
  featured?: boolean;
  onGetStarted: (plan: string) => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
  subscription,
 
  title,
  imgurl,
  text,
  price,
  features,

  featured = false,
  onGetStarted,
}) => {
  return (
    <div
      className={`w-full max-w-sm bg-white rounded-lg shadow-sm p-4 lg:p-6 flex flex-col items-start ${
        featured ? "ring-1 ring-slate-300" : ""
      }`}
    >
      
      {featured && (
        <div className="text-blue-500 text-sm font-semibold mb-2">
          Most Popular
        </div>
      )}
      {" "}
      <Image
        width={100}
        height={100}
        src={`${imgurl}`}
        alt="User Badge"
        className="w-auto mt-3  h-auto"
      />
      <p className="text-[14px] mt-2 mb-2  text-slate-500 ">{text}</p>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="text-3xl text-slate-700 font-bold mb-1">${price}</div>
      <p className="text-sm text-slate-500">
        {`Per ${price >= 1000 ? "year" : "month"}`}
      </p>
      <ul className="w-full my-4 space-y-2">
        {features.map((feature, index) => (
          <ListItem
            key={index}
            text={feature.text}
            included={feature.included}
          />
        ))}
      </ul>
      <button
        className={`w-full py-2 rounded-md transition-colors font-semibold  ${
          featured
            ? "bg-gradient-to-tr from-purple-500 via-blue-500 to-yellow-500 text-white hover:bg-gradient-to-bl"
            : "bg-gradient-to-r hover:bg-gradient-to-l from-blue-400/30 via-purple-600/30 to-orange-500/30 bg-opacity-10"
        }`}
        onClick={() => onGetStarted(subscription)}
      >
        {featured ? (
          "Get Started"
        ) : (
          <span className="bg-gradient-to-r hover:bg-gradient-to-l from-blue-400 via-purple-600 to-orange-500 bg-clip-text text-transparent">
            Get Started
          </span>
        )}
      </button>
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
        <Check className="w-5 h-5 font-extrabold text-white mr-2 rounded-full bg-gradient-to-b from-purple-500 via-yellow-500 to-slate-200 p-1" />
      ) : (
        <X className="w-5 h-5 font-extrabold text-white mr-2 rounded-full bg-gradient-to-b from-red to-slate-200 p-1" />
      )}
      <span className={included ? "text-gray-700" : "text-gray-400"}>
        {text}
      </span>
    </li>
  );
};

export default PricingCard;
