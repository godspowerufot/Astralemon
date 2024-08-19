import Image, { StaticImageData } from "next/image";
import React from "react";
import Icon1 from "@/public/IconShapes1.png";
import Icon2 from "@/public/IconShapes2.png";
import Icon3 from "@/public/IconShapes3.png";
import Icon4 from "@/public/IconShapes4.png";
import Icon5 from "@/public/IconShapes5.png";
import Icon6 from "@/public/IconShapes6.png";

// Define the interface for Card component props
interface CardProps {
  title: string;
  description: string;
  icon: StaticImageData;
}

const Card: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <div
      data-aos="zoom-in"
      className="bg-white max-md:w-[full] max-md:h-[240px] p-6 gap-4 border rounded-lg shadow-md flex flex-col items-start"
    >
      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
        <Image src={icon} alt="icon" width={24} height={24} />
      </div>
      <h2 className="text-xl text-start font-semibold">{title}</h2>
      <p className="text-gray-600 text-start">{description}</p>
    </div>
  );
};

// Define the interface for card data
interface CardData {
  title: string;
  description: string;
  icon: StaticImageData;
}

const cardData: CardData[] = [
  {
    title: "Banning is Impossible",
    description:
      "You cannot be banned or shadow banned because our personalized algorithm manages everything..",
    icon: Icon1,
  },
  {
    title: "Mass story views",
    description:
      "Automatically view competitors' top subscriber stories to gain insights and expand your reach effortlessly.",
    icon: Icon2,
  },
  {
    title: "Welcome direct message",
    description:
      "Craft a personalized welcome message for every new subscriber with our customizable welcome message feature.",
    icon: Icon3,
  },
  {
    title: "Follow and Unsubscribe",
    description:
      "Empower your strategy with our algorith designed to interact with stories from your competitors top subscribers..",
    icon: Icon4,
  },
  {
    title: "Mass viewing of feed story",
    description:
      "Our powerful tool designed to automate viewing of feed stories from your competitors’ most engaged subscribers",
    icon: Icon5,
  },
  {
    title: "Analyze Performance",
    description: "Use analytics tools to track the performance of your posts.",
    icon: Icon6,
  },
];

const PageUI: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-md:flex max-md:flex-col max-md:items-center max-md:justify-center">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default PageUI;
