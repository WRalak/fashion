

"use client";

import { useEffect, useState } from "react";

type Shop = {
  id: string;
  name: string;
  ownerName: string;
  status: "PENDING" | "APPROVED" | "REJECTED";
};

const AdminShops = () => {
  const [shops, setShops] = useState<Shop[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const res = await fetch("/api/admin/shops");
        if (!res.ok) throw new Error("Failed to fetch shops");
        const data = await res.json();
        setShops(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchShops();
  }, []);

  const approveShop = async (id: string) => {
    try {
      const res = await fetch(`/api/admin/approveShop/${id}`, { method: "POST" });
      if (!res.ok) throw new Error("Failed to approve shop");

      setShops((prevShops) =>
        prevShops.map((shop) =>
          shop.id === id ? { ...shop, status: "APPROVED" } : shop
        )
      );
    } catch (err) {
      console.error("Approval Error:", err);
      alert("Failed to approve the shop. Try again.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-10">
      <h1 className="text-2xl font-bold">Admin Panel - Approve Shops</h1>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      <table className="w-full border mt-6">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3">Shop Name</th>
            <th className="p-3">Owner</th>
            <th className="p-3">Status</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {shops.map((shop) => (
            <tr key={shop.id} className="border-b">
              <td className="p-3">{shop.name}</td>
              <td className="p-3">{shop.ownerName}</td>
              <td className="p-3">{shop.status}</td>
              <td className="p-3">
                {shop.status === "PENDING" && (
                  <button
                    onClick={() => approveShop(shop.id)}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
                  >
                    Approve
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminShops;

