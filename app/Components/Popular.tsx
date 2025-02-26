

'use client';
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import Image from 'next/image';
import { CiHeart } from "react-icons/ci";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Define Product type
type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
};

// Define CartItem type
type CartItem = Product & { quantity: number };

// Sample Products
const products: Product[] = [
  { id: 1, name: 'Product 1', price: 1000, image: '/mumbi.jpg', description: 'Mumbi' },
  { id: 2, name: 'Product 2', price: 2000, image: '/shoe.png', description: 'Solgates' },
  { id: 3, name: 'Product 3', price: 1500, image: '/Rectangle 56.png', description: 'One Stop Shop' },
  { id: 4, name: 'Product 4', price: 2500, image: '/Rectangle 300.jpg', description: 'Chillums' },
  { id: 5, name: 'Product 5', price: 1200, image: '/Rectangle 303.jpg', description: 'Vs Code' },
  { id: 6, name: 'Product 6', price: 2220, image: '/eyes.webp', description: 'S|Sunny' },
  { id: 7, name: 'Product 7', price: 1890, image: '/eyes1.webp', description: 'S|Sunny' },
  { id: 8, name: 'Product 8', price: 3030, image: '/eyes2.webp', description: 'S|Sunny' },
];

const MostPopular = () => {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 4, products.length - 4));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 4, 0));
  };

  const displayedProducts = products.slice(currentIndex, currentIndex + 4);

  const handleAddToCart = (product: Product, event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent unintended behaviors
    const cartItem: CartItem = { ...product, quantity: 1 };
    addToCart(cartItem);
  };

  return (
    <div className="my-6 px-4 max-w-[885px] mx-auto">
      {/* Header with Navigation */}
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-lg">Popular Right Now</h4>
        <div className="flex space-x-1 max-w-[985px]">
          <button onClick={handlePrev} className="p-1 disabled:opacity-50" disabled={currentIndex === 0}>
            <FaChevronLeft size={12} className="text-orange-500" />
          </button>
          <button onClick={handleNext} className="p-1 disabled:opacity-50" disabled={currentIndex >= products.length - 4}>
            <FaChevronRight size={12} className="text-orange-500" />
          </button>
        </div>
      </div>

      {/* Product List - Responsive Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {displayedProducts.map((product) => (
          <div key={product.id} className="relative">
            {/* Wishlist Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                addToWishlist(product);
              }}
              className="absolute top-2 right-2 text-gray-700"
            >
              <CiHeart size={16} className="text-black" />
            </button>

            {/* Product Image */}
            <Image
              src={product.image}
              alt={product.name}
              className="w-full aspect-[3/4] object-cover cursor-pointer rounded"
              width={885} 
              height={700}
              onClick={(e) => handleAddToCart(product, e)}
            />

            {/* Product Info */}
            <div className="p-2">
              <h5 className="text-xs">{product.name}</h5>
              <p className="text-xs text-blue-600 mt-1">{product.description}</p>
              <p className="text-xs font-semibold mt-2 text-gray-950">KES {product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostPopular;




