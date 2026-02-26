import React from "react";
import Link from "next/link";
import { Home, Search, HeartPulse } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-base-100 px-6">
      <div className="max-w-md w-full text-center">
        {/* Animated Icon Container */}
        <div className="relative mb-8 flex justify-center">
          <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full scale-150"></div>
          <div className="relative bg-base-100 p-8 rounded-full border-2 border-dashed border-primary/30 animate-pulse">
            <HeartPulse size={80} className="text-primary/40" />
            <Search
              size={32}
              className="text-secondary absolute bottom-6 right-6 animate-bounce"
            />
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-9xl font-black text-base-300">404</h1>
        <div className="-mt-10">
          <h2 className="text-3xl font-bold text-neutral">Page Not Found</h2>
          <p className="text-neutral/60 mt-4 text-lg">
            It looks like the page you are looking for has been moved or
            doesn&apos;t exist. Let&apos;s get you back to finding the care you
            need.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="btn btn-primary btn-lg gap-2 shadow-lg shadow-primary/20"
          >
            <Home size={20} />
            Return to Home
          </Link>

          <Link href="/services" className="btn btn-outline btn-lg">
            View Services
          </Link>
        </div>

        {/* Helpful Support Link */}
        <p className="mt-12 text-sm text-neutral/40">
          Need immediate assistance?{" "}
          <Link href="/contact" className="link link-primary font-bold">
            Contact Support
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
