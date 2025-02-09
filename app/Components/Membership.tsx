"use client";

import { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ShopByGender = () => {
  const images = [
    { src: "/shop men.png", alt: "Shop Male", label: "Shop Male" },
    { src: "/shop female.webp", alt: "Shop Female", label: "Shop Female" },
    { src: "/shopkids.webp", alt: "Shop Kids", label: "Shop Kids" },
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex - 1 + images.length) % images.length);
  };

  const getDisplayedImages = () => {
    if (images.length < 2) return images;
    return [images[index], images[(index + 1) % images.length]];
  };

  return (
    <div className="max-w-screen-lg mx-auto mt-10 p-4 flex flex-col items-start">
      {/* Membership Title */}
      <p className="text-lg  mb-4">Solgates Membership</p>

      {/* Membership Image */}
      <div className="w-full">
        <Image
          src="/Group 521.jpg"
          alt="Membership"
          width={885}
          height={210}
          className="rounded-lg object-cover"
        />
      </div>

      {/* Shop by Gender Title & Navigation Icons */}
      <div className="flex justify-between items-center w-full max-w-md ml-10 mt-12 ">
        <p className="text-lg mb-4 ">Shop by Gender</p>
        <div className="flex gap-4 lg:hidden">
          <button onClick={prevSlide} className="text-orange-500 p-1 text-xs rounded-full bg-gray-100">
            <FaChevronLeft />
          </button>
          <button onClick={nextSlide} className="text-orange-500 p-1 text-xs rounded-full bg-gray-100">
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Images Display */}
      <div className="relative flex gap-6 justify-start">
        {getDisplayedImages().map((image, idx) => (
          <div key={idx} className="flex flex-col items-start relative">
            <Image
              src={image.src}
              alt={image.alt}
              width={435}
              height={400}
              className="rounded-lg object-cover"
            />
            <p className="text-xs font-medium mt-2">{image.label}</p>

            {/* Show navigation icons on the last image only on large screens */}
            {idx === 1 && (
              <div className="hidden lg:flex absolute top-[-38] right-4 gap-4">
                <button onClick={prevSlide} className="text-orange-500 p-1 text-xs rounded-full bg-gray-100">
                  <FaChevronLeft />
                </button>
                <button onClick={nextSlide} className="text-orange-500 p-1 text-xs rounded-full bg-gray-100">
                  <FaChevronRight />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByGender;

