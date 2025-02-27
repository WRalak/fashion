

"use client";

import { useSearchParams } from "next/navigation";

export default function CheckoutContent() {
  const searchParams = useSearchParams();
  const paramValue = searchParams.get("your_param") || "No param found";

  return (
    <div className="p-4">
      <h1 className="text-lg font-semibold">Checkout Page</h1>
      <p>Search Param: {paramValue}</p>
    </div>
  );
}
