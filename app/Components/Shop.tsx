
'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

interface ShopOwner {
  id: string;
  name: string;
  image: string;
}

export default function Home() {
  const [shopOwners, setShopOwners] = useState<ShopOwner[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setShopOwners(data.shopOwners));
  }, []);

  return (
    <div className="max-w-screen-lg mx-auto  p-4 flex  items-start">
      <h1 className="text-lg  mb-4">Who&apos;s your plug?</h1>
      <div className="grid grid-cols-2 gap-4">
        {shopOwners.map((owner) => (
          <Link key={owner.id} href={`/shop/${owner.id}`} className="block">
            <div className="border p-4 rounded-lg shadow-lg text-center">
              <Image src={owner.image} alt={owner.name} className="w-24 h-24 mx-auto rounded-full mb-2" />
              <h2 className="text-lg font-semibold">{owner.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}












