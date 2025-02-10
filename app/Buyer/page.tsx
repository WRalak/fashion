

'use client';

import { useEffect, useState } from "react";

interface Order {
  id: string;
  productName: string;
  price: number;
  datePurchased: string;
  status: "Pending" | "Shipped" | "Delivered" | "Cancelled";
}

const BuyerHistory = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/buyer/orders")
      .then((res) => res.json())
      .then((data: Order[]) => {
        setOrders(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Your Order History</h1>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : orders.length === 0 ? (
        <p className="text-center text-gray-500">No past purchases found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3">Product</th>
                <th className="p-3">Price</th>
                <th className="p-3">Date Purchased</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b">
                  <td className="p-3">{order.productName}</td>
                  <td className="p-3">${order.price.toFixed(2)}</td>
                  <td className="p-3">{new Date(order.datePurchased).toLocaleDateString()}</td>
                  <td 
                    className={`p-3 font-semibold ${
                      order.status === "Delivered" ? "text-green-600" :
                      order.status === "Pending" ? "text-yellow-600" :
                      order.status === "Cancelled" ? "text-red-600" : "text-blue-600"
                    }`}
                  >
                    {order.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BuyerHistory;
