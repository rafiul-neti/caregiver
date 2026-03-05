import React from "react";

const LoginLoading = () => {
  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-base-100 px-6">
      <div className="max-w-md w-full space-y-8">
        {/* Title & Subtitle Skeleton */}
        <div className="text-center space-y-3">
          <div className="skeleton h-10 w-48 mx-auto"></div> {/* Page Title */}
          <div className="skeleton h-4 w-64 mx-auto opacity-50"></div>{" "}
          {/* Subtitle */}
        </div>

        {/* Form Skeleton Card */}
        <div className="bg-base-100 p-8 rounded-3xl border border-base-200 shadow-xl space-y-6">
          {/* Email Field */}
          <div className="space-y-2">
            <div className="skeleton h-4 w-16"></div> {/* Label */}
            <div className="skeleton h-12 w-full rounded-lg"></div>{" "}
            {/* Input */}
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <div className="skeleton h-4 w-20"></div> {/* Label */}
            <div className="skeleton h-12 w-full rounded-lg"></div>{" "}
            {/* Input */}
          </div>

          {/* Forgot Password Link */}
          <div className="flex justify-end">
            <div className="skeleton h-4 w-28"></div>
          </div>

          {/* Login Button */}
          <div className="skeleton h-14 w-full rounded-lg mt-4"></div>

          {/* Social Login Separator (If you have one) */}
          <div className="flex items-center gap-4 py-2">
            <div className="h-px bg-base-300 flex-1"></div>
            <div className="skeleton h-3 w-8"></div>
            <div className="h-px bg-base-300 flex-1"></div>
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <div className="skeleton h-12 w-full rounded-lg"></div>
            <div className="skeleton h-12 w-full rounded-lg"></div>
          </div>
        </div>

        {/* Register Footer */}
        <div className="flex justify-center gap-2 pt-2">
          <div className="skeleton h-4 w-40"></div>
          <div className="skeleton h-4 w-20"></div>
        </div>
      </div>
    </main>
  );
};

export default LoginLoading;
