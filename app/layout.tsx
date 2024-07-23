import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import AppFooter from "@/app/component/ui/AppFooter";
import favicon from "./favicon.ico";
import AppHeader from "@/app/component/ui/AppHeader";
import MyApp from "@/app/_app";

const inter = Instrument_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Media",
  description: "Media-bird LandingPage",
  icons: `${favicon}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ overflowX: "hidden" }}>
      <MyApp />

      <link rel="icon" href="favico.ico" type="image/x-icon" />

      <body className={inter.className}>
        <AppHeader />
        {children}
        <AppFooter />
      </body>
    </html>
  );
}
