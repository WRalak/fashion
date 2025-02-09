/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import { useCart } from "../context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between border-b py-2">
              <span>
                {item.name} x {item.quantity}
              </span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          <Link
            href="/checkout"
            className="bg-black text-white px-6 py-2 mt-4 inline-block"
          >
            Proceed to Checkout
          </Link>
        </div>
      )}
    </div>
  );
}



