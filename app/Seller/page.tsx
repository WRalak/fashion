

"use client";

import Link from "next/link";
import { useState } from "react";
import { CiShop } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { RiTShirtLine } from "react-icons/ri";

interface SellerForm {
  storeName: string;
  location: string;
  category: string;
}

const BecomeASeller = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [formData, setFormData] = useState<SellerForm>({
    storeName: "",
    location: "",
    category: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/sellers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Application submitted successfully!");
        setFormData({ storeName: "", location: "", category: "" });
      } else {
        setMessage(result.message || "Submission failed.");
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setMessage("Something went wrong. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg relative">
        <button className="absolute top-4 right-4 text-gray-500" onClick={() => setIsOpen(false)}>
          <FaTimes size={13} />
        </button>
       
        <p className="text-sm font-semibold mb-2">Become A Seller</p>
        <hr className="mb-4" />
        <h6 className="text-xs mb-2  text-black">Becoming A Seller: Join the Waiting List</h6>
        <p className="text-[11px] text-gray-600 mb-4">
        To sell on Solgates, add your store details and the items you <br />wish to sell and we will pick them from you. You can also deliver <br /> your items to us.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="flex items-center border border-gray-300 p-2 rounded mb-3">
            <CiShop className="text-blue-500 mr-2 " />
            <input
              type="text"
              name="storeName"
              value={formData.storeName}
              onChange={handleChange}
              placeholder="Enter the name of your store"
              className="w-full outline-none text-xs py-2"
              required
            />
          </div>

          <div className="flex items-center border border-gray-300 p-2 rounded mb-3">
            <GoLocation className="text-green-500 mr-2" />
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Add your Physical location"
              className="w-full outline-none text-xs py-2"
              required
            />
          </div>
          <div className="flex items-center border border-gray-300 p-2 rounded mb-3">
  <RiTShirtLine className="text-blue-600 mr-2" />
  <select
    name="category"
    value={formData.category}
    onChange={handleChange}
    className="w-full outline-none text-xs cursor-pointer py-3 text-gray-400 focus:text-gray-800 appearance-none"
    required
  >
    <option value="" className="text-gray-400">Select the category of products you sell</option>
    <option value="Shoes" className="text-gray-800">Shoes</option>
    <option value="Accessories" className="text-gray-800">Accessories</option>
    <option value="Clothing" className="text-gray-800">Clothing</option>
  </select>
</div>




          <div className="flex items-center mb-4">
            <input type="checkbox" required className="mr-2 accent-orange-500 text-white" />
            <p className="text-xs text-gray-600">
              By creating a shop, you agree to the {" "}
              <Link href={'Terms'}>  
              <span className="text-gray-700 font-semibold cursor-pointer">Terms & Conditions</span></Link>
            </p>
          </div>

          <button type="submit" className="w-full bg-orange-600 text-xs text-white py-3 rounded">
            {isLoading ? "Submitting..." : "Create Shop"}
          </button>

          {message && <p className="text-sm text-center text-green-600 mt-2">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default BecomeASeller;



