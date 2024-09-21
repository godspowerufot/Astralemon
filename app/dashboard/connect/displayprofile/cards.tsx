import React from "react";

const users = [
  {
    name: "Divine Samuel",
    username: "@divine",
    posts: 53,
    followers: 1363,
    following: 34,
  },
  {
    name: "Jane Doe",
    username: "@jane_doe",
    posts: 42,
    followers: 560,
    following: 22,
  },
  {
    name: "John Smith",
    username: "@john_smith",
    posts: 67,
    followers: 890,
    following: 45,
  },
  {
    name: "Emily Clark",
    username: "@emily_clark",
    posts: 34,
    followers: 1200,
    following: 18,
  },
];

const Card = () => {
  return (
    <div className="flex flex-col lg:flex-row  md:justify-center lg:flex-wrap  lg:w-full overflow-x-auto justify-start gap-8">
      {users.map((user, index) => (
        <div
          key={index}
          className="w-full sm:w-1/2 lg:w-[47%] flex justify-center flex-col  gap-5 bg-white p-10 rounded-lg"
        >
          <div className="flex relative flex-col items-center mb-4">
            <div className="w-5 h-5 absolute top-0 right-0 rounded-full bg-green-400"></div>
            <div className="w-30 h-30 rounded-full bg-slate-400 overflow-hidden"></div>
            <div>
              <h2 className="text-1.3em mt-2 font-bold">{user.name}</h2>
              <p className="text-1em text-center text-[#6B7280]">
                {user.username}
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-10 mt-2 text-sm mb-4">
            <div>
              <p className="font-bold">Posts</p>
              <p className="text-[#6B7280]">{user.posts}</p>
            </div>
            <div>
              <p className="font-bold">Followers</p>
              <p className="text-[#6B7280]">{user.followers}</p>
            </div>
            <div>
              <p className="font-bold text-gray-400">Following</p>
              <p className="text-[#6B7280]">{user.following}</p>
            </div>
          </div>
          <button className="bg-transparent border-solid text-blue-500 border-blue-500 border-[2px] px-4 py-2 rounded-full">
            connect
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card;
