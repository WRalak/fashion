

import { Suspense } from "react";


const BidsPage = () => {
  return (
   <Suspense  fallback={<p>Loading...</p>}>
    <div>bids</div>
   </Suspense>
  );
};

export default BidsPage;
