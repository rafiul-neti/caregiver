import React from "react";

const ServicesLoading = () => {
  // Create 3 placeholder items to match ALL_SERVICES
  const skeletons = Array(3).fill(0);

  return (
    <main className="min-h-screen">
      {/* 1. Hero Header Skeleton */}
      <section className="bg-neutral py-20 text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-4 flex flex-col items-center">
          <div className="skeleton h-12 md:h-16 w-3/4 bg-neutral-focus"></div>
          <div className="skeleton h-4 w-full md:w-2/3 bg-neutral-focus"></div>
          <div className="skeleton h-4 w-1/2 bg-neutral-focus"></div>
        </div>
      </section>

      {/* 2. Services List Skeleton */}
      <section className="py-24 bg-base-100">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {skeletons.map((_, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row gap-12 items-center ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Skeleton */}
              <div className="w-full lg:w-1/2">
                <div className="aspect-4/3 rounded-3xl skeleton w-full shadow-2xl"></div>
              </div>

              {/* Text Content Skeleton */}
              <div className="w-full lg:w-1/2 space-y-6">
                {/* Icon Box */}
                <div className="w-16 h-16 rounded-2xl skeleton"></div>

                {/* Title */}
                <div className="skeleton h-10 w-2/3"></div>

                {/* Description Paragraph */}
                <div className="space-y-2">
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-full"></div>
                  <div className="skeleton h-4 w-4/5"></div>
                </div>

                {/* Features Grid */}
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {Array(4)
                    .fill(0)
                    .map((_, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="skeleton h-5 w-5 rounded-full shrink-0"></div>
                        <div className="skeleton h-4 w-32"></div>
                      </li>
                    ))}
                </ul>

                {/* Button Skeleton */}
                <div className="pt-4">
                  <div className="skeleton h-14 w-48 rounded-lg"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ServicesLoading;
