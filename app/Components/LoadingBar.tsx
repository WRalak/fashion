"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// Configure NProgress
NProgress.configure({ showSpinner: false, speed: 500 });

const LoadingBar: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    NProgress.start();
    const timer = setTimeout(() => {
      NProgress.done();
    }, 500); // Short delay to simulate loading

    return () => {
      clearTimeout(timer);
      NProgress.done();
    };
  }, [pathname, searchParams]); // Triggers on route change

  return null; // No visible UI, just triggers NProgress
};

export default LoadingBar;


