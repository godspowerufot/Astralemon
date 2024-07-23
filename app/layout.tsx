import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import AppFooter from "@/app/component/ui/AppFooter";
import favicon from "./favicon.ico";
import AppHeader from "@/app/component/ui/AppHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Media",
  description: "JobMingle LandingPage",
  icons: `${favicon}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ overflowX: "hidden" }}>
      <link rel="icon" href="favico.ico" type="image/x-icon" />

      <body className={inter.className}>
        <AppHeader />
        {children}
        {/* <AppFooter /> */}
      </body>
    </html>
  );
}
