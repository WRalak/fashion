import Link from "next/link";
import React from "react";

import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialFacebookCircular } from "react-icons/ti";

const Footer: React.FC = () => {
  return (
    <footer className="font-medium py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-screen-lg mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-">
          {/* Shop Section */}
          <div className="lg:ml-16">
            <h3 className="text-xs text-gray-600 mb-3">SHOP</h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="#" className="hover:text-gray-900">Men</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Women</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Kids</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Shops</Link></li>
            </ul>
          </div>

          {/* Customer Service Section */}
          <div>
            <h3 className="text-xs text-gray-500 mb-3">CUSTOMER SERVICE</h3>
            <ul className="space-y-1 text-xs">
              <li><Link href="#" className="hover:text-gray-900">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Store Locations</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Become a Seller</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Returns & Refunds</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Orders & Delivery</Link></li>
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-xs text-gray-500 mb-3">SOLGATES</h3>
            <ul className="space-y-2 text-xs ">
              <li><Link href="#" className="hover:text-gray-900">About Us</Link></li>
              <li><Link href="#" className="hover:text-gray-900">FAQs</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Terms & Conditions</Link></li>
              <li><Link href="#" className="hover:text-gray-900">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Socials Section */}
          <div className="lg:mr-18">
            <h3 className="text-xs  text-gray-600 mb-3">SOCIALS</h3>
            <div className="flex text-xs mt-10 space-x-4">
              <Link href="#" className="text-blue-400 hover:text-blue-600">
                <TiSocialFacebookCircular className="w-4 h-4" />
              </Link>
              <Link href="#" className="text-blue-400 hover:text-blue-600">
                <FaXTwitter className="w-4 h-4" />
              </Link>
              <Link href="#" className="text-red-400 hover:text-red-600">
                <IoLogoInstagram className="w-4 h-4" />
              </Link>
            </div>
            {/* Copyright */}
            <div className="text-center text-xs mt-8 text-gray-500 ">
              © {new Date().getFullYear()} Solgates, Inc. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
