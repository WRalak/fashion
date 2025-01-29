import React from 'react';
import Image from 'next/image';
import Membership from './Components/Membership';

const Home = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto p-4">
      <div className="relative w-full h-40 sm:h-52 md:h-64 lg:h-72 mt-10">
        <Image
          src="/hero.jpeg" // Replace with your actual image path
          alt="Home Banner"
          layout="fill" // Ensures the image fills its parent container
          objectFit="cover" // Crops the image if needed to fit the height
          className="rounded-lg"
        />
      </div>
      <Membership/>
    </div>
  );
};

export default Home;
