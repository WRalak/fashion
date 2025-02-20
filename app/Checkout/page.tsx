

'use client';
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useRouter } from 'next/navigation';

const CheckoutPage = () => {
  const { cart } = useCart();
  const router = useRouter();
  
  // State to handle user details
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    address: '',
  });

  // Calculate the total price of the items in the cart
  const totalPrice = cart.reduce((total: number, product: { price: number; quantity: number; }) => total + product.price * product.quantity, 0);

  // Handle input changes for user details
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    console.log('Order submitted:', userDetails, cart);

    // Redirect or show confirmation after submission
    router.push('/orderConfirmation');
  };

  return (
    <div className="my-8 px-4">
      <h2 className="text-xl font-semibold mb-6">Checkout</h2>

      {/* Order Summary */}
      <div className="space-y-4 mb-6">
        <h3 className="text-xl font-semibold">Order Summary</h3>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((product) => (
              <div key={product.id} className="flex items-center bg-white p-4 shadow-md rounded-lg">
                <div className="ml-4 flex-grow">
                  <h3 className="text-sm font-semibold">{product.name}</h3>
                  <p className="text-sm text-gray-700">KES{product.price} x {product.quantity}</p>
                </div>
              </div>
            ))}

            {/* Total Price */}
            <div className="mt-6 flex justify-between text-sm font-semibold">
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>
        )}
      </div>

      {/* User Details Form */}
      <h3 className="text-xl font-semibold mb-4">Shipping Details</h3>
      <form onSubmit={handleCheckout} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-medium">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={userDetails.name}
            onChange={handleInputChange}
            required
            className="p-2 border rounded-md"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userDetails.email}
            onChange={handleInputChange}
            required
            className="p-2 border rounded-md"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="address" className="text-sm font-medium">Address</label>
          <textarea
            id="address"
            name="address"
            value={userDetails.address}
            onChange={handleInputChange}
            required
            className="p-2 border rounded-md"
          />
        </div>

        {/* Checkout Button */}
        <div className="mt-4">
          <button type="submit" className="w-full p-3 bg-orange-500  text-white rounded">
            Complete Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
