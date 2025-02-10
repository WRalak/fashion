'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

interface ShopOwner {
  id: string;
  name: string;
  image: string;
}

const Home = () => {
  const [shopOwners, setShopOwners] = useState<ShopOwner[]>([]);

  useEffect(() => {
    fetch("/api/shopOwners")
      .then((res) => res.json())
      .then((data: ShopOwner[]) => setShopOwners(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Who&apos;s Your Plug?</h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {shopOwners.map((owner) => (
          <Link 
            key={owner.id} 
            href={`/shop/${owner.id}`} 
            className="border rounded-lg p-4 shadow-md text-center hover:shadow-lg transition"
            aria-label={`View ${owner.name}'s shop`}
          >
            <Image 
              src={owner.image} 
              alt={`${owner.name}'s profile`} 
              width={128} 
              height={128} 
              className="w-32 h-32 mx-auto rounded-full object-cover"
              loading="lazy"
            />
            <h2 className="mt-2 font-bold text-lg">{owner.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;

