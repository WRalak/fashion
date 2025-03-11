"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

const PickUpPage = () => {
  return (
    <Suspense fallback={<p>Loading pickup details...</p>}>
      <PickUpContent />
    </Suspense>
  );
};

const PickUpContent = () => {
  const searchParams = useSearchParams();

  return <div>Selected Pickup: {searchParams.get("id")}</div>;
};

export default PickUpPage;


