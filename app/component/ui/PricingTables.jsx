import React from "react";
import Image from "next/image";
import BackgroundImage from "@/public/image6.png"; // Update the path as necessary

const Pricing = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <h2 className="text-black text-[68px] max-md:text-2xl font-bold leading-[1.208] text-dark sm:text-4xl md:text-[45px]">
                Choose Your Perfect Plan
              </h2>
              <p className="text-[18px] text-[#4B5563] max-md:p-4 max-md:text-[16px]">
                Flexible pricing options designed to suit every need and budget.
                Find the perfect plan for you.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-8">
          <PricingCard
            type="Personal"
            price="$59"
            subscription="year"
            buttonText="Choose Personal"
            active
            features={[
              "1 User",
              "All UI components",
              "Lifetime access",
              "Free updates",
              "Use on 1 (one) project",
              "3 Months support",
            ]}
          />
          <PricingCard
            type="Business"
            price="$199"
            subscription="year"
            buttonText="Choose Business"
            active={false}
            features={[
              "5 Users",
              "All UI components",
              "Lifetime access",
              "Free updates",
              "Use on 3 (three) projects",
              "4 Months support",
            ]}
          />
          <PricingCard
            type="Professional"
            price="$256"
            subscription="year"
            buttonText="Choose Professional"
            active={false}
            features={[
              "Unlimited Users",
              "All UI components",
              "Lifetime access",
              "Free updates",
              "Unlimited projects",
              "12 Months support",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({
  type,
  price,
  subscription,
  buttonText,
  active,
  features,
}) => {
  return (
    <div className="relative z-10 mb-10 overflow-hidden rounded-[10px] max-md:w-[300px] text-black border-2 border-stroke bg-white px-8 py-10 shadow-pricing dark:border-dark-3 dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-[50px]">
      <span className="mb-3 block text-lg font-semibold text-center text-primary">
        {type}
      </span>
      <h2 className="mb-5 text-[42px] font-bold text-center text-black">
        {price}
        <br />
        <span className="text-base font-medium text-body-color dark:text-dark-6">
          / {subscription}
        </span>
      </h2>
      <div className="mb-9 flex flex-col gap-[14px]">
        {features.map((feature, index) => (
          <p key={index} className="text-base text-body-color dark:text-dark-6">
            {feature}
          </p>
        ))}
      </div>
      <a
        href="/#"
        className={`block w-full rounded-md border ${
          active
            ? "border-primary bg-primary p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90"
            : "border-stroke bg-transparent p-3 text-center text-base font-medium text-primary transition hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3"
        }`}
      >
        {buttonText}
      </a>
      <div>
        <span className="absolute right-0 top-7 z-[-1]">
          <svg
            width={77}
            height={172}
            viewBox="0 0 77 172"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx={86} cy={86} r={86} fill="url(#paint0_linear)" />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1={86}
                y1={0}
                x2={86}
                y2={172}
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3056D3" stopOpacity="0.09" />
                <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span className="absolute right-4 top-4 z-[-1]">
          <svg
            width={41}
            height={89}
            viewBox="0 0 41 89"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="38.9138"
              cy="87.4849"
              r="1.42021"
              transform="rotate(180 38.9138 87.4849)"
              fill="#3056D3"
            />
            {/* More circles here */}
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Pricing;
