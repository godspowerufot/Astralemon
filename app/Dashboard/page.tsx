import { Metadata } from "next";
import DefaultLayout from "./layout";
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
