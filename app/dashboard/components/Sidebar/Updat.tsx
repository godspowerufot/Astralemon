"use client";
import { useState } from "react";
import { CloseButton } from "@chakra-ui/react";
import { ArrowBigUp } from "lucide-react";
const Update = () => {
  // State to manage the visibility of the card
  const [isCardVisible, setIsCardVisible] = useState(true);

  // Function to toggle card visibility
  const toggleCard = () => {
    setIsCardVisible(!isCardVisible);
  };

  return (
    <>
      {/* If the card is visible, show the card */}
      {isCardVisible ? (
        <div className="w-full fixed bottom-0 left-0 flex items-center p-6">
          <div
            className="w-full mb-6 rounded-xl flex-col flex items-start justify-start p-4"
            style={{
              background:
                "linear-gradient(90deg, rgba(91, 145, 255, 1), rgba(120, 186, 252, 1))", // Gradient background
            }}
          >
            <div className="flex justify-between items-start gap-16 text-white">
              <h2 className="font-semibold text-nowrap">Upgrade plan</h2>
              {/* Close Button to hide the card */}
              <CloseButton
                onClick={toggleCard} // Hide the card when clicked
                className="font-semibold ml-[10%] float-end"
              />
            </div>
            <p className="mt-3 text-[#FFFFFF]">
              Upgrade your plan to professional to access all our services
              tailored for you.
            </p>
            <button className="bg-white border-solid text-blue-500 w-full mt-4 px-4 py-2 rounded-full">
              Update now
            </button>
          </div>
        </div>
      ) : (
        // If the card is hidden, show the blue circular button
        <div
          className="fixed bottom-4  left-4 bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer"
          onClick={toggleCard} // Show the card when clicked
        >
          {/* Add content/icon inside the circle if desired */}
          <span className="text-white  text-lg font-bold"><ArrowBigUp/></span>
        </div>
      )}
    </>
  );
};

export default Update;
