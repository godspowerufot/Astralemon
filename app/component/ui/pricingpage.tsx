import * as React from "react";
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "stripe-pricing-table": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}
function PricingPage() {
  // Paste the stripe-pricing-table snippet in your React component
  return (
    <section className="relative z-10 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4" data-aos="fade-in">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <h2 className=" text-black text-[68px] max-md:text-2xl  font-bold leading-[1.208]    md:text-[45px]">
                Choose Your Perfect Plan{" "}
              </h2>
              <p className=" text-[18px] text-[#4B5563] max-md:p-4 max-md:text-[16px]">
                Flexible pricing options designed to suit every need and budget.
                Find the perfect plan for you.
              </p>
            </div>
            <script
              async
              src="https://js.stripe.com/v3/pricing-table.js"
            ></script>
            <stripe-pricing-table
              pricing-table-id={process.env.STRIPE_PRICING_TABLE_ID}
              publishable-key={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
            ></stripe-pricing-table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingPage;
