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

      {/* Shop by Gender Title */}
      <div className="flex justify-between items-center w-full mt-8">
        <p className="text-lg">Shop by Gender</p>
      </div>

      {/* Images Display */}
      <div className="relative w-full flex gap-6 mt-4">
        {getDisplayedImages().map((image, idx) => (
          <div key={idx} className="relative flex flex-col items-center w-full sm:w-1/2">
            <Image
              src={image.src}
              alt={image.alt}
              width={435}
              height={400}
              className="rounded-lg object-cover w-full max-w-xs sm:max-w-sm"
            />
            <p className="text-xs font-medium mt-2">{image.label}</p>

            {/* Navigation buttons positioned at the top-right of the right image */}
            {idx === 1 && (
              <div className="absolute top-0 right-0 transform -translate-y-full  flex gap-2">
                <button onClick={prevSlide} className="text-orange-500 text-xs ">
                  <FaChevronLeft />
                </button>
                <button onClick={nextSlide} className="text-orange-500 text-xs">
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




