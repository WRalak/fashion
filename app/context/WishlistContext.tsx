'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the type for a product in the wishlist
type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
};

// Define the type for the Wishlist context
interface WishlistContextType {
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: number) => void;
}

// Create the Wishlist context with a default value of undefined
export const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

// Wishlist Provider component
interface WishlistProviderProps {
  children: ReactNode;
}

export const WishlistProvider: React.FC<WishlistProviderProps> = ({ children }) => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  // Add product to wishlist
  const addToWishlist = (product: Product) => {
    setWishlist((prevWishlist) => [...prevWishlist, product]);
  };

  // Remove product from wishlist
  const removeFromWishlist = (productId: number) => {
    setWishlist((prevWishlist) => prevWishlist.filter((product) => product.id !== productId));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

// Custom hook for using Wishlist context
export const useWishlist = (): WishlistContextType => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};



