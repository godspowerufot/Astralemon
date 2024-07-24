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
    <stripe-pricing-table
      pricing-table-id="prctbl_1PfrHFGdWNCS6S2A4e8UOffX"
      publishable-key="pk_test_51PfoFIGdWNCS6S2AnrAUlib4mJAyb6aQoiTnW3V4pg0gqpkqNo2M3U3VXTaMPXI5BQ8mKa3aXxRNQxOCDDezqnx600EkKfIrCy"
    ></stripe-pricing-table>
  );
}

export default PricingPage;
