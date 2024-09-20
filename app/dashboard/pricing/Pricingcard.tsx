"use client";
import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PricingCard from "./cards";
import CheckoutForm from "./checkout";
import { getAccessToken } from "@/utils/util";
import { toast } from "react-toastify";

// Initialize Stripe with your publishable key
const stripePromise = loadStripe(
  "pk_test_51PfoFIGdWNCS6S2AnrAUlib4mJAyb6aQoiTnW3V4pg0gqpkqNo2M3U3VXTaMPXI5BQ8mKa3aXxRNQxOCDDezqnx600EkKfIrCy"
);

// if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
//   console.error(
//     "Stripe publishable key is not set in the environment variables."
//   );
// }

const PricingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"monthly" | "yearly">("monthly");
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const accesstoken = getAccessToken();

  const handleGetStarted = (plan: string) => {
    if (!accesstoken) {
      toast.error("Kindly log in to subscribe a plan");
    }
    setSelectedPlan(plan);
  };

  const handleCloseCheckout = () => {
    setSelectedPlan(null);
  };

  return (
    <Elements stripe={stripePromise}>
   
        <div className="container mx-auto max-md:flex max-md:items-center max-md:justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <PricingCard
              subscription="basic"
              title="Easy"
              text="Take advantage of a trial to discover the performance of our services."
              imgurl="/basicbig.png"
              price={activeTab === "monthly" ? 35 : 35}
              priceId="price_1HhQ2bQGf4fNlG6fQgP0kjE3"
              features={[
                { text: "250 followers/wee", included: true },
                { text: "25,000 shares/day", included: true },
                { text: "Mass views of stories", included: true },
                { text: "Mass likes of stories", included: true },
                { text: "Interactions with surveys", included: true },
                { text: "Daily reports", included: true },
                { text: "1 Instagram account", included: true },
                { text: "Welcome DM", included: false },
                { text: "Follow / Unfollow", included: false },
              ]}
              onGetStarted={handleGetStarted}
            />
            <PricingCard
              title="Premium"
              imgurl="/meduimbig.png"
              text="Premium offer to perform at your fair value."
              subscription="medium"
              price={activeTab === "monthly" ? 65 : 65}
              priceId="price_1HhQ3fQGf4fNlG6fl9PoXK09"
              features={[
                { text: "800 -1,500 followers/month", included: true },
                { text: "25,000 actions/day", included: true },
                { text: "Mass views of stories", included: true },
                { text: "Mass likes of stories", included: true },
                { text: "Follow / Unfollow", included: false },
                { text: "Daily reports", included: true },
                { text: "Targetting with AI", included: true },
                { text: "Interactions with surveys", included: true },
                { text: "1 Instagram account", included: true },
                { text: "Welcome DM", included: false },
              ]}
              featured
              onGetStarted={handleGetStarted}
            />
            <PricingCard
              title="Expert"
              imgurl="/premuimbig.png"
              text="Our comprehensive offer guarantees you the best results."
              subscription="premium"
              price={activeTab === "monthly" ? 99 : 99}
              priceId="price_1HhQ4uQGf4fNlG6fsH2yPvLJ"
              features={[
                { text: "1,200 -2,000 followers/month", included: true },
                { text: "35,000 actions/day", included: true },
                { text: "Mass views of stories", included: true },
                { text: "Mass likes of stories", included: true },
                { text: "Follow / Unfollow", included: false },
                { text: "Daily reports", included: true },
                { text: "Welcome DM", included: true },
                { text: "Interactions with surveys", included: true },
                { text: "Post likes", included: true },
                { text: "Targetting with AI", included: true },
                { text: "2 Instagram account", included: true },
              ]}
              onGetStarted={handleGetStarted}
            />
          </div>
        </div>
        {selectedPlan && (
          <CheckoutForm plans={selectedPlan} onClose={handleCloseCheckout} />
        )}
    
    </Elements>
  );
};

export default PricingPage;
