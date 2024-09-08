"use client";

import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Check, X } from "lucide-react";

// Initialize Stripe with your publishable key
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
);

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
  console.error(
    "Stripe publishable key is not set in the environment variables."
  );
}

// Define the main PricingPage component
const PricingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"monthly" | "yearly">("monthly");

  return (
    <Elements stripe={stripePromise}>
      <section
        id="pricing"
        className="relative z-10 overflow-hidden dark:bg-dark p-8"
      >
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
          <h2 className="text-black dark:text-white text-3xl md:text-5xl font-bold">
            Pricing
          </h2>
          <div className="flex items-center bg-[#eeeff0] p-2 rounded-md w-72">
            <button
              className={`flex-1 px-4 py-2 rounded-l-md ${
                activeTab === "monthly"
                  ? "bg-white text-blue-600 font-semibold"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("monthly")}
            >
              Monthly
            </button>
            <button
              className={`flex-1 px-4 py-2 rounded-r-md ${
                activeTab === "yearly"
                  ? "bg-white text-blue-600 font-semibold"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("yearly")}
            >
              Yearly
            </button>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Essential Plan */}
            <PricingCard
              title="Essential"
              price={activeTab === "monthly" ? 35 : 35}
              priceId="price_1HhQ2bQGf4fNlG6fQgP0kjE3"
              userId="user_0"
              features={[
                { text: "1 Instagram account", included: true },
                { text: "25,000 shares/day", included: true },
                { text: "Mass views of stories", included: true },
                { text: "Mass likes of stories", included: true },
                { text: "Daily reports", included: true },
                { text: "Follow / Unfollow", included: false },
                { text: "Welcome DM", included: false },
              ]}
            />

            {/* Premium Plan */}
            <PricingCard
              title="Premium"
              price={activeTab === "monthly" ? 65 : 65}
              priceId="price_1HhQ3fQGf4fNlG6fl9PoXK09"
              userId="user_1"
              featured
              features={[
                { text: "1 Instagram account", included: true },
                { text: "25,000 shares/day", included: true },
                { text: "Mass views of stories", included: true },
                { text: "Mass likes of stories", included: true },
                { text: "Daily reports", included: true },
                { text: "Follow / Unfollow", included: false },
                { text: "Welcome DM", included: false },
              ]}
            />

            {/* Platinum Plan */}
            <PricingCard
              title="Platinum"
              price={activeTab === "monthly" ? 99 : 99}
              priceId="price_1HhQ4uQGf4fNlG6fsH2yPvLJ"
              userId="user_2"
              features={[
                { text: "1 Instagram account", included: true },
                { text: "35,000 shares/day", included: true },
                { text: "Mass views of stories", included: true },
                { text: "Mass likes of stories", included: true },
                { text: "Daily reports", included: true },
                { text: "Follow / Unfollow", included: true },
                { text: "Welcome DM", included: true },
              ]}
            />
          </div>
        </div>
      </section>
    </Elements>
  );
};

export default PricingPage;

// Define the PricingCard component
interface Feature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: number;
  priceId: string;
  userId: string;
  features: Feature[];
  featured?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  priceId,
  userId,
  features,
  featured = false,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isPurchasing, setIsPurchasing] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
const handleSubscribe = async () => {
  if (!stripe || !elements) {
    return;
  }

  if (!showCheckout) {
    setShowCheckout(true);
    return;
  }

  setLoading(true);
  setError(null);
  setSuccess(null);

  // Create PaymentMethod
  const { error: paymentError, paymentMethod } =
    await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)!,
    });

  if (paymentError) {
    setError(paymentError.message || "Something went wrong.");
    setLoading(false);
    return;
  }

  // Retrieve access token (assuming it's stored in localStorage)
  const token = localStorage.getItem("access_token");

  if (!token) {
    setError("You are not logged in. Please log in to subscribe.");
    setLoading(false);
    return;
  }

  try {
    const response = await fetch("http://159.203.44.134:8000/api/subscribe/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Include the access token in the Authorization header
      },
      body: JSON.stringify({
        user_id: userId,
        plan: title.toLowerCase(),
        price_id: priceId,
        payment_method_id: paymentMethod.id,
      }),
    });

    const data = await response.json();

    if (data.status === "Subscription successful") {
      setSuccess("Subscription successful!");
      setIsPurchasing(false);
      setShowCheckout(false);
    } else {
      setError(`Subscription failed: ${data.message}`);
    }
  } catch (err) {
    console.error("Subscription Error:", err);
    setError("An error occurred during subscription.");
  }

  setLoading(false);
};


  const handleCancel = () => {
    setShowCheckout(false);
    setError(null);
    setSuccess(null);
  };

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
      {!showCheckout ? (
        <button
          className={`w-full py-2 rounded-md mb-6 transition-colors ${
            featured
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-black text-white hover:bg-gray-700"
          }`}
          onClick={() => setShowCheckout(true)}
        >
          Get Started
        </button>
      ) : (
        <form onSubmit={handleSubscribe} className="w-full">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubscribe}
              disabled={!stripe || loading}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50"
            >
              {loading ? "Processing..." : "Subscribe"}
            </button>
          </div>
          {error && (
            <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
          )}
          {success && (
            <p className="text-green-500 text-sm mt-2 text-center">{success}</p>
          )}
        </form>
      )}
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


// Define the ListItem component
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
