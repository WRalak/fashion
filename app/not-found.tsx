"use client";  // ✅ Fix 'useRouter' issue

import { useRouter } from "next/navigation";
import Head from "next/head"; // ✅ Import for setting title in the browser tab

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <>
      {/* ✅ Sets the page title in the browser tab */}
      <Head>
        <title>Oh No!</title>
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen text-gray-900">
        <h1 className="text-lg mb-4">404, Not Found!</h1>
        <p className="text-sm text-gray-600 font-light mb-6">
          There was a problem locating the page you are looking for.
        </p>

        <div className="flex space-x-4">
          {/* Retry Button */}
          <button
            onClick={() => router.refresh()}
            className="px-6 py-4 border-2 border-orange-600 text-orange-600 rounded-lg text-xs flex items-center justify-center"
          >
            Retry
          </button>

          {/* Go Home Button */}
          <button
            onClick={() => router.push("/")}
            className=" px-6 py-4 bg-orange-600 text-white text-xs rounded-lg flex items-center justify-center"
          >
            Take Me Home
          </button>
        </div>
      </div>
    </>
  );
}

