
'use client'


import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

export default function ShopPage() {
  const router = useRouter();
  const { id } = router.query;
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (id) {
      fetch(`/api/products?shopOwnerId=${id}`)
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }
  }, [id]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Shop Products</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-lg">
              <Image src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2" />
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-700">${product.price}</p>
            </div>
          ))
        ) : (
          <p>No products yet.</p>
        )}
      </div>
    </div>
  );
}

