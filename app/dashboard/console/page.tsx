"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaCircleUser, FaRegClock } from "react-icons/fa6";

export default function Home() {
  // Log timestamp
  const getCurrentTime = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const day = now.getDate();

    return `${day}:${timeString}`;
  };

  // Account lists
  const igAccounts = [
    { username: "goerge_neuta", avatar: <FaCircleUser /> },
    { username: "goerge_bush", avatar: <FaCircleUser /> },
    { username: "karma_neuta", avatar: <FaCircleUser /> },
  ];
  const [selectedAccount, setSelectedAccount] = useState<{
    username: string;
    avatar: any;
  }>({ username: "", avatar: null });

  // Account logs
  const logs = [
    {
      time: getCurrentTime(),
      user: selectedAccount.username,
      action: "started astralemon",
    },
    {
      time: getCurrentTime(),
      user: selectedAccount.username,
      action: "restarted astralemon",
    },
    {
      time: getCurrentTime(),
      user: selectedAccount.username,
      action: "stopped astralemon",
    },
    {
      time: getCurrentTime(),
      user: "",
      action: "fetching.... 0934:23872:uuid/>#4421",
    },
    {
      time: getCurrentTime(),
      user: "",
      action: "matching profile... 2397:32821:uuid/>#3952",
    },
    {
      time: getCurrentTime(),
      user: "",
      action: "fetched due users...(89324 found)",
    },
    {
      time: getCurrentTime(),
      user: "",
      action: "connection secured.",
    },
    {
      time: getCurrentTime(),
      user: "",
      action: "registering session handler",
    },
    {
      time: getCurrentTime(),
      user: "",
      action: "fetched due users... (89324 found)",
    },
    {
      time: getCurrentTime(),
      user: "",
      action: "fetched all due users...",
    },
    {
      time: getCurrentTime(),
      user: "",
      action: "matching profile... 2857:79631:uuid/>#7852",
    },
    {
      time: getCurrentTime(),
      user: "",
      action: "fetching.... 00954:24672:uuid/>#47921",
    },
    {
      time: getCurrentTime(),
      user: "",
      action: "loaded yml database",
    },
    {
      time: getCurrentTime(),
      user: "",
      action: "fetching.... 547457:78472:uuid/>#78921",
    },
    {
      time: getCurrentTime(),
      user: "",
      action: "server users_> monitoring... instances/>#2642:324",
    },
    {
      time: getCurrentTime(),
      user: "",
      action: "loading region data...",
    },
  ];

  const [currentLogIndex, setCurrentLogIndex] = useState(0);
  const [displayedLogs, setDisplayedLogs] = useState([logs[0]]);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying && currentLogIndex < logs.length - 1) {
      const timer = setTimeout(() => {
        setCurrentLogIndex(currentLogIndex + 1);
        setDisplayedLogs((prevLogs) => [
          ...prevLogs,
          logs[currentLogIndex + 1],
        ]);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [currentLogIndex, logs, selectedAccount]);

  const controlLogs = (action: "start" | "stop" | "restart") => {
    switch (action) {
      case "start":
        setIsPlaying(true);
        break;
      case "stop":
        setIsPlaying(false);
        break;
      case "restart":
        setCurrentLogIndex(0);
        setIsPlaying(true);
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-2 lg:p-8">
      <div className="mb-6">
        <h1 className="text-lg lg:text-2xl font-semibold">Console</h1>
        <p className="text-sm lg:text-base">09/23/24 &gt; Running</p>
      </div>

      <div className="grid grid-flow-row grid-cols-12 lg:gap-5 gap-3 mb-6">
        <div className="col-span-12 order-2 lg:order-1 lg:col-span-8">
          <h3 className="mb-4 bg-white rounded-lg font-bold p-2 lg:p-4 text-base lg:text-xl">
            Instagram account
            <span className="text-black text-nowrap ms-2">
              {"<"} {selectedAccount.username} &gt;
            </span>
          </h3>
          {/* Displayed Logs */}
          <div className="rounded-lg bg-white p-2 lg:p-4 w-full mb-4 min-h-50">
            {selectedAccount.username.length > 0 &&
              displayedLogs.map((item, index) => (
                <h3
                  key={index}
                  className="flex items-center my-0 typewriter w-fit text-nowrap"
                >
                  <span className="lg:text-xl text-sm leading-5 lg:w-fit">{`[${item.time} INFO]:`}</span>

                  <span className="mx-1 text-black text-xs lg:text-lg leading-5  lg:w-fit">{`<${
                    item.user || "system"
                  }>`}</span>

                  <span
                    className={`text-xs lg:text-lg leading-5 text-black lg:w-fit ${
                      index == 0 && "text-green-500"
                    } ${index == 1 && "text-amber-500"} ${
                      index == 2 && "text-red"
                    } `}
                  >
                    {item.action}
                  </span>
                </h3>
              ))}
          </div>

          <div className="grid grid-flow-row grid-cols-3 lg:gap-4 gap-2 justify-center items-center lg:w-10/12 mx-auto">
            <button
              onClick={() => controlLogs("start")}
              disabled={!selectedAccount.username.length || isPlaying}
              className={`text-sm lg:text-xl font-bold p-2 lg:p-3 w-full text-black bg-green-500 hover:bg-green-600 rounded-xl ${
                selectedAccount.username.length > 0
                  ? "cursor-pointer"
                  : "cursor-not-allowed"
              }`}
            >
              {isPlaying ? "Running..." : "Start"}{" "}
            </button>
            <button
              onClick={() => controlLogs("restart")}
              disabled={!selectedAccount.username.length}
              className={`text-sm lg:text-xl font-bold p-2 lg:p-3 w-full text-black bg-slate-400 hover:bg-slate-500 rounded-xl ${
                selectedAccount.username.length > 0
                  ? "cursor-pointer"
                  : "cursor-not-allowed"
              }`}
            >
              Restart
            </button>
            <button
              onClick={() => controlLogs("stop")}
              disabled={!selectedAccount.username.length || !isPlaying}
              className={`text-sm lg:text-xl font-bold p-2 lg:p-3 w-full text-black bg-red hover:bg-rose-600 rounded-xl ${
                selectedAccount.username.length > 0
                  ? "cursor-pointer"
                  : "cursor-not-allowed"
              }`}
            >
              Stop
            </button>
          </div>
        </div>

        <div className="h-fit col-span-12 order-1 lg:order-2 lg:col-span-4 grid grid-flow-row grid-cols-2 gap-4 justify-center items-center">
          {igAccounts.map((item, index) => (
            <div
              onClick={() => setSelectedAccount(item)}
              key={index}
              className={`p-2 lg:p-4 rounded-3xl flex flex-col items-center cursor-pointer bg-white bg-gradient-to-b hover:from-white hover:to-slate-200 ${
                selectedAccount.username === item.username
                  ? "from-white  to-slate-200"
                  : ""
              }`}
            >
              <h3 className="text-sm lg:text-lg font-bold text-black">
                {item.username}
              </h3>
              <span className="text-3xl lg:text-6xl my-2 lg:my-4">
                {item.avatar}
              </span>
              <span className="text-sm lg:text-lg">
                {selectedAccount.username === item.username
                  ? "Selected"
                  : "Select"}
              </span>
            </div>
          ))}
          <Link
            href="/dashboard/connect"
            className="rounded-full h-16 w-16 lg:h-24 lg:w-24 bg-white lg:text-8xl text-4xl flex justify-center items-center text-center mx-auto cursor-pointer hover:bg-slate-200 transition-all"
          >
            +
          </Link>
        </div>
      </div>
      <div className="grid grid-flow-row grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5 lg:w-9/12">
        <div className="p-3 lg:p-6 rounded-3xl flex items-center lg:items-start flex-col bg-white">
          <FaRegClock className="text-2xl lg:text-5xl text-amber-400" />

          <p className="my-1 font-medium text-xs lg:text-lg">Uptime</p>
          <h3 className="font-bold text-black text-base lg:text-2xl">
            10d 22h 32m
          </h3>
        </div>
        <div className="p-3 lg:p-6 rounded-3xl flex items-center lg:items-start flex-col bg-white">
          <FaRegClock className="text-2xl lg:text-5xl text-red" />

          <p className="my-1 font-medium text-xs lg:text-lg">Downtime</p>
          <h3 className="font-bold text-black text-base lg:text-2xl">
            4d 1h 21m
          </h3>
        </div>
        <div className="p-3 lg:p-6 rounded-3xl flex items-center lg:items-start flex-col bg-white">
          <FaRegClock className="text-2xl lg:text-5xl text-slate-400" />

          <p className="my-1 font-medium text-xs lg:text-lg">Life Time</p>
          <h3 className="font-bold text-black text-base lg:text-2xl">
            159d 22h 32m
          </h3>
        </div>
      </div>
    </div>
  );
}
