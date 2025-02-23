


'use client'

import { useContext, useState } from 'react';
import Image from 'next/image';
import { BiSearch } from "react-icons/bi";

import { IoMdHelpCircleOutline } from "react-icons/io";
import { BsTelephone } from "react-icons/bs";
import { AiTwotoneAlert } from "react-icons/ai"; 
import { RiMenu4Line } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { BsXLg } from "react-icons/bs";
import { RiStore2Fill } from "react-icons/ri";
import { CiUser } from "react-icons/ci";// or 'react-icons/hi2'
import Link from 'next/link';
import { WishlistContext } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

const Navbar = () => {



  

  const { wishlist = [] } = useContext(WishlistContext) || {};
  const { cart } = useCart();
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white space-x-4  w-full max-w-screen-lg mx-auto " >
      {/* Top Section */}
      <div className=' bg-slate-100 py-2   max-w-screen-lg mx-auto flex justify-end space-x-4 lg:mr-20' >
     <div className='items-center flex text-gray-500'> <BsTelephone  className='text-xs mr-2'/>

<p className='text-[10px] mr-'>+254718600199</p></div>
<span className='text-xs text-slate-400'>|</span>
        {/* Help Icon */}
        <div className="relative">
          <button
            onClick={() => setIsHelpOpen(!isHelpOpen)}
            className="flex items-center space-x-1"
          >
            <IoMdHelpCircleOutline className="h-3 w-3 text-gray-500" />
            <span className="text-[10px] text-gray-500">Help</span>
            <span className='text-xs text-slate-400'>|</span>
          </button>
          {isHelpOpen && (
            <div className="absolute right-0 mt-2 w-[380px] h-[400px] z-50  bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-sm">Help</h3>
                <button onClick={() => setIsHelpOpen(false)}>
                  <BsXLg className="h-3 w-3 text-black" />
                </button>
                
              </div>
              <hr  className='text-gray-400'/>
              <p className='text-xs text-gray-700 font-light mb-3 mt-2'>How can we be of help. Please drop us a message and we will get back to you as soon as possible</p>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 mb-2 border text-xs rounded focus:outline-none focus:ring-0.5 focus:ring-orange-500 focus:border-orange-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 mb-2 text-xs border rounded focus:outline-none focus:ring-0.5 focus:ring-orange-500 focus:border-orange-500"
              />
              <textarea
                placeholder="Message"
                className="w-full p-4 mb-2 border text-xs rounded focus:outline-none focus:ring-0.5 focus:ring-orange-500 focus:border-orange-500"
                rows={5}
              />
              <button className="w-full bg-orange-600 text-xs text-white py-4 rounded">
                Send
              </button>
            </div>
          )}
        </div>

        {/* Open Shop Icon */}
        <div className="relative ">
          <button
            onClick={() => setIsShopOpen(!isShopOpen)}
            className="flex items-center space-x-1"
          >
            <RiStore2Fill className="h-4 w-4 text-orange-500 " />
            <span className="text-[10px] text-orange-500">Open Shop</span>
          </button>
          {isShopOpen && (
            <div className="absolute right-0 mt-2 w-[380px] h-[207px] bg-white z-50 border border-gray-200 rounded-lg shadow-lg p-4">
              <div className="flex justify-center">
                <AiTwotoneAlert className="h-6 rounded w-6 text-orange-500 mt-4 bg-orange-100" />
              </div>
              <h5 className="text-center mt-2 text-sm font-bold"> Create Shop</h5>
              <p className="text-center mt-2 font-thin text-xs">
              You will need to have an account before setting up a shop
              </p>
              < div className="flex justify-between mt-6 ">
              
  <button
    onClick={() => setIsShopOpen(false)}
    className="px-14 py-4 text-xs font-medium text-orange-500 border border-orange-500 rounded"
  >
    Cancel
  </button>
  <button 
    className="px-12 py-4 text-xs font-medium text-white bg-orange-600 rounded"
  >
     <Link  href={'/Seller'}>Create Account </Link>
  </button>

              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4  py-4 flex items-center   justify-between w-full max-w-screen-lg ">
        {/* Toggle Icon (Left) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden "
        >
          <RiMenu4Line className="h-6 w-6 text-gray-700" />
        </button>

        {/* Logo (Centered) */}
        <div className="flex items-center gap-4 justify-center text-sm font-bold flex-grow lg:flex-grow-0 lg:ml-8">
                <Link href={'/'}>
                <Image src="/logo.png" alt="Logo" width={100} height={70} className="" />
                </Link>



        {/* Nav Links (Hidden on Small Screens) */}
        <div className="hidden  lg:flex space-x-6">
        
          <Link href="#" className="text-gray-700 font-bold text-xs ">
            Mens
          </Link>
          <Link href="#" className="text-gray-700 font-bold text-xs ">
            Womens
          </Link>
          <Link href="#" className="text-gray-700 font-bold text-xs">
            Kids
          </Link>
          <Link href="#" className="text-gray-700 font-bold text-xs">
            Shop
          </Link>
          <Link href="#" className="text-gray-700 font-bold text-xs ">
            Sales
          </Link>
        </div>
        </div>

        {/* Icons (Right) */}
        <div className="flex items-center space-x-4 lg:mr-20">
        

          {/* User Icon */}
          <Link href={'/Authentication'}>
          <button className="block sm:block md:hidden lg:hidden">
  <CiUser className="h-4 w-4 text-gray-700" />
</button>
</Link>

  {/* Sign Up/Login Text (Visible on Large Screens) */}
  <Link href='/Authentication'>   
  <span className="hidden lg:inline text-gray-700 text-xs font-semibold  hover:text-orange-600 hover:underline">
    Sign Up / Log In
  </span>
  </Link>

          
          

          {/* Notification Icon */}
          <Link href="/Wishlist" className="relative">
            <CiHeart className="text-xl" />
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {wishlist.length}
              </span>
            )}
          </Link>

          {/* Cart Icon */}
          <Link href="/cart" className="relative">
            <IoBagOutline className="text-xl " />
            {cart?.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>
            {/* Search Icon */}
            <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <BiSearch className="h-4 w-4 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Mobile Menu (Hidden by Default) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-24 left-[-17px] w-full bg-white shadow-md p-4 z-50">
          <div className="flex flex-col space-y-4">
            <Link href="#" className="text-gray-700 ">
              Mens
            </Link>
            <Link href="#" className="text-gray-700 ">
              Womens
            </Link>
            <Link href="#" className="text-gray-700 ">
              Kids
            </Link>
            <Link href="#" className="text-gray-700 ">
              Shop
            </Link>
            <Link href="#" className="text-gray-700">
              Sales
            </Link>
          </div>
        </div>
      )}

      {/* Search Popup */}
      {isSearchOpen && (
        <div className="fixed top-0 left-0 w-full bg-white  p-6   mx-auto">
          <div className="container mx-auto flex  justify-between items-center">
            <div className="text-2xl font-bold ml-24"> <Image src="/logo.png" alt="Logo" width={100} height={70} className="" /></div>
            <input
  type="text"
  placeholder="Search anything..."
  className="w-full ml-4 p-2 text-xs border rounded-full focus:outline-none focus:ring-0.5 focus:ring-orange-500 focus:border-orange-500"
/>

            <button onClick={() => setIsSearchOpen(false)}>
              <BsXLg className="h-4 w-4 text-gray-700 ml-4" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;