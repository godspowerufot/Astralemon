// // CheckoutForm.tsx
// import React from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import {
//   Elements,
//   CardElement,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js";

// // Replace with your actual Stripe public key
// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
// );

// function CheckoutForm({ plan, userId }: { plan: string; userId: string }) {
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card: elements.getElement(CardElement),
//     });

//     if (error) {
//       console.error(error);
//     } else {
//       const response = await fetch("/api/subscribe_to_plan/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           user_id: userId,
//           plan: plan,
//           payment_method_id: paymentMethod.id,
//         }),
//       });

//       const data = await response.json();

//       if (data.status === "Subscription successful") {
//         alert("Subscription successful!");
//       } else {
//         alert("Subscription failed: " + data.message);
//       }
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement />
//       <button type="submit" disabled={!stripe}>
//         Subscribe
//       </button>
//     </form>
//   );
// }

// export default function App() {
//   const userId = "your-actual-user-id";

//   return (
//     <Elements stripe={stripePromise}>
//       <CheckoutForm plan="basic" userId={userId} />
//     </Elements>
//   );
// }
