"use client";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

const ShopSection: React.FC = () => {
  const genderImages = ["/pixels.png", "/Rectangle 42.jpg", "/Rectangle 142384.jpg"];

  const categoryImages = [
    { src: "/Rectangle 54.png", label: "Shoes" },
    { src: "/Rectangle 303.jpg", label: "Jackets" },
    { src: "/Rectangle 56.png", label: "Accessories" },
    { src: "/Rectangle 300.jpg", label: "Tops" },
    { src: "/pixels.png", label: "Bags" },e
    { src: "/Rectangle 300.jpg", label: "Watches" },
  ];

  const [genderIndex, setGenderIndex] = useState(0);
  const [categoryIndex, setCategoryIndex] = useState(0);

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Shop By Gender */}
      <div className="mb-8 relative">
        <div className="flex justify-between items-center mb-2">
          <p className="text-lg font-semibold">Shop By Gender</p>
          <div className="flex space-x-2">
            <button
              onClick={() => setGenderIndex((genderIndex - 1 + genderImages.length) % genderImages.length)}
              className="bg-orange-500 p-2 rounded-full text-white shadow-md"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() => setGenderIndex((genderIndex + 1) % genderImages.length)}
              className="bg-orange-500 p-2 rounded-full text-white shadow-md"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div className="relative flex justify-center gap-4 overflow-hidden">
          {genderImages.slice(genderIndex, genderIndex + 2).map((img, index) => (
            <div key={index} className="relative w-[435px] h-[400px]">
              <Image
                src={img}
                alt="gender"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Solgate Membership Banner */}
      <div className="mb-8">
        <Image
          src="/Group 521.jpg"
          alt="Solgate Membership"
          width={885}
          height={210}
          className="w-full rounded-lg"
        />
      </div>

      {/* Shop By Category */}
      <div className="relative">
        <div className="flex justify-between items-center mb-2">
          <p className="text-lg font-semibold">Shop By Category</p>
          <div className="flex space-x-2">
            <button
              onClick={() => setCategoryIndex((categoryIndex - 1 + categoryImages.length) % categoryImages.length)}
              className="text-orange-500 p-2 text-xs"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() => setCategoryIndex((categoryIndex + 1) % categoryImages.length)}
              className="text-orange-500 p-2 text-xs"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div className="relative flex justify-center gap-4 overflow-hidden">
          {categoryImages.slice(categoryIndex, categoryIndex + 4).map((item, index) => (
            <div key={index} className="text-center w-[210px]">
              <Image
                src={item.src}
                alt={item.label}
                width={210}
                height={210}
                className="rounded-lg object-cover"
              />
              <p className="text-sm mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopSection;


