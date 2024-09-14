import React from "react";

function PricingCard({ planName, price, features }:any) {
  return (
    <div className="w-80 h-[589px] p-6 bg-white rounded-t-lg shadow-lg flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-2">{planName}</h2>
      <p className="text-4xl font-bold mb-0">${price}</p>
      <p className="text-gray-500 mb-6">Per month</p>
      <button className="bg-black text-white py-2 px-4 rounded-md mb-6 hover:bg-gray-800">
        Get started
      </button>
      <ul className="list-none text-left w-full pl-8 space-y-2">
        {features.map((feature: { included: any; name: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }, index: React.Key | null | undefined) => (
          <li key={index} className="flex items-center">
            <span
              className={
                feature.included ? "text-green-500 mr-2" : "text-red-500 mr-2"
              }
            >
              {feature.included ? "✔" : "✘"}
            </span>
            {feature.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PricingSection() {
  const plans = [
    {
      planName: "Essential",
      price: 90,
      features: [
        { name: "1 Instagram account", included: true },
        { name: "25,000 shares/day", included: true },
        { name: "Mass views of stories", included: true },
        { name: "Mass likes of stories", included: true },
        { name: "Daily reports", included: true },
        { name: "Follow / Unfollow", included: false },
        { name: "Welcome DM", included: false },
      ],
    },
    {
      planName: "Standard",
      price: 120,
      features: [
        { name: "2 Instagram accounts", included: true },
        { name: "50,000 shares/day", included: true },
        { name: "Mass views of stories", included: true },
        { name: "Mass likes of stories", included: true },
        { name: "Daily reports", included: true },
        { name: "Follow / Unfollow", included: true },
        { name: "Welcome DM", included: false },
      ],
    },
    {
      planName: "Premium",
      price: 150,
      features: [
        { name: "3 Instagram accounts", included: true },
        { name: "100,000 shares/day", included: true },
        { name: "Mass views of stories", included: true },
        { name: "Mass likes of stories", included: true },
        { name: "Daily reports", included: true },
        { name: "Follow / Unfollow", included: true },
        { name: "Welcome DM", included: true },
      ],
    },
  ];

  return (
    <div className="flex justify-center gap-8 p-6">
      {plans.map((plan, index) => (
        <PricingCard
          key={index}
          planName={plan.planName}
          price={plan.price}
          features={plan.features}
        />
      ))}
    </div>
  );
}
