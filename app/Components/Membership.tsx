"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ShopByGender = () => {
  const images = [
    { src: "/shop men.png", alt: "Shop Male", label: "Shop Male" },
    { src: "/shop female.webp", alt: "Shop Female", label: "Shop Female" },
    { src: "/shopkids.webp", alt: "Shop Kids", label: "Shop Kids" },
  ];

  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getDisplayedImages = () => {
    return isMobile ? [images[index]] : [images[index], images[(index + 1) % images.length]];
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
          className="rounded-sm object-cover w-full"
        />
      </div>

      {/* Shop by Gender Title + Navigation Icons */}
      <div className="flex justify-between items-center w-full mt-8">
        <p className="text-lg">Shop by Gender</p>
        <div className="flex gap-4">
          <button onClick={prevSlide} className="text-orange-500 text-xs">
            <FaChevronLeft />
          </button>
          <button onClick={nextSlide} className="text-orange-500 text-xs">
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Images Display - Flex Layout */}
      <div className="relative w-full flex flex-row gap-6 mt-4">
        {getDisplayedImages().map((image, idx) => (
          <div key={idx} className="relative flex flex-col items-center flex-1">
            <Image
              src={image.src}
              alt={image.alt}
              width={435}
              height={400}
              className="rounded-lg object-cover w-full h-[400px]"
            />
            <p className="text-xs font-medium mt-2">{image.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByGender;
