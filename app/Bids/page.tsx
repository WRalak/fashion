'use client';

import { Suspense } from 'react';

const BidsPage = () => {

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div>
        <h1>Bids Page</h1>
       
      </div>
    </Suspense>
  );
};

export default BidsPage;


