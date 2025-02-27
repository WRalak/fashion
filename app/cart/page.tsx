
"use client";

import React, { Suspense } from "react";
import { useCart } from "../context/CartContext";
import Image from "next/image";
import { FaTrashAlt } from "react-icons/fa"; // Trash icon for delete
import { useRouter } from "next/navigation";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

// Define types for CartItem
interface CartItem {
  id: number;
  image: string | StaticImport;
  name: string;
  price: number;
  description: string;
  quantity: number;
}

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const router = useRouter();

  // Handle removing a product from the cart
  const handleRemove = (id: number) => {
    removeFromCart(id);
  };

  // Handle quantity change
  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity <= 0) return; // Prevent reducing quantity below 1
    updateQuantity(id, quantity);
  };

  // Calculate the total price of the items in the cart
  const totalPrice = cart.reduce(
    (total: number, product: { price: number; quantity: number }) =>
      total + product.price * product.quantity,
    0
  );

  return (
    <Suspense  fallback={<p>Loading...</p>}>
    <div className="my-4 px-4 flex flex-col items-center text-center">
      <h2 className="text-xl font-semibold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div className="w-full max-w-2xl space-y-3">
          {cart.map((product: CartItem) => (
            <div
              key={product.id}
              className="flex items-center bg-white p-4 shadow"
            >
              {/* Product Image (Left) */}
              <Image
                src={product.image}
                alt={product.name}
                height={100}
                width={100}
                className="w-24 h-24 object-cover rounded-md"
              />

              {/* Product Details (Right) */}
              <div className="ml-4 flex flex-col items-start text-left flex-grow">
                <h3 className="text-sm font-semibold">{product.name}</h3>
                <p className="text-xs text-gray-700">KES {product.price}</p>
                <p className="text-xs text-gray-600">{product.description}</p>

                {/* Quantity Controls & Remove Button */}
                <div className="flex items-center mt-2 space-x-3">
                  <button
                    onClick={() =>
                      handleQuantityChange(product.id, product.quantity - 1)
                    }
                    className="px-3 py-1 bg-gray-200 rounded-full text-sm"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={product.quantity}
                    onChange={(e) =>
                      handleQuantityChange(product.id, parseInt(e.target.value))
                    }
                    className="w-14 text-center text-xs border rounded-md"
                    min="1"
                  />
                  <button
                    onClick={() =>
                      handleQuantityChange(product.id, product.quantity + 1)
                    }
                    className="px-3 py-1 bg-gray-200 rounded-full text-sm"
                  >
                    +
                  </button>

                  {/* Remove Button */}
                  <button
                    onClick={() => handleRemove(product.id)}
                    className="text-red-800"
                  >
                    <FaTrashAlt size={12} />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Total Price */}
          <div className="mt-4 text-xs font-semibold">
            <span>Total: KES {totalPrice.toFixed(2)}</span>
          </div>

          {/* Checkout Button */}
          <button
            onClick={() => router.push("/Checkout")}
            className="mt-4 px-8 py-4 bg-orange-600 text-white text-sm rounded"
          >
             Checkout
          </button>
        </div>
      )}
    </div>
    </Suspense>
  );
};

export default CartPage;

