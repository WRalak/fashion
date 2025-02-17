'use client'

import { useState, useEffect, ChangeEvent } from "react";

export default function Dashboard() {
  const [product, setProduct] = useState<{ name: string; price: string }>({
    name: "",
    price: "",
  });
  const [image, setImage] = useState<File | null>(null);
  const [shopOwnerId, setShopOwnerId] = useState<string>("");

  useEffect(() => {
    // Simulate logged-in shop owner (in real apps, use authentication)
    setShopOwnerId("1"); // Example shop owner ID
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpdate = async () => {
    if (!shopOwnerId) {
      alert("Please log in as a shop owner!");
      return;
    }

    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price);
    if (image) {
      formData.append("image", image);
    }
    formData.append("shopOwnerId", shopOwnerId);

    try {
      const response = await fetch("/api/products", {
        method: "POST",
        body: formData, // Send as FormData to handle file upload
      });

      if (!response.ok) {
        throw new Error("Failed to upload product");
      }

      alert("Product added successfully!");
    } catch (error) {
      console.error("Error uploading product:", error);
      alert("Error uploading product. Please try again.");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        className="border p-2 w-full mb-2"
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        className="border p-2 w-full mb-2"
        onChange={handleInputChange}
      />
      <input
        type="file"
        accept="image/*"
        className="border p-2 w-full mb-2"
        onChange={handleFileChange}
      />
      <button
        onClick={handleUpdate}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Product
      </button>
    </div>
  );
}
