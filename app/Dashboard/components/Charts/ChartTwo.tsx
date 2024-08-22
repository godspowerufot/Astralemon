import React from "react";

const AudienceGenderChart: React.FC = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-[5.875rem] max-md:pt-[1.875rem] shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-5">
      <div className="mb-5">
        {" "}
        {/* Adjusted spacing for header */}
        <h5 className="text-xl font-semibold text-black dark:text-white">
          Audience Gender
        </h5>
      </div>

      {/* Gender labels and percentages */}
      <div className="mb-5 flex justify-between">
        {" "}
        {/* Added spacing between sections */}
        <div className="text-center">
          <p className="text-[12px] font-semibold text-black dark:text-white">
            Male
          </p>
          <p className="text-xl font-bold text-black dark:text-white">76%</p>
        </div>
        <div className="text-center">
          <p className="text-[12px] font-semibold text-black dark:text-white">
            Female
          </p>
          <p className="text-xl font-bold text-black dark:text-white">20%</p>
        </div>
        <div className="text-center">
          <p className="text-[12px] font-semibold text-black dark:text-white">
            Others
          </p>
          <p className="text-xl font-bold text-black dark:text-white">4%</p>
        </div>
      </div>

      {/* Progress bar with rounded edges */}
      <div className="bg-gray-200 relative mb-5 h-6 w-full overflow-hidden rounded-full">
        {" "}
        {/* Adjusted bottom margin */}
        <div
          className="absolute left-0 h-full rounded-l-full bg-blue-600"
          style={{ width: "76%" }}
        ></div>
        <div
          className="absolute left-[76%] h-full bg-teal-400"
          style={{ width: "20%" }}
        ></div>
        <div
          className="absolute left-[96%] h-full rounded-r-full bg-orange-400"
          style={{ width: "4%" }}
        ></div>
      </div>

      {/* Additional label details if needed */}
      <div className="mb-6 flex justify-between">
        {" "}
        {/* Adjusted bottom margin */}
        <p className="text-gray-600 dark:text-gray-400 text-sm">756.3k</p>
        <p className="text-gray-600 dark:text-gray-400 text-sm">56.1k</p>
        <p className="text-gray-600 dark:text-gray-400 text-sm">6.2k</p>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center space-x-6">
        <div className="flex items-center space-x-2">
          {" "}
          {/* Adjusted gap between dot and label */}
          <span className="inline-block h-3 w-3 rounded-full bg-blue-600"></span>
          <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">
            Male
          </p>
        </div>
        <div className="flex items-center space-x-2">
          {" "}
          {/* Adjusted gap between dot and label */}
          <span className="inline-block h-3 w-3 rounded-full bg-teal-400"></span>
          <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">
            Female
          </p>
        </div>
        <div className="flex items-center space-x-2">
          {" "}
          {/* Adjusted gap between dot and label */}
          <span className="inline-block h-3 w-3 rounded-full bg-orange-400"></span>
          <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">
            Others
          </p>
        </div>
      </div>
    </div>
  );
};

export default AudienceGenderChart;
