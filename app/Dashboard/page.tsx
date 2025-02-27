'use client';

import React, { Suspense } from 'react';


const Dashboard = () => {
  return (
      <Suspense fallback={<p>Loading...</p>}>
        <div>
          loans
    
        </div>
        </Suspense>
  );
};

export default Dashboard;


