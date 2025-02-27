'use client'

import React, { Suspense } from 'react'


const page = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
       <div>
         loans
   
       </div>
       </Suspense>
  )
}

export default page













