


"use client";

import { LuUserRound } from "react-icons/lu";
import { RiLogoutCircleLine } from "react-icons/ri";

const UserProfile = () => {
  const user = {
    name: "WALLACE RALAK",
    email: "wallaceralak@gmail.com",
    phone: "+254718600199",
  };

  const handleLogout = () => {
    console.log("User logged out");
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Heading */}
      <p className="text-lg font-semibold  ">01</p>
      <h2 className="text-lg font-semibold  mb-2">Personal Details</h2>

      {/* User Details Box with Border */}
      <div className="border border-gray-300 rounded-lg p-4 flex justify-between items-center">
        {/* Left: User Icon & Details */}
        <div className="flex items-center space-x-3">
          <LuUserRound className="text-sm text-gray-600" />
          <div>
            <p className="text-xs font-semibold">
              {user.name} <span className="text-gray-500 text-xs">({user.email})</span>
            </p>
            <p className="text-xs text-gray-600">{user.phone}</p>
          </div>
        </div>

        {/* Right: Logout */}
        <button 
          onClick={handleLogout} 
          className="flex items-center space-x-2 text-red-600 text-sm"
        >
          <RiLogoutCircleLine className="text-xs" />
          <span className="font-light text-xs">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default UserProfile;







