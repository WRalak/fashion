"use client";

import { useWishlist } from "../context/WishlistContext";
import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-2xl font-bold text-center">Your Wishlist</h2>

      {wishlist.length === 0 ? (
        <p className="text-center mt-4">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300 relative"
            >
              {/* Wishlist Remove Icon */}
              <button
                onClick={() => removeFromWishlist(product.id)}
                className="absolute top-2 right-2 text-red-500 text-xl"
              >
                <AiFillHeart />
              </button>

              {/* Product Image */}
              <Image
                src={product.image}
                alt={product.name}
                height={200}
                width={200}
                className="w-full h-48 object-cover rounded-md"
              />

              {/* Product Details */}
              <h2 className="text-lg font-bold mt-2">{product.name}</h2>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;


