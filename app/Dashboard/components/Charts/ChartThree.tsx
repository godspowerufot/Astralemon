import React from "react";

const AudienceGenderChart: React.FC = () => {
  // Audience data
  const audienceData = [
    { label: "13 - 17 years", percentage: 70, color: "bg-blue-600" },
    { label: "18 - 24 years", percentage: 80, color: "bg-teal-400" },
    { label: "25 - 34 years", percentage: 60, color: "bg-orange-400" },
    { label: "35 - 54 years", percentage: 48, color: "bg-pink-500" },
    { label: "55+ years", percentage: 53, color: "bg-purple-500" },
  ];

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-5">
      <div className="mb-5">
        <h5 className="text-xl font-semibold text-black dark:text-white">
          Audience Age
        </h5>
      </div>

      {/* Loop through audience data to render progress bars */}
      {audienceData.map((item, index) => (
        <div key={index} className="mb-8">
          <div className="mb-1 flex items-center justify-between">
            <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">
              {item.label}
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">
              {item.percentage}%
            </p>
          </div>
          <div className="bg-gray-200 h-2.5 rounded-full">
            <div
              className={`${item.color} h-[1.65rem] rounded-full`}
              style={{ width: `${item.percentage}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AudienceGenderChart;
