"use client";
import dynamic from "next/dynamic";
import React from "react";
import Image from "next/image";
// import ChartOne from "../Charts/ChartOne";
// import ChartTwo from "../Charts/ChartTwo";
// import ChatCard from "../Chat/ChatCard";
// import TableOne from "../Tables/TableOne";
import CardDataStats from "../CardDataStats";

// const MapOne = dynamic(() => import("@/components/Maps/MapOne"), {
//   ssr: false,
// });

// const ChartThree = dynamic(() => import("@/components/Charts/ChartThree"), {
//   ssr: false,
// });
const cardData = [
  {
    title: "Total Views",
    total: "$3.456K",
    rate: "0.43%",
    levelUp: true,
    additionalText: "Followers ",
    iconSrc: "/images/icon/followers.png",
    altText: "Followers Icon",
  },
  {
    title: "Total Profit",
    total: "$45.2K",
    rate: "4.35%",
    levelUp: true,
    additionalText: "Following ",
    iconSrc: "/images/icon/following.png",
    altText: "Following Icon",
  },
  {
    title: "Total Sales",
    total: "458k",
    rate: "1.87%",
    levelUp: true,
    additionalText: "Impressions ",
    iconSrc: "/images/icon/impressions.png",
    altText: "Impressions Icon",
  },
];

const DashBoardHome: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
        {cardData.map((card, index) => (
          <CardDataStats
            key={index}
            title={card.title}
            total={card.total}
            rate={card.rate}
            levelUp={card.levelUp}
            additionalText={card.additionalText}
          >
            {/* Dynamic Icon */}
            <Image
              width={22}
              height={22}
              src={card.iconSrc}
              alt={card.altText}
              priority
            />
          </CardDataStats>
        ))}
      </div>

      {/* <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <MapOne />
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard />
      </div> */}
    </>
  );
};


export default DashBoardHome;
