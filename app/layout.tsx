'use client';

import { Inter } from 'next/font/google';
import { WishlistProvider } from "./context/WishlistContext";
import { CartProvider } from "./context/CartContext";
import Navbar from "../app/Components/Navbar";
import "./globals.css";
import Footer from '../app/Components/Footer';
import LoadingBar from "../app/Components/LoadingBar";
import { SearchProvider } from "./context/SearchContext";
import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "./context/AuthContext";

// Import Inter font
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} w-full`}>
      <head>
        <title>Solgates</title>
      </head>
      <body className="h-screen w-full flex flex-col font-inter">
        <AuthProvider>
          <SessionProvider>   
            <SearchProvider>
              <CartProvider>
                <WishlistProvider>
                  <main className="flex-1 w-full flex flex-col">
                    <Navbar />
                    <LoadingBar />
                    <div className="flex-1">{children}</div>
                    <Footer />
                  </main>
                </WishlistProvider>
              </CartProvider>
            </SearchProvider>
          </SessionProvider>
        </AuthProvider>
      </body>
    </html>
  );
}



