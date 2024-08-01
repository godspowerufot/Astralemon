// components/FAQSection.js
"use client";
import { useState } from "react";

// Declaring type for FAQ items
type FAQItemType = {
  question: string;
  answer: string;
};
export const faqItems: FAQItemType[] = [
  {
    question: "Is there a risk of shadowban/ban?",
    answer:
      "We have been developing an algorithm since 2023 and we have been offering it to our customers since 2024. Despite these years, no customer has ever been banned due to automation.This is due to our security and account protection processes. We have developed a method that makes it possible to simulate human behavior, with a connection from an iPhone and thus not to be detected by Instagram. Our algorithm aims to annihilate Shadowban, not to cause it. By using our services, your engagement rate will increase, which will allow you to gain visibility.",
  },
  {
    question: "How many subscribers can I gain?",
    answer:
      "The number of subscribers you can gain varies depending on the quality and consistency of your content. We can't give specific figures. (Don't listen to those who promise you exact numbers, they're lying). However, be aware that only real and qualified users will follow you. Your branding is essential to attract these followers. We do not use contests or paid subscribers.",
  },
  {
    question: "Are they qualified subscribers?",
    answer:
      "Yes, absolutely! Our A.I. analyzes and filters the followers of your competitors to interact only with the most active and engaged ones. Since your targets are accounts similar to yours, this ensures that the followers you gain are not only real and active, but also highly qualified and interested in your field..",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Yes indeed, our subscriptions work by a monthly period you can cancel at any time while the period ends and you will not be charged the next period.",
  },
  {
    question: "Can I use AstraLemon on multiple accounts?",
    answer:
      "Yes, all our offers are available for one or more accounts. Contact us to find out our advantageous rates for multi-account subscriptions.",
  },
];
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div
      id="faqs"
      data-aos="fade-in"
      className="flex center items-center max-w-screen-xl mt-20 mx-auto px-5 bg-white "
    >
      <div className="w-full">
        <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-3">
          <h2 className="font-bold text-4xl max-md:text-3xl mb-4 mt-0 tracking-tight">
            Frequently asked questions
          </h2>
          <div className="flex flex-col"></div>
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              index={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
//component

type FAQItemProps = {
  index: number;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: (index: number) => void;
};

const FAQItem = ({
  index,
  question,
  answer,
  isOpen,
  onToggle,
}: FAQItemProps) => {
  return (
    <div className="py-5">
      <div
        className={`group ${isOpen ? "open" : ""}`}
        onClick={() => onToggle(index)}
      >
        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
          <span>{question}</span>
          <span className="transition group-open:rotate-180">
            <svg
              fill="none"
              height="24"
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        {/* if it opens close else opene it  */}
        {isOpen && (
          <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
            {answer}
          </p>
        )}
      </div>
    </div>
  );
};

export default FAQSection;
