import { WishlistProvider } from "./context/WishlistContext";
import { CartProvider } from "./context/CartContext";
import Navbar from "../app/Components/Navbar";
import "./globals.css";
import Footer from '../app/Components/Footer'
import LoadingBar from "../app/Components/LoadingBar";
import { SearchProvider } from "./context/SearchContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        
        <SearchProvider >
        <CartProvider>
          <WishlistProvider> {/* ✅ Wrap entire app */}
            
            <main className="space-x-4 w-full max-w-screen-lg mx-auto ">
            <Navbar />
            <LoadingBar/>
              {children}
              <Footer/>
              </main>
            
          </WishlistProvider>
        </CartProvider>
        </SearchProvider>
      
      </body>
    </html>
  );
}
