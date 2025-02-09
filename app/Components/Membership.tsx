
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
      <p className="text-lg mb-4">Solgates Membership</p>

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
      <div className="flex justify-between items-center w-full mt-8">
        <p className="text-lg">Shop by Gender</p>
        <div className="flex gap-4 lg:hidden">
          <button
            onClick={prevSlide}
            className="text-orange-500 p-2 rounded-full bg-gray-100 shadow-md"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="text-orange-500 p-2 rounded-full bg-gray-100 shadow-md"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Images Display */}
      <div className="relative w-full overflow-hidden mt-4">
        <div className="flex gap-4 transition-transform duration-300 ease-in-out">
          {getDisplayedImages().map((image, idx) => (
            <div key={idx} className="flex flex-col items-center w-full sm:w-1/2">
              <Image
                src={image.src}
                alt={image.alt}
                width={300}
                height={350}
                className="rounded-lg object-cover w-full max-w-xs sm:max-w-sm"
              />
              <p className="text-xs font-medium mt-2">{image.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons for larger screens */}
      <div className="hidden lg:flex justify-center gap-6 mt-4">
        <button
          onClick={prevSlide}
          className="text-orange-500 p-2 rounded-full bg-gray-100 shadow-md"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="text-orange-500 p-2 rounded-full bg-gray-100 shadow-md"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ShopByGender;



