"use client";
import React, { useState } from "react";
import { Camera } from "lucide-react";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: "",
    lastName: "",
    username: "",
    phoneNumber: "",
    email: "",
  });

  const [passwords, setPasswords] = useState({
    current: "",
    old: "",
    new: "",
  });

  const handleProfileChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handlePasswordChange = (e: any) => {
    const { name, value } = e.target;
    setPasswords((prevPasswords) => ({
      ...prevPasswords,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Profile:", profile);
    console.log("Passwords:", passwords);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-2 flex flex-col items-center lg:items-start">
      <div className="relative w-full sm:w-[90%] md:w-[80%] lg:w-[80%] py-8 bg-white shadow-lg sm:rounded-2xl sm:p-10 md:p-20 p-[5%]">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-xl md:text-2xl font-bold mb-2">My Profile</h1>
            <p className="text-gray-600">09/23/24 {">"} Running</p>
          </div>
          <button
            className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gray-700 rounded-full hover:bg-gray-800 transition-colors"
            onClick={() => console.log("Upload image")}
          >
            <Camera size={20} className="md:text-2xl text-white" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6 w-full">
          {/* Profile Information Section */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-4">
              Profile Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Left Column */}
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <label
                    htmlFor="name"
                    className="text-black font-medium md:w-[120px]"
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={profile.name}
                    onChange={handleProfileChange}
                    className="border p-2 rounded w-full"
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <label
                    htmlFor="lastName"
                    className="text-black font-medium md:w-[120px]"
                  >
                    Last Name:
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    value={profile.lastName}
                    onChange={handleProfileChange}
                    className="border p-2 rounded w-full"
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <label
                    htmlFor="phoneNumber"
                    className="text-black font-medium md:w-[120px]"
                  >
                    Phone Number:
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={profile.phoneNumber}
                    onChange={handleProfileChange}
                    className="border p-2 rounded w-full"
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <label
                    htmlFor="email"
                    className="text-black font-medium md:w-[120px]"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={profile.email}
                    onChange={handleProfileChange}
                    className="border p-2 rounded w-full"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div className="flex flex-col lg:items-center md:flex-row gap-4">
                  <label
                    htmlFor="username"
                    className="text-black font-medium "
                  >
                    Username:
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    value={profile.username}
                    onChange={handleProfileChange}
                    className="border p-2 rounded w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Password Change Section */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-4">
              Change Password
            </h2>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <label
                  htmlFor="current"
                  className="text-black font-medium "
                >
                  Current:
                </label>
                <input
                  type="password"
                  id="current"
                  name="current"
                  placeholder="Current Password"
                  value={passwords.current}
                  onChange={handlePasswordChange}
                  className="border p-2 rounded w-full"
                />
              </div>
              <div className="grid grid-cols-1  lg:ml-6 md:grid-cols-2 gap-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <label
                    htmlFor="old"
                    className="text-black font-medium "
                  >
                    Old:
                  </label>
                  <input
                    type="password"
                    id="old"
                    name="old"
                    placeholder="Old Password"
                    value={passwords.old}
                    onChange={handlePasswordChange}
                    className="border p-2 rounded w-full"
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <label
                    htmlFor="new"
                    className="text-black font-medium"
                  >
                    New:
                  </label>
                  <input
                    type="password"
                    id="new"
                    name="new"
                    placeholder="New Password"
                    value={passwords.new}
                    onChange={handlePasswordChange}
                    className="border p-2 rounded w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full md:w-auto"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
