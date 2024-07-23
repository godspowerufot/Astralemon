import Image from "next/image";
import React from "react";

const cardData = [
  {
    title: "Follow and Unsubscribe",
    description:
      "Daily engagement involves following about fifty accounts, then unfollowing them after a few days.",
    icon: "/icons/icon1.png",
  },
  {
    title: "Like and Comment",
    description:
      "Engage with your audience by liking and commenting on their posts regularly.",
    icon: "/icons/icon2.png",
  },
  {
    title: "Post Regularly",
    description:
      "Keep your followers engaged by posting high-quality content regularly.",
    icon: "/icons/icon3.png",
  },
  {
    title: "Use Hashtags",
    description: "Increase your reach by using relevant and trending hashtags.",
    icon: "/icons/icon4.png",
  },
  {
    title: "Collaborate",
    description: "Collaborate with other influencers to grow your following.",
    icon: "/icons/icon5.png",
  },
  {
    title: "Analyze Performance",
    description: "Use analytics tools to track the performance of your posts.",
    icon: "/icons/icon6.png",
  },
];

const Card = ({ title, description, icon }) => {
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

const PageUI = () => {
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
