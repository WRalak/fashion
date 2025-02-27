'use client'

import { Suspense } from "react";


const LoansPage = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
       <div>
         loans
   
       </div>
       </Suspense>
  );
};


export default LoansPage
  
