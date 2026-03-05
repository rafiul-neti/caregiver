import React from "react";

const ServiceDetailLoading = () => {
  return (
    <main className="min-h-screen bg-base-100 pb-20">
      {/* 1. Dark Header Skeleton */}
      <div className="bg-neutral py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Back Link Placeholder */}
          <div className="skeleton h-4 w-28 bg-neutral-focus mb-6"></div>
          {/* Title Placeholder */}
          <div className="skeleton h-12 w-3/4 md:w-1/2 bg-neutral-focus mb-4"></div>
          {/* Tagline Placeholder */}
          <div className="skeleton h-4 w-full max-w-lg bg-neutral-focus"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* LEFT CONTENT SKELETON */}
          <div className="flex-1 space-y-10">
            {/* Main Image Aspect-Video Placeholder */}
            <div className="skeleton aspect-video w-full rounded-3xl shadow-lg"></div>

            {/* Overview Section */}
            <section className="space-y-4">
              <div className="skeleton h-8 w-48"></div> {/* Section Title */}
              <div className="space-y-2">
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-2/3"></div>
              </div>
            </section>

            {/* Expectations Card Placeholder */}
            <section className="bg-base-200 p-8 rounded-2xl space-y-6">
              <div className="skeleton h-8 w-56"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="flex gap-3 items-center">
                      <div className="skeleton h-5 w-5 rounded-full shrink-0"></div>
                      <div className="skeleton h-4 w-full"></div>
                    </div>
                  ))}
              </div>
            </section>
          </div>

          {/* RIGHT SIDEBAR SKELETON */}
          <aside className="w-full lg:w-96">
            <div className="card bg-base-100 border border-base-300 shadow-2xl">
              <div className="card-body">
                {/* Price Header */}
                <div className="flex justify-between items-center mb-6">
                  <div className="skeleton h-4 w-24"></div>
                  <div className="text-right space-y-1">
                    <div className="skeleton h-10 w-24 ml-auto"></div>
                    <div className="skeleton h-3 w-16 ml-auto"></div>
                  </div>
                </div>

                {/* Badges/Icons List */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="skeleton h-5 w-5 rounded-md"></div>
                    <div className="skeleton h-4 w-32"></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="skeleton h-5 w-5 rounded-md"></div>
                    <div className="skeleton h-4 w-40"></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="skeleton h-5 w-5 rounded-md"></div>
                    <div className="skeleton h-4 w-36"></div>
                  </div>
                </div>

                {/* Booking Button */}
                <div className="skeleton h-16 w-full rounded-lg"></div>

                {/* Legal Text */}
                <div className="mt-4 space-y-1">
                  <div className="skeleton h-2 w-full mx-auto"></div>
                  <div className="skeleton h-2 w-3/4 mx-auto"></div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default ServiceDetailLoading;
