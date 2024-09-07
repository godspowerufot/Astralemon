import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { error } from "console";

// Load your Stripe publishable key
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

const useStripeCheckout = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubscription = async (priceId: string, userId: string) => {
    setLoading(true);
    setError(null);

    try {
      const stripe = await stripePromise;

      // Call your backend to create a checkout session
      const response = await fetch(
        "http://159.203.44.134:8000/api/subscribe/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ priceId, userId }),
        }
      );

      const { sessionId } = await response.json();

      // Redirect to Stripe Checkout
      const result = await stripe?.redirectToCheckout({ sessionId });

      if (result?.error) {
        setError(result.error.message || "Something went wrong");
      }
    } catch (error: any) {
      setError(error.message);
      console.log(error)
    } finally {
      setLoading(false);
    }
  };

  return { handleSubscription, loading, error };
};

export default useStripeCheckout;
