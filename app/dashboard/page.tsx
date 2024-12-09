import { Metadata } from "next";
import favicon from "../favicon.ico";

import DashBoardHome from "./DashboardHome/DashBoardHome";
export const metadata: Metadata = {
  title: "AstraLemon",
  description: "AstraLemon DashBoard",
  icons: `${favicon}`,
};
export default function Dashboard() {
   

  return (
    <>
      <div className="">
      <DashBoardHome />
      </div>
    </>
  );
}
