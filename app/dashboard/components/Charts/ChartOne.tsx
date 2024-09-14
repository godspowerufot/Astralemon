"use client";

import { useState } from "react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

// Define the allowed keys for the tabs and the seriesData
type TabKey = "Likes" | "Comments" | "Shares";

const options: ApexOptions = {
  legend: {
    show: false,
    position: "top",
    horizontalAlign: "left",
  },
  colors: ["#3776F6"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    height: 450,
    type: "area",
    dropShadow: {
      enabled: true,
      color: "#623CEA14",
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },
    toolbar: {
      show: false,
    },
  },
  stroke: {
    width: 2,
    curve: "smooth",
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.4,
      opacityTo: 0,
      stops: [6.25, 100],
    },
  },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 0,
  },
  xaxis: {
    type: "category",
    categories: [
      "Jan 21",
      "Jan 22",
      "Jan 23",
      "Jan 24",
      "Jan 25",
      "Jan 26",
      "Jan 27",
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: "0px",
      },
    },
    min: 0,
    max: 20000, // Adjust max value as needed
  },
};

const ChartWithTabs: React.FC = () => {
  // Ensure activeTab can only be one of the defined keys
  const [activeTab, setActiveTab] = useState<TabKey>("Likes");

  // Define seriesData with keys of type TabKey
  const seriesData: Record<TabKey, number[]> = {
    Likes: [5000, 12000, 8000, 18000, 10000, 15000, 12000],
    Comments: [2000, 5000, 3000, 8000, 4000, 7000, 5000],
    Shares: [1000, 3000, 2000, 6000, 3000, 5000, 4000],
  };

  const series = [
    {
      name: activeTab,
      data: seriesData[activeTab],
    },
  ];

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      {/* Header Section */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold">Posts</h2>
          <p className="text-gray-500 text-sm">Engagements on your posts</p>
        </div>
        <div>
          <select className="border-gray-300 rounded border px-3 py-1 text-sm">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="border-gray-200 mt-5 flex border-b">
        {["Likes", "Comments", "Shares"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as TabKey)}
            className={`mr-5 pb-2 ${
              activeTab === tab
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Chart Section */}
      <div id="chartWithTabs" className="-ml-5 mt-5">
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={450}
          width={"100%"}
        />
      </div>
    </div>
  );
};

export default ChartWithTabs;
