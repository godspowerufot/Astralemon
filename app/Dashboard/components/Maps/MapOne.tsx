import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { ChartData, ChartOptions, TooltipItem } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const MapOne: React.FC = () => {
  const defaultColors = [
    "rgba(211, 211, 211, 1)", // Light gray
    "rgba(211, 211, 211, 1)", // Light gray
    "rgba(54, 162, 235, 0.6)", // Light blue for middle bar
    "rgba(211, 211, 211, 1)", // Light gray
    "rgba(211, 211, 211, 1)", // Light gray
    "rgba(211, 211, 211, 1)", // Light gray
    "rgba(211, 211, 211, 1)", // Light gray
  ];

  const [barColors, setBarColors] = useState(defaultColors);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const data: ChartData<"bar"> = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Engagements on your story",
        data: [1200, 1500, 2856, 1800, 2000, 1900, 1300], // Your engagement data
        backgroundColor: barColors,
        borderRadius: 5, // Rounded bar edges
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false, // Remove grid lines on the x-axis
        },
        ticks: {
          color: "#000", // Customize the tick color if needed
        },
      },
      y: {
        display: false, // Hide the vertical axis
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend if you want a cleaner look
      },
      tooltip: {
        enabled: true,
        mode: "index",
        intersect: false,
        backgroundColor: "rgba(0,0,0,0.7)", // Tooltip background color
        titleFont: { size: 14 },
        bodyFont: { size: 12 },
        caretPadding: 5,
        displayColors: false, // Hide the color box in the tooltip
        // Disable tooltip animation for smoother performance
        animation: {
          duration: 0,
        },
        callbacks: {
          label: (context: TooltipItem<"bar">): string | string[] => {
            // Assert that context.raw is a number
            const value = context.raw as number;
            return value.toString();
          },
        },
      },
    },
    // Remove the hover configuration
    onClick: (event: any, chartElement: any[]) => {
      if (chartElement.length > 0) {
        const index = chartElement[0].index;
        setSelectedIndex(index);
        const newColors = defaultColors.map((color, i) =>
          i === index ? "rgba(54, 162, 235, 0.6)" : "rgba(211, 211, 211, 1)"
        );
        setBarColors(newColors);
      } else {
        setBarColors(defaultColors);
      }
    },
  };

  return (
    <div className=" col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark  sm:w-[80%] max-md:w-[80%] sm:px-7.5 md:w-full lg:w-[30rem] xl:col-span-5">
      <div className="mb-5 flex flex-col lg:flex-row ip items-start justify-start lg:items-center lg:justify-between">
        <div className="flex flex-col">
          <h5 className="text-xl font-semibold text-black dark:text-white">
            Story Engagement
          </h5>
          <h6 className="font-meduim text-[#6B7280] dark:text-white">
            Engagement on your stories
          </h6>
        </div>
        <select className="rounded border px-2 py-1 text-sm">
          <option>Last 7 days</option>
          <option>Last 14 days</option>
        </select>
      </div>

      <div style={{ height: "300px" }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default MapOne;
