import React from "react";

const BookingsSkeleton = () => {
  // We render 3 skeleton cards to fill the page
  const skeletonCards = Array(3).fill(0);

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Header Skeleton */}
      <div className="mb-10 text-center sm:text-left">
        <div className="skeleton h-10 w-64 mb-2 mx-auto sm:mx-0"></div>
        <div className="skeleton h-4 w-80 mx-auto sm:mx-0"></div>
      </div>

      <div className="grid gap-6">
        {skeletonCards.map((_, index) => (
          <div
            key={index}
            className="card card-side bg-base-100 shadow-xl border border-base-300 overflow-hidden h-auto md:h-64"
          >
            {/* Image Skeleton - Hidden on mobile, matches your figure w-1/3 */}
            <div className="w-1/3 hidden md:block">
              <div className="skeleton h-full w-full rounded-none"></div>
            </div>

            <div className="card-body w-full md:w-2/3">
              <div className="flex justify-between items-start">
                <div className="w-full space-y-3">
                  {/* Title */}
                  <div className="skeleton h-8 w-3/4"></div>
                  {/* Description lines */}
                  <div className="skeleton h-3 w-full"></div>
                  <div className="skeleton h-3 w-5/6"></div>
                </div>
                {/* Status Badge */}
                <div className="skeleton h-6 w-20 rounded-full ml-4"></div>
              </div>

              {/* Grid Info Skeleton */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="skeleton h-4 w-24"></div>
                <div className="skeleton h-4 w-24"></div>
                <div className="skeleton h-4 w-32"></div>
                <div className="skeleton h-4 w-20"></div>
              </div>

              {/* Buttons Skeleton */}
              <div className="card-actions justify-end mt-auto">
                <div className="skeleton h-8 w-28 rounded-lg"></div>
                <div className="skeleton h-8 w-32 rounded-lg"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingsSkeleton;
