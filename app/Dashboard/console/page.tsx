// pages/index.js
import { FaCircleUser, FaRegClock } from "react-icons/fa6";

export default function Home() {
  const users = [
    { name: "goerge_neuta", avatar: <FaCircleUser /> },
    { name: "goerge_neuta", avatar: <FaCircleUser /> },
    { name: "goerge_neuta", avatar: <FaCircleUser /> },
  ];

  const logs = [
    {
      time: new Date().toLocaleDateString(),
      user: "username",
      action: "started astralemon",
    },
    {
      time: new Date().toLocaleDateString(),
      user: "username",
      action: "restarted astralemon",
    },
    {
      time: new Date().toLocaleDateString(),
      user: "username",
      action: "stopped astralemon",
    },
    {
      time: new Date().toLocaleDateString(),
      user: "",
      action: "fetching.... 0934:23872:uuid/>#4421",
    },
    {
      time: new Date().toLocaleDateString(),
      user: "",
      action: "matching profile... 2397:32821:uuid/>#3952",
    },
    {
      time: new Date().toLocaleDateString(),
      user: "",
      action: "fetched due users...(89324 found)",
    },
    {
      time: new Date().toLocaleDateString(),
      user: "",
      action: "connection secured.",
    },
    {
      time: new Date().toLocaleDateString(),
      user: "",
      action: "registering session handler",
    },
    {
      time: new Date().toLocaleDateString(),
      user: "",
      action: "fetched due users... (89324 found)",
    },
    {
      time: new Date().toLocaleDateString(),
      user: "",
      action: "fetched all due users...",
    },
    {
      time: new Date().toLocaleDateString(),
      user: "",
      action: "matching profile... 2857:79631:uuid/>#7852",
    },
    {
      time: new Date().toLocaleDateString(),
      user: "",
      action: "fetching.... 00954:24672:uuid/>#47921",
    },
    {
      time: new Date().toLocaleDateString(),
      user: "",
      action: "loaded yml database",
    },
    {
      time: new Date().toLocaleDateString(),
      user: "",
      action: "fetching.... 547457:78472:uuid/>#78921",
    },
    {
      time: new Date().toLocaleDateString(),
      user: "",
      action: "server users_> monitoring... instances/>#2642:324",
    },
    {
      time: new Date().toLocaleDateString(),
      user: "",
      action: "loading region data...",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Console</h1>
        <p className="text-base">09/23/24 &gt; Running</p>
      </div>

      <div className="grid grid-flow-row grid-cols-12 gap-5 mb-6">
        <div className="col-span-8">
          <h3 className="mb-4 bg-white rounded-lg font-bold p-4 text-xl">
            Instagram account
            <span className="text-black ms-2">{"<"} username &gt;</span>
          </h3>
          {/* Console Logs */}
          <div className="rounded-lg bg-white p-4 w-full mb-4">
            {logs.map((item, index) => (
              <div key={index} className="flex items-center my-0">
                <span className="text-xl leading-5">{`[${item.time} INFO]:`}</span>
                {item.user ? (
                  <span className="mx-1 text-black text-lg leading-5">{`<${item.user}>`}</span>
                ) : (
                  <span className="mr-1"> </span>
                )}
                <span
                  className={`text-lg leading-5 text-black ${
                    index == 0 && "text-green-500"
                  } ${index == 1 && "text-amber-500"} ${
                    index == 2 && "text-red"
                  } `}
                >
                  {item.action}
                </span>
              </div>
            ))}
          </div>

          <div className="grid grid-flow-row grid-cols-3 gap-4 justify-center items-center w-10/12 mx-auto">
            <button className="text-xl font-bold p-3 w-full text-black bg-green-500 hover:bg-green-600 rounded-xl">
              Start
            </button>
            <button className="text-xl font-bold p-3 w-full text-black bg-slate-400 hover:bg-slate-500 rounded-xl">
              Restart
            </button>
            <button className="text-xl font-bold p-3 w-full text-black bg-red hover:bg-rose-600 rounded-xl">
              Stop
            </button>
          </div>
        </div>

        <div className="h-fit col-span-4 grid grid-flow-row grid-cols-2 gap-4 justify-center items-center">
          {users.map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-3xl flex flex-col items-center cursor-pointer bg-white bg-gradient-to-b hover:from-white hover:to-slate-200"
            >
              <h3 className="text-lg font-bold text-black">{item.name}</h3>
              <span className="text-6xl my-4">{item.avatar}</span>
              <span>Select</span>
            </div>
          ))}
          <div className="rounded-full h-24 w-24 bg-white text-8xl flex justify-center items-center text-center mx-auto cursor-pointer hover:bg-slate-200 transition-all">
            +
          </div>
        </div>
      </div>
      <div className="grid grid-flow-row grid-cols-3 gap-5 w-9/12">
        <div className="p-6 rounded-3xl flex flex-col bg-white">
          <FaRegClock className="text-5xl text-amber-400" />

          <p className="my-1 font-medium text-lg">Uptime</p>
          <h3 className="font-bold text-black text-2xl">10d 22h 32m</h3>
        </div>
        <div className="p-6 rounded-3xl flex flex-col bg-white">
          <FaRegClock className="text-5xl text-red" />

          <p className="my-1 font-medium text-lg">Downtime</p>
          <h3 className="font-bold text-black text-2xl">4d 1h 21m</h3>
        </div>
        <div className="p-6 rounded-3xl flex flex-col bg-white">
          <FaRegClock className="text-5xl text-slate-400" />

          <p className="my-1 font-medium text-lg">Life Time</p>
          <h3 className="font-bold text-black text-2xl">159d 22h 32m</h3>
        </div>
      </div>
    </div>
  );
}
