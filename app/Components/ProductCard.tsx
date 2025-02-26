


"use client";

import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import Image from "next/image";

interface Product {
  id: number;  // Updated to match expected type
  name: string;
  price: number;
  image: string;
  description: string;
  quantity?: number; // Optional for Wishlist
}

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  const handleAddToCart = () => addToCart({
    ...product, quantity: 1,
    imageUrl: ""
  });
  const handleAddToWishlist = () => addToWishlist(product);

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
      <p className="text-sm text-gray-600">{product.description}</p>

      <div className="flex justify-between mt-2">
        <button 
          onClick={handleAddToWishlist} 
          className="text-red-500 hover:text-red-600 transition" 
          aria-label="Add to Wishlist"
        >
          <FiHeart className="text-xl" />
        </button>
        <button 
          onClick={handleAddToCart} 
          className="text-blue-500 hover:text-blue-600 transition" 
          aria-label="Add to Cart"
        >
          <FiShoppingCart className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;






