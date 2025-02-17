

"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface Shop {
  id: string;
  name: string;
  location: string;
  category: string;
  ownerName: string;
  status: "PENDING" | "APPROVED" | "REJECTED";
}

const AdminShops = () => {
  const [shops, setShops] = useState<Shop[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;
    if (!session || session.user.role !== "ADMIN") router.push("/");
  }, [router, session, status]);

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const res = await fetch("/api/admin/shops");
        if (!res.ok) throw new Error("Failed to fetch shops");
        const data = await res.json();
        setShops(data);
      } catch (err) {
        setError((err as Error).message);
      }
    };
    fetchShops();
  }, []);

  const updateShopStatus = async (id: string, status: "APPROVED" | "REJECTED") => {
    try {
      const res = await fetch(`/api/admin/updateShopStatus/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (!res.ok) throw new Error("Failed to update shop status");

      setShops((prevShops) =>
        prevShops.map((shop) =>
          shop.id === id ? { ...shop, status } : shop
        )
      );
    } catch (err) {
      console.error("Error updating shop status:", err);
      alert("Failed to update shop status. Try again.");
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
            <th className="p-3">Location</th>
            <th className="p-3">Category</th>
            <th className="p-3">Status</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {shops.map((shop) => (
            <tr key={shop.id} className="border-b">
              <td className="p-3">{shop.name}</td>
              <td className="p-3">{shop.ownerName}</td>
              <td className="p-3">{shop.location}</td>
              <td className="p-3">{shop.category}</td>
              <td className="p-3">{shop.status}</td>
              <td className="p-3 flex gap-2">
                {shop.status === "PENDING" && (
                  <>
                    <button
                      onClick={() => updateShopStatus(shop.id, "APPROVED")}
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => updateShopStatus(shop.id, "REJECTED")}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Reject
                    </button>
                  </>
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

