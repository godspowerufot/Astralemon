"use client";
import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { toast } from "react-toastify";
import { api } from "@/lib/axios";
import { useUserDetails } from "@/hooks/useLoguser";
import { getAccessToken } from "@/utils/util";

const CheckoutForm: React.FC<{ plans: string; onClose: () => void }> = ({
  plans,
  onClose,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const { data } = useUserDetails(); // Get logged-in user details

const handleSubmit = async (event: React.FormEvent) => {
  event.preventDefault();

  if (!stripe || !elements) {
    console.error("Stripe or Elements are not available.");
    return;
  }

  const cardElement = elements.getElement(CardElement);
  if (!cardElement) {
    console.error("Card Element is not available.");
    return;
  }

  const { error: stripeError, paymentMethod } =
    await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: { name, email },
    });

  if (stripeError) {
    console.error("Stripe error:", stripeError.message);
    setError(stripeError.message || "Something went wrong.");
    setLoading(false);
    return;
  }

  console.log("Payment method ID:", paymentMethod.id);

  setLoading(true);

  try {
    const token = getAccessToken();
    const response = await api.post(
      "/api/subscribe/",
      {
        user_id: `${data?.id}`, // Fetch user ID from hook
        plan: `${plans}`,
        payment_method_id: paymentMethod.id,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("API response:", response); // Log the entire response object

    if (response.status === 201) {
      console.log("Subscription successful:", response.data);
      toast.success("Subscription successful!");
      setSuccess("Subscription successful!");
    } else {
      // Inspect the response data to determine the error structure
      console.error("Subscription failed:", response.data);
      toast.error(
        `Subscription failed: ${response.data.message || "Unknown error"}`
      );
      setError(
        `Subscription failed: ${response.data.message || "Unknown error"}`
      );
    }
  } catch (error) {
    console.error("Error during subscription:", error);
    toast.error("Error during subscription.");
    setError("Error during subscription.");
  } finally {
    setLoading(false);
  }
};


  return (
  
      <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-md" onClick={onClose}></div>
    <div className="w-full    z-[1111]  max-w-sm mx-auto p-6 bg-white  rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">Subscribe to {plans}</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1  p-4 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block  text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1  p-4 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
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
        </div>
        <div className="flex justify-between mt-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
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
     
    </div>
     </div>
  );
};

export default CheckoutForm;
