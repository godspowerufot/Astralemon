import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const trafficData = [
  {
    state: "California",
    likes: { value: "345,756", change: "up" },
    comments: { value: "55,856", change: "up" },
    shares: { value: "6,619", change: "up" },
  },
  {
    state: "Nevada",
    likes: { value: "234,236", change: "up" },
    comments: { value: "23,567", change: "down" },
    shares: { value: "9,933", change: "down" },
  },
  {
    state: "Texas",
    likes: { value: "456,789", change: "up" },
    comments: { value: "65,432", change: "up" },
    shares: { value: "12,345", change: "up" },
  },
  {
    state: "New York",
    likes: { value: "123,456", change: "down" },
    comments: { value: "54,321", change: "up" },
    shares: { value: "7,890", change: "down" },
  },
];

const TableTraffic = () => {
  return (
    <div className="w-full rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 lg:w-[37.9rem] xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Traffic by Location
      </h4>

      <div className="overflow-x-auto">
        <div className="min-w-[700px]">
          {" "}
          {/* Adjust this width according to your content */}
          <div className="grid grid-cols-4 gap-4 sm:grid-cols-5">
            <div className="p-2.5 xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                State
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Likes
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Comments
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Shares
              </h5>
            </div>
          </div>
          {trafficData.map((data, key) => (
            <div
              className={`grid grid-cols-4 gap-4 sm:grid-cols-5 ${
                key === trafficData.length - 1
                  ? ""
                  : "border-b border-stroke dark:border-strokedark"
              }`}
              key={key}
            >
              <div className="flex items-center gap-2 p-2.5 xl:p-5">
                <p className="font-satoshi font-semibold text-black dark:text-white">
                  {data.state}
                </p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="flex items-center justify-center gap-3 text-[#6B7280]">
                  {data.likes.change === "up" ? (
                    <FaArrowUp className="text-green-500" />
                  ) : (
                    <FaArrowDown className="text-red" />
                  )}
                  {data.likes.value}{" "}
                </p>
              </div>

              <div className="flex items-center justify-center p-2.5 text-gray-2 xl:p-5">
                <p className="flex items-center justify-center gap-3 text-[#6B7280]">
                  {data.comments.change === "up" ? (
                    <FaArrowUp className="text-green-500" />
                  ) : (
                    <FaArrowDown className="text-red" />
                  )}
                  {data.comments.value}{" "}
                </p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="flex items-center justify-center gap-3 text-[#6B7280]">
                  {data.shares.change === "up" ? (
                    <FaArrowUp className="text-green-500" />
                  ) : (
                    <FaArrowDown className="text-red" />
                  )}
                  {data.shares.value}{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableTraffic;
