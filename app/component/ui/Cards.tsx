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
    <div className="bg-white p-6 gap-4 border rounded-lg shadow-md flex flex-col items-start">
      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
        <Image src={icon} alt="icon" width={24} height={24} />
      </div>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600">{description}</p>
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
    title: "Follow and Unsubscribe",
    description:
      "Daily engagement involves following about fifty accounts, then unfollowing them after a few days.",
    icon: Icon1,
  },
  {
    title: "Like and Comment",
    description:
      "Engage with your audience by liking and commenting on their posts regularly.",
    icon: Icon2,
  },
  {
    title: "Post Regularly",
    description:
      "Keep your followers engaged by posting high-quality content regularly.",
    icon: Icon3,
  },
  {
    title: "Use Hashtags",
    description: "Increase your reach by using relevant and trending hashtags.",
    icon: Icon4,
  },
  {
    title: "Collaborate",
    description: "Collaborate with other influencers to grow your following.",
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
