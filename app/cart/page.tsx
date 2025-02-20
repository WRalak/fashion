

'use client';



'use client';
import React from 'react';
import { useCart } from '../context/CartContext';
import Image from 'next/image';
import { FaTrashAlt } from 'react-icons/fa'; // Trash icon for delete
import { useRouter } from 'next/navigation';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

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
  const totalPrice = cart.reduce((total: number, product: { price: number; quantity: number; }) => total + product.price * product.quantity, 0);

  return (
    <div className="my-4 px-2">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-3">
          {cart.map((product: CartItem) => (
            <div key={product.id} className="flex items-center bg-white p-3 shadow-sm rounded-lg">
              {/* Product Image */}
              <Image src={product.image} alt={product.name} height={80} width={80} className="w-20 h-20 object-cover" />

              {/* Product Details */}
              <div className="ml-3 flex-grow">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-md text-gray-700">KES{product.price}</p>
                <p className="text-xs text-gray-600">{product.description}</p>

                {/* Quantity and Update Controls */}
                <div className="flex items-center mt-1">
                  <button
                    onClick={() => handleQuantityChange(product.id, product.quantity - 1)}
                    className="px-1 py-1 bg-gray-200 rounded-md text-lg"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={product.quantity}
                    onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                    className="mx-1 w-14 text-center border rounded-md"
                    min="1"
                  />
                  <button
                    onClick={() => handleQuantityChange(product.id, product.quantity + 1)}
                    className="px-1 py-1 bg-gray-200 rounded-md text-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Remove Button */}
              <button onClick={() => handleRemove(product.id)} className="text-red-500 ">
                <FaTrashAlt size={12} />
              </button>
            </div>
          ))}

          {/* Total Price */}
          <div className="mt-4 flex justify text-lg font-semibold">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span> {/* Formatting to two decimal places */}
          </div>

          {/* Checkout Button */}
          <div className="mt-4">
            <button
              onClick={() => router.push('/Checkout')}
              className="rounded-sm p-2 bg-orange-500 text-white"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;









