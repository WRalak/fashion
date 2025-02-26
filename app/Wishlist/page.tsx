

"use client";

import { useWishlist } from "../context/WishlistContext";
import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center">
      {/* Hero Image */}
      <div className="relative w-full flex items-center justify-center">
        <Image
          src="/punk.jpg"
          alt="Hero"
          width={885}
          height={210}
          className="w-full max-w-[885px] h-[210px] object-cover rounded-lg mx-auto"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-3xl font-bold text-white">Your Wishlist</h2>
        </div>
      </div>

      {/* Wishlist Items */}
      <div className="container mx-auto p-5 mt-10 flex flex-col items-center">
        {wishlist.length === 0 ? (
          <p className="text-center text-lg">Your wishlist is empty.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
            {wishlist.map((product) => (
              <div key={product.id} className="flex flex-col items-center p-4">
                {/* Product Image */}
                <div className="relative h-60 w-60 flex justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                  {/* Remove Icon Positioned on Image */}
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="absolute top-2 right-2 p-2"
                  >
                    <AiFillHeart className="text-red-500 text-xs" />
                  </button>
                </div>

                {/* Product Details - Centered */}
                <div className="text-center mt-3">
                  <h2 className="text-sm font-bold">{product.name}</h2>
                  <p className="text-gray-600">KES {product.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
