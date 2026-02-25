"use client";

import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Eye, EyeOff, UserPlus } from "lucide-react";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const params = useSearchParams();

  const inputClassNames = `input input-bordered w-full focus:input-primary disabled:bg-base-200 transition-all duration-200`;

  const handleRegister = async (e) => {
    e.preventDefault();
    setErr("");
    setLoading(true);

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const callbackUrl = params.get("callbackUrl") || "/";

    // Client-side validation
    if (password.length < 8) {
      setErr("Password must be at least 8 characters long!");
      setLoading(false);
      return;
    }

    // --- UI TESTING MODE ---
    // Since postUser is missing, we simulate a 2-second server delay
    try {
      console.log("Registering user:", { name, email });

      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate network lag

      toast.success("Registration Successful! (Demo Mode)");

      // Redirecting user to login or home
      setTimeout(() => {
        window.location.href = callbackUrl;
      }, 1000);
    } catch (error) {
      toast.error("Something went wrong.");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleRegister} className="space-y-4">
      {/* Full Name */}
      <div>
        <label className="block text-sm text-neutral mb-1 font-semibold">
          Your Name
        </label>
        <input
          name="name"
          type="text"
          placeholder="Full Name"
          className={inputClassNames}
          required
          disabled={loading}
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm text-neutral mb-1 font-semibold">
          Email
        </label>
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          className={inputClassNames}
          required
          disabled={loading}
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm text-neutral mb-1 font-semibold">
          Password
        </label>
        <div className="relative">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="At least 8 characters"
            className={`${inputClassNames} pr-12 ${err ? "border-error focus:input-error" : ""}`}
            required
            disabled={loading}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral/40 hover:text-primary transition-colors"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        {err && <p className="mt-1 text-xs text-error font-medium">{err}</p>}
      </div>

      {/* Register button */}
      <button
        type="submit"
        disabled={loading}
        className="btn btn-primary btn-block text-white text-lg gap-2 mt-2"
      >
        {loading ? (
          <span className="loading loading-spinner loading-md"></span>
        ) : (
          <>
            <UserPlus size={20} />
            Registration
          </>
        )}
      </button>
    </form>
  );
};

export default RegisterForm;
