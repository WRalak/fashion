'use client';
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import Image from 'next/image';
import { CiHeart } from "react-icons/ci";
import { useRouter } from 'next/navigation';
import {  FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Define Product type
type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
};

// Sample Products
const products: Product[] = [
  { id: 1, name: 'Product 1', price: 1000, image: '/mumbi.jpg', description: 'Description of Product 1' },
  { id: 2, name: 'Product 2', price: 2000, image: '/Rectangle 42.jpg', description: 'Description of Product 2' },
  { id: 3, name: 'Product 3', price: 1500, image: '/Rectangle 56.png', description: 'Description of Product 3' },
  { id: 4, name: 'Product 4', price: 2500, image: '/Rectangle 300.jpg', description: 'Description of Product 4' },
  { id: 5, name: 'Product 5', price: 1200, image: '/Rectangle 303.jpg', description: 'Description of Product 5' },
  { id: 6, name: 'Product 6', price: 2220, image: '/eyes.webp', description: 'Description of Product 6' },
  { id: 7, name: 'Product 7', price: 1890, image: '/eyes1.webp', description: 'Description of Product 7' },
  { id: 8, name: 'Product 8', price: 3030, image: '/eyes2.webp', description: 'Description of Product 8' },
];

const MostPopular = () => {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex + 4 < products.length) {
      setCurrentIndex(currentIndex + 4);
    }
  };

  const handlePrev = () => {
    if (currentIndex - 4 >= 0) {
      setCurrentIndex(currentIndex - 4);
    }
  };

  const displayedProducts = products.slice(currentIndex, currentIndex + 4);

  const handleImageClick = (product: Product) => {
    addToCart(product);
    router.push('/cart');
  };

  return (
    <div className="my-6 px-6">
      {/* Header with Navigation */}
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-lg">Popular Right Now</h4>
        <div className="flex space-x-2">
          <button
            onClick={handlePrev}
            className="p-2 text-xs"
          >
            <FaChevronLeft size={10} className='text-orange-500'/>
          </button>
          <button
            onClick={handleNext}
            className="p-2 text-xs  "
          >
            <FaChevronRight size={10} className='text-orange-500' />
          </button>
        </div>
      </div>

      {/* Product List - Responsive Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayedProducts.map((product) => (
          <div key={product.id} className="relative">
            {/* Wishlist Button */}
            <button
              onClick={() => addToWishlist(product)}
              className="absolute top-2 right-2 text-gray-700 "
            >
              <CiHeart size={16} className="text-black" />
            </button>

            {/* Product Image */}
            <Image
              src={product.image}
              alt={product.name}
              height={200}
              width={200}
              className="w-full h-48 object-cover cursor-pointer rounded-lg"
              onClick={() => handleImageClick(product)}
            />

            {/* Product Info */}
            <div className="p-2">
              <h5 className="text-xs">{product.name}</h5>
              <p className="text-xs text-blue-700">KES {product.price}</p>
              <p className="text-xs text-gray-600 mt-1">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostPopular;



















