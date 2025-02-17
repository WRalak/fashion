

// app/shop/[id]/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
}

export default function ShopPage({ params }: { params: { id: string } }) {
  const [products, setProducts] = useState<Product[]>([]);
  const searchParams = useSearchParams();
  const sort = searchParams.get("sort");
  const query = searchParams.get("search");

  useEffect(() => {
    fetch(`/api/shop/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        let filteredData = data;

        if (query) {
          filteredData = filteredData.filter((p: Product) =>
            p.name.toLowerCase().includes(query.toLowerCase())
          );
        }

        if (sort === "price_asc") {
          filteredData.sort((a: Product, b: Product) => a.price - b.price);
        } else if (sort === "price_desc") {
          filteredData.sort((a: Product, b: Product) => b.price - a.price);
        }

        setProducts(filteredData);
      });
  }, [params.id, sort, query]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Shop Products</h1>
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search products..."
          className="border p-2 rounded"
          onChange={(e) =>
            window.location.replace(`?search=${e.target.value}`)
          }
        />
        <select
          className="border p-2 rounded"
          onChange={(e) => window.location.replace(`?sort=${e.target.value}`)}
        >
          <option value="">Sort by</option>
          <option value="price_asc">Price (Low to High)</option>
          <option value="price_desc">Price (High to Low)</option>
        </select>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-lg">
            <Image src={product.image} alt={product.name} width={150} height={150} className="rounded-lg"/>
            <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-500">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
