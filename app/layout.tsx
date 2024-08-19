import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import favicon from "./favicon.ico";

const inter = Instrument_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AstraLemon",
  description: "AstraLemon LandingPage",
  icons: `${favicon}`,
};
// Replace with your publishable key
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >

      <link rel="icon" href="favico.ico" type="image/x-icon" />
      <body
        suppressHydrationWarning={true}
        className={`${inter.className}` }
      >
        {/* <AppHeader /> */}
        <div className="h-full   dark:bg-boxdark-2 dark:text-bodydark">
          {children}
        </div>
        {/* <AppFooter /> */}
      </body>
      <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
    </html>
  );
}
