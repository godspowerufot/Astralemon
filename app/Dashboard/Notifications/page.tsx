// pages/index.js

import Image from "next/image";

export default function Home() {
  const notifications = [
    {
      name: "User 1",
      message: "sent you a message",
      time: "a few moments ago",
      image: "/Avatar.png",
    },
    {
      name: "User 2",
      message: "liked your post",
      time: "5 minutes ago",
      image: "/Avatar.png",
    },
    {
      name: "User 3",
      message: "commented on your post",
      time: "10 minutes ago",
      image: "/Avatar.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-semibold mb-6">Notifications</h1>
      <div className="space-y-4">
        {notifications.map((notification, index) => (
          <div
            key={index}
            className="relative flex items-center p-4 bg-white rounded-lg shadow"
          >
            <div className="w-12 h-12 mr-4">
              <Image
                src={notification.image}
                alt={`${notification.name}'s profile picture`}
                width={48}
                height={48}
                className="rounded-full"
              />
            </div>
            <div className="flex-1">
              <p className="text-gray-700">
                <strong>{notification.name}</strong> {notification.message}
              </p>
              <span className="text-sm text-gray-500">{notification.time}</span>
            </div>
            <div className="absolute top-4 right-4">
              <Image
                alt="dots"
                src="/3dots.png"
                width={16}
                height={16}
                className="cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
