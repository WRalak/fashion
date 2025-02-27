

"use client";

import React, { Suspense, useState } from "react";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaRegBuilding } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";

import { RiDeleteBin5Line } from "react-icons/ri";
import UserProfile from "../Components/UserProfile";
import Payments from "../Components/Payments";

const counties = ["Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret"];

const CheckoutPage: React.FC = () => {
  const { cart, removeFromCart } = useCart();
  const router = useRouter();

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    address: "",
  });

  const [selectedCounty, setSelectedCounty] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("+254");
  const [setDefault, setSetDefault] = useState(false);

  const totalPrice = cart.reduce(
    (total: number, product: { price: number; quantity: number }) =>
      total + product.price * product.quantity,
    0
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return; // Prevent checkout when cart is empty
    console.log("Order submitted:", userDetails, cart);
    router.push("/orderConfirmation");
  };

  return (
    <Suspense  fallback={<p>Loading...</p>}>   
    <div className="flex flex-col items-center my-8 px-4 text-center">
      {/* Hero Image */}
      <div className="w-full flex flex-col items-center">
  <div className="w-[885px] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[885px]">
    <Image
      src="/hero1.jpg"
      alt="Hero"
      width={885}
      height={250}
      className="w-full object-cover rounded-lg h-[250px] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[885px] mx-auto "
    />
    <p className="text-xs mt-3 text-left">Personal Details <span className="text-gray-500">| Shipping Details | Payment Details</span></p>
  </div>
</div>



      {/* Flex container for Order Summary and Shipping Form */}
      <div className="flex flex-col mt-3 lg:flex-row lg:justify-center lg:gap-10 w-full max-w-5xl">
        {/* Order Summary */}
        <div className="w-full lg:w-1/2 bg-white p-6 shadow-md rounded-lg text-center">
          <h3 className="text-sm font-semibold mb-4">Shopping Cart</h3>

          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div className="space-y-4">
              {cart.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between bg-gray-100 p-4 rounded-lg"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    height={50}
                    width={50}
                    className="w-12 h-12 object-cover rounded-md"
                  />
                  <div className="text-left flex-grow ml-3">
                    <h3 className="text-sm font-semibold">{product.name}</h3>
                    <p className="text-sm text-gray-700">
                      KES {product.price} × {product.quantity}
                    </p>
                  </div>
                  {/* Delete Button */}
                  <button onClick={() => removeFromCart(product.id)}>
                  <RiDeleteBin5Line className="text-red-500 text-sm" />
                  </button>
                </div>
              ))}

              {/* Total Price */}
              <div className="mt-6 text-lg font-semibold">
                <span>Total: KES {totalPrice.toFixed(2)}</span>
              </div>
            </div>
          )}
        </div>

        {/* Shipping Details Form */}
        <div className="w-full lg:w-1/2 bg-white p-6 shadow-md rounded-lg mt-6 lg:mt-0">
        <UserProfile/>
        <h3 className="text-sm font-semibold mt-3">02</h3>
          <h3 className="text-lg font-semibold ">Shipping Details</h3>
          <form onSubmit={handleCheckout} className="space-y-4 text-left">
            {/* Name */}
            <div className="flex items-center border rounded p-2 focus-within:ring-[0.5px] focus-within:ring-orange-600 w-full">
              <IoPersonOutline className="mr-2 text-green-500" />
              <input
                type="text"
                name="name"
                value={userDetails.name}
                onChange={handleInputChange}
                required
                placeholder="Name"
                className="w-full focus:outline-none text-xs"
              />
            </div>

            {/* Apartment/Office */}
            <div className="flex items-center border rounded p-2 focus-within:ring-[0.5px] focus-within:ring-orange-600 w-full">
              <FaRegBuilding className="mr-2 text-blue-500" />
              <input type="text" placeholder="Apartment/Office" className="w-full focus:outline-none text-xs" />
            </div>
            <div className="flex items-center border rounded p-2 focus-within:ring-[0.5px] focus-within:ring-orange-600 w-full">
              <FaRegBuilding className="mr-2 text-blue-500" />
              <input type="text" placeholder="Apartment/Office" className="w-full focus:outline-none text-xs" />
            </div>
            {/* County Selection */}
            <div className="relative w-full">
              <CiLocationOn className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500" />
              <select
                value={selectedCounty}
                onChange={(e) => setSelectedCounty(e.target.value)}
                className="w-full pl-10 p-2 border text-xs rounded focus:outline-none focus:ring-[0.5px] focus:ring-orange-600"
              >
                <option value="">Select County</option>
                {counties.map((county, index) => (
                  <option key={index} value={county}>
                    {county}
                  </option>
                ))}
              </select>
            </div>

            {/* Phone Number */}
            <div className="flex border p-2 rounded focus-within:ring-[0.5px] focus-within:ring-orange-600">
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="focus:outline-none border-r pr-2 mr-2 text-xs"
              >
                <option value="+254">+254</option>
                <option value="+255">+255</option>
                <option value="+256">+256</option>
              </select>
              <input type="tel" placeholder="Enter phone number" className="w-full text-xs focus:outline-none" />
            </div>

            {/* Set as Default Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={setDefault}
                onChange={() => setSetDefault(!setDefault)}
                className="mr-2"
              />
              <label className="text-xs text-slate-700 font-light">Set as Default Address?</label>
            </div>

            {/* Save and Continue Button */}
            <div className="mt-4 text-center">
            <button
  type="submit"
  className={`px-6 py-3 w-full rounded text-xs transition ${
    cart.length === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-orange-600 text-white hover:bg-orange-700"
  }`}
  disabled={cart.length === 0}
>
  Save & Continue
</button>

                <Payments/>
            </div>
          </form>
        </div>
      </div>
    </div>
    </Suspense>
    
  );
};

export default CheckoutPage;
