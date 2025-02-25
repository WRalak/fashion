

"use client";

import { useState, useEffect } from "react";

const PaymentDetails: React.FC = () => {
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const [mpesaNumber, setMpesaNumber] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("+254");
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  const handlePaymentChange = (method: string) => {
    setSelectedPayment(method);
  };

  // Function to validate the form
  const validateForm = (): boolean => {
    if (!selectedPayment) return false;
    if (selectedPayment === "Mpesa" && mpesaNumber.trim().length < 10) return false;
    return true;
  };

  // Effect to update button state when inputs change
  useEffect(() => {
    setIsButtonDisabled(!validateForm());
  }, [selectedPayment, mpesaNumber]);

  return (
    <div className="w-full max-w-lg mx-auto mt-6">
      {/* Section Number */}
      <h2 className="text-sm font-semibold text-gray-700">03</h2>

      {/* Payment Details Header */}
      <h3 className="text-lg font-bold text-gray-800 mt-1">Payment Details</h3>
      <p className="text-xs text-gray-600 mb-4">How would you like to make payment?</p>

      {/* Payment Options */}
      <div className="space-y-3">
        {["Solgates Wallet", "Mpesa", "Mpesa on Delivery"].map((method) => (
          <label key={method} className="flex items-center text-xs space-x-2 cursor-pointer">
            <input
              type="radio"
              name="payment"
              value={method}
              checked={selectedPayment === method}
              onChange={() => handlePaymentChange(method)}
              className="hidden"
            />
            {/* Radio Button Styling */}
            <div
              className={`w-5 h-5 border-2 rounded-full text-xs flex items-center justify-center 
                ${selectedPayment === method ? "border-orange-500" : "border-gray-400"}`}
            >
              {selectedPayment === method && <div className="w-2.5 h-2.5 bg-orange-500 rounded-full"></div>}
            </div>
            <span className="text-gray-800">{method}</span>
          </label>
        ))}

        {/* Mpesa Number Input (Only Shows if Mpesa is Selected) */}
        {selectedPayment === "Mpesa" && (
          <div className="mt-3">
            <label className="block text-sm font-medium text-gray-700">Enter Mpesa Number</label>
            <div className="flex border p-2 rounded focus-within:ring-[0.5px] focus-within:ring-orange-600">
              <select
                value={selectedCountry}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedCountry(e.target.value)}
                className="focus:outline-none border-r pr-2 mr-2 text-xs"
              >
                <option value="+254">+254</option>
                <option value="+255">+255</option>
                <option value="+256">+256</option>
              </select>
              <input
                type="tel"
                value={mpesaNumber}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMpesaNumber(e.target.value)}
                placeholder="Enter phone number"
                className="w-full text-xs focus:outline-none"
              />
            </div>
          </div>
        )}
      </div>

      {/* Complete and Checkout Button */}
      <button
        disabled={isButtonDisabled}
        className={`mt-6 w-full py-3 text-white text-xs rounded-lg transition 
          ${isButtonDisabled ? "bg-orange-400 cursor-not-allowed" : "bg-orange-600 hover:bg-orange-700"}`}
      >
        Complete & Checkout
      </button>
    </div>
  );
};

export default PaymentDetails;
