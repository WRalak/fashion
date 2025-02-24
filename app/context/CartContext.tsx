'use client';

import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define CartItem type
interface CartItem {
  imageUrl: string | StaticImport;
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  quantity: number;
}

// Define context value type
interface CartContextType {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
}

// Create context with default value
const CartContext = createContext<CartContextType | undefined>(undefined);

// Define provider props
interface CartProviderProps {
  children: ReactNode;
}

// Cart Provider Component
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: CartItem) => {
    setCart((prev) => {
      // Check if the product is already in the cart
      const existingProduct = prev.find((item) => item.id === product.id);
      
      if (existingProduct) {
        return prev; // If product exists, return the same cart (prevent duplicate)
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((product) => product.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    setCart((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, quantity } : product
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the Cart Context
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};




