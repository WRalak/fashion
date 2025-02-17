

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // To check active link
import {
  FiMenu,
  FiX,
  FiBox,
  FiShoppingCart,
  FiTag,
  FiUsers,
  FiHome,
  FiCreditCard,
  FiTruck,
  FiDollarSign,
  FiSettings,
} from "react-icons/fi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current page path

  const menuItems = [
    { name: "Dashboard", path: "/Dashboard", icon: <FiBox /> },
    { name: "Products", path: "/Products", icon: <FiBox /> },
    { name: "Orders", path: "/Orders", icon: <FiShoppingCart /> },
    { name: "Bids", path: "/Bids", icon: <FiTag /> },
    { name: "Customers", path: "/Customers", icon: <FiUsers /> },
    { name: "Shops", path: "/Shops", icon: <FiHome /> },
    { name: "Loans", path: "/Loans", icon: <FiCreditCard /> },
    { name: "Pick Up Requests", path: "/Pick-Up", icon: <FiTruck /> },
    { name: "Mpesa Transactions", path: "/Mpesa", icon: <FiDollarSign /> },
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
        
        <nav className="space-y-2 h-[100vh] ">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`flex items-center text-xs gap-8  rounded transition ${
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


