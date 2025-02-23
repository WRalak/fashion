

"use client";

import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";

const CheckoutPage = () => {
  const { cart } = useCart();
  const router = useRouter();

  // State to handle user details
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    address: "",
  });

  // Calculate the total price of the items in the cart
  const totalPrice = cart.reduce(
    (total: number, product: { price: number; quantity: number }) =>
      total + product.price * product.quantity,
    0
  );

  // Handle input changes for user details
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission (for example, create an order)
  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();

    // Here, you can handle the checkout process, like sending the order details to your backend
    console.log("Order submitted:", userDetails, cart);

    // Redirect or show confirmation after submission
    router.push("/orderConfirmation");
  };

  return (
    <div className="flex flex-col items-center my-8 px-4 text-center">
      <h2 className="text-2xl font-semibold mb-6">Checkout</h2>

      {/* Order Summary */}
      <div className="w-full max-w-lg bg-white p-6 shadow-md rounded-lg text-center">
        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((product) => (
              <div
                key={product.id}
                className="flex justify-between items-center bg-gray-100 p-4 rounded-lg"
              >
                <h3 className="text-sm font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-700">
                  KES {product.price} × {product.quantity}
                </p>
              </div>
            ))}

            {/* Total Price */}
            <div className="mt-6 text-lg font-semibold">
              <span>Total: KES {totalPrice.toFixed(2)}</span>
            </div>
          </div>
        )}
      </div>

      {/* User Details Form */}
      <div className="w-full max-w-lg bg-white p-6 shadow-md rounded-lg mt-6">
        <h3 className="text-lg font-semibold mb-4">Shipping Details</h3>
        <form onSubmit={handleCheckout} className="space-y-4 text-left">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={userDetails.name}
              onChange={handleInputChange}
              required
              className="p-2 border rounded focus:outline-none focus:ring-[0.5px] focus:ring-orange-600"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userDetails.email}
              onChange={handleInputChange}
              required
              className="p-2 border rounded-md focus:outline-none focus:ring-[0.5px] focus:ring-orange-600"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="address" className="text-sm font-medium">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              value={userDetails.address}
              onChange={handleInputChange}
              required
              className="p-2 border rounded focus:outline-none focus:ring-[0.5px] focus:ring-orange-600"
            />
          </div>

          {/* Checkout Button */}
          <div className="mt-4 text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-orange-500 text-white rounded text-sm"
            >
              Complete Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;

