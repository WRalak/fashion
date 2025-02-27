"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const MpesaPage = () => {
  const searchParams = useSearchParams(); // This requires a Client Component

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div>
        <h1>Mpesa Payment</h1>
        <p>Query Params: {searchParams.toString()}</p>
      </div>
    </Suspense>
  );
};

export default MpesaPage;




