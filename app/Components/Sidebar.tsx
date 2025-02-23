

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoHome } from "react-icons/go";
import { LuShirt } from "react-icons/lu";
import { GrGroup } from "react-icons/gr";
import { VscArrowSwap } from "react-icons/vsc";
import { PiShirtFoldedLight, PiHandCoins } from "react-icons/pi";
 // To check active link
import {
  FiMenu,
  FiX,
 
  FiSettings,
} from "react-icons/fi";
import { RiArchiveLine, RiStore2Line } from "react-icons/ri";
import { CiFlag1 } from "react-icons/ci";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current page path

  const menuItems = [
    { name: "Dashboard", path: "/Dashboard", icon: <GoHome /> },
    { name: "Products", path: "/Products", icon: <LuShirt  /> },
    { name: "Orders", path: "/Orders", icon: <RiArchiveLine /> },
    { name: "Bids", path: "/Bids", icon: <CiFlag1 /> },
    { name: "Customers", path: "/Customers", icon: <GrGroup /> },
    { name: "Shop", path: "/Shop", icon: <RiStore2Line /> },
    { name: "Loans", path: "/Loans", icon: <PiHandCoins /> },
    { name: "Pick Up Requests", path: "/Pick-Up", icon: <PiShirtFoldedLight /> },
    { name: "Mpesa Transactions", path: "/Mpesa", icon: <VscArrowSwap /> },
    { name: "Settings", path: "/Settings", icon: <FiSettings /> },
  ];

  return (
    <div className="flex">
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden fixed top-4 left-4 text-gray-900 bg-white p-2 rounded shadow-md z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white text-gray-900 p-5 w-64 shadow-md transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out z-40 md:relative`}
      >
        
        <nav className="space-y-2 h-[100vh] pl-10 ">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`flex items-center text-sm text-gray-700 gap-8  rounded transition ${
                pathname === item.path ? "text-orange-500 " : ""
              }`}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;


