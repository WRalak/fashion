
'use client'

import { Suspense } from "react";



const ShopOwnerDashboard = () => {
  return (
    <div className="flex">
      <Suspense fallback={<p>Loading...</p>}>
        <div>
          loans
    
        </div>
        </Suspense>
    </div>
  );
};

export default ShopOwnerDashboard;



