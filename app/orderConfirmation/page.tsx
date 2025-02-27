
'use client';
import React, { Suspense } from 'react';
import { useRouter } from 'next/navigation';

const OrderConfirmationPage = () => {
  const router = useRouter();

  const handleContinueShopping = () => {
    router.push('/'); // Redirect to home or products page after order confirmation
  };

  return (
      <Suspense fallback={<p>Loading...</p>}>
        
      
    <div className="my-8 px-4">
      <h2 className="text-xl font-semibold mb-6">Order Confirmation</h2>
      <p className="text-sm">Thank you for your purchase! Your order has been successfully placed.</p>
      <div className="mt-4">
        <button
          onClick={handleContinueShopping}
          className=" text-sm p-3 bg-orange-600  rounded text-white  "
        >
          Continue Shopping
        </button>
      </div>
    </div>
    </Suspense>
  );
};

export default OrderConfirmationPage;

