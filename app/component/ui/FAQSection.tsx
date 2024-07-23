// components/FAQSection.js
"use client";
import { useState } from "react";

import { faqItems } from "./lib/_exportLinks";
import React from "react";
// Declaring type for FAQ items

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div
      id="FAQ"
      className="flex center items-center max-w-screen-xl mt-20 mx-auto px-5 bg-white min-h-screen"
    >
      <div className="w-full">
        <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-3">
          <div className="flex flex-col">
            <h2 className="font-bold text-5xl mt-0 tracking-tight">FAQ</h2>
          </div>
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
