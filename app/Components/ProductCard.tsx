'use client'

import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import Image from "next/image";
import { useCallback } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  const handleAddToCart = useCallback(() => addToCart(product), [product, addToCart]);
  const handleAddToWishlist = useCallback(() => addToWishlist(product), [product, addToWishlist]);

  return (
    <div className="border p-4 rounded-md shadow-md hover:shadow-lg transition">
      <Image 
        src={product.image} 
        alt={product.name} 
        width={200} 
        height={200} 
        className="w-full h-48 object-cover rounded-md"
        priority
      />
      <h2 className="text-lg font-bold mt-2">{product.name}</h2>
      <p className="text-gray-500">${product.price.toFixed(2)}</p>

      <div className="flex justify-between mt-2">
        <button onClick={handleAddToWishlist} className="text-red-500 hover:text-red-600 transition" aria-label="Add to Wishlist">
          <FiHeart className="text-xl" />
        </button>
        <button onClick={handleAddToCart} className="text-blue-500 hover:text-blue-600 transition" aria-label="Add to Cart">
          <FiShoppingCart className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

