import React from "react";

const HomeLoading = () => {
  return (
    <main className="min-h-screen bg-base-100">
      {/* 1. HERO SKELETON */}
      <section className="bg-neutral py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Text Content */}
          <div className="flex-1 space-y-6 w-full text-center lg:text-left">
            <div className="skeleton h-12 md:h-20 w-3/4 bg-neutral-focus mx-auto lg:mx-0"></div>
            <div className="skeleton h-4 w-full bg-neutral-focus"></div>
            <div className="skeleton h-4 w-5/6 bg-neutral-focus mx-auto lg:mx-0"></div>
            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <div className="skeleton h-14 w-40 rounded-lg bg-neutral-focus"></div>
              <div className="skeleton h-14 w-40 rounded-lg bg-neutral-focus opacity-50"></div>
            </div>
          </div>
          {/* Right: Hero Image Placeholder */}
          <div className="flex-1 w-full hidden lg:block">
            <div className="skeleton aspect-square max-w-md mx-auto rounded-3xl bg-neutral-focus"></div>
          </div>
        </div>
      </section>

      {/* 2. STATS/TRUST BAR SKELETON */}
      <section className="py-12 bg-base-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="flex flex-col items-center space-y-2">
                <div className="skeleton h-8 w-20"></div>
                <div className="skeleton h-3 w-24"></div>
              </div>
            ))}
        </div>
      </section>

      {/* 3. SERVICE PREVIEW GRID SKELETON */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4 flex flex-col items-center">
            <div className="skeleton h-10 w-64"></div>
            <div className="skeleton h-4 w-96"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="card bg-base-100 border border-base-200 shadow-xl overflow-hidden"
                >
                  <div className="skeleton h-56 w-full rounded-none"></div>
                  <div className="card-body">
                    <div className="skeleton h-7 w-2/3 mb-2"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-5/6"></div>
                    <div className="card-actions justify-end mt-4">
                      <div className="skeleton h-10 w-24 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* 4. "WHY CHOOSE US" SKELETON */}
      <section className="py-20 bg-base-200/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-10">
          <div className="flex-1">
            <div className="skeleton h-64 w-full rounded-3xl"></div>
          </div>
          <div className="flex-1 space-y-6">
            <div className="skeleton h-10 w-3/4"></div>
            <div className="space-y-4">
              <div className="skeleton h-12 w-full rounded-xl"></div>
              <div className="skeleton h-12 w-full rounded-xl"></div>
              <div className="skeleton h-12 w-full rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomeLoading;
