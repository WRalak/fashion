"use client";

import { useState } from "react";
import { FaTimes, FaStore, FaMapMarkerAlt } from "react-icons/fa";
import { RiTShirtLine } from "react-icons/ri";

const BecomeASeller = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg relative">
        {/* Close Icon */}
        <button
          className="absolute top-4 right-4 text-gray-500"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes size={13} />
        </button>

        {/* Title */}
        <p className="text-sm font-semibold mb-2">Become A Seller</p>
        <hr className="mb-4" />

        {/* Subtitle */}
        <p className="text-sm font-semibold mb-2">Becoming A Seller: Join the Waiting List</p>
        <p className="text-xs text-gray-600 mb-4">
          To sell on Solgates, add your store details and the items you wish to sell, and we will pick them from you. You can also deliver your items to us.
        </p>

        {/* Store Name Input */}
        <div
          className={`flex items-center border p-2 rounded mb-3 transition-all ${
            isFocused ? "border-orange-500" : "border-gray-300"
          }`}
        >
          <FaStore className="text-blue-500 mr-2" />
          <input
            type="text"
            placeholder="Enter the name of your store"
            className="w-full outline-none text-xs"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>

        {/* Physical Location Input */}
        <div className="flex items-center border border-gray-300 p-2 rounded mb-3 focus-within:border-orange-500">
          <FaMapMarkerAlt className="text-green-500 mr-2" />
          <input
            type="text"
            placeholder="Add your Physical location"
            className="w-full outline-none text-xs"
          />
        </div>

        {/* Category Selection */}
        <div className="flex items-center border border-gray-300 p-2 rounded mb-3 focus-within:border-orange-500">
          <RiTShirtLine className="text-blue-600 mr-2" />
          <select className="w-full outline-none text-xs cursor-pointer">
            <option>Select the category of products you sell</option>
            <option className="hover:bg-orange-100">Shoes</option>
            <option className="hover:bg-orange-100">Accessories</option>
            <option className="hover:bg-orange-100">Home & Living</option>
          </select>
        </div>

        {/* Terms & Conditions Checkbox */}
        <div className="flex items-center mb-4">
        <input type="checkbox" className="mr-2 accent-orange-500 text-white" />

          <p className="text-xs text-gray-600">
            By creating a shop, you agree to the <span className="text-gray-700 font-semibold cursor-pointer">Terms & Conditions</span>
          </p>
        </div>

        {/* Create Shop Button */}
        <button className="w-full bg-orange-600 text-xs text-white py-3 rounded">
          Create Shop
        </button>
      </div>
    </div>
  );
};

export default BecomeASeller;
