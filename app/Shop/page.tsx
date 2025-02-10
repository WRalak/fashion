"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

type Shop = {
  id: string;
  name: string;
  products: Product[];
};

const ShopPage = () => {
  const { id } = useParams(); // ✅ Correct way to get shop ID
  const [shop, setShop] = useState<Shop | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchShop = async () => {
      try {
        const res = await fetch(`/api/shop/${id}`);
        if (!res.ok) throw new Error("Failed to fetch shop");
        const data = await res.json();
        setShop(data);
      } catch (error) {
        console.error("Error fetching shop:", error);
      }
    };

    fetchShop();
  }, [id]);

  if (!shop) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-7xl mx-auto py-10">
      <h1 className="text-2xl font-bold">{shop.name}</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
        {shop.products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;

