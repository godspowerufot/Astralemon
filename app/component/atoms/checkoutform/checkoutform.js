"use client";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const CheckoutForm = ({ price, buttonText }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async (event) => {
    setLoading(true);

    // Call your backend to create the Checkout session.
    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        priceId: "prod_QWuHBRVKjMuljO", // Replace with your Price ID
      }),
    });

    const session = await response.json();

    const stripe = await stripePromise;

    // Redirect to Stripe Checkout
    const { error } = await stripe.redirectToCheckout({
      sessionId: session.sessionId,
    });

    if (error) {
      console.error(error.message);
    }

    setLoading(false);
  };

  return (
    <button
      role="link"
      onClick={handleClick}
      disabled={loading}
      className="btn-primary"
    >
      {loading ? "Processing..." : buttonText}
    </button>
  );
};

export default CheckoutForm;
