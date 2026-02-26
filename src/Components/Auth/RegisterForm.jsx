"use client";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Eye, EyeOff, UserPlus, CreditCard, Phone } from "lucide-react";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const params = useSearchParams();

  const inputClassNames = `input input-bordered w-full focus:input-primary disabled:bg-base-200 transition-all duration-200`;

  const validatePassword = (pass) => {
    const hasUpperCase = /[A-Z]/.test(pass);
    const hasLowerCase = /[a-z]/.test(pass);
    const isLongEnough = pass.length >= 6;

    if (!isLongEnough) return "Password must be at least 6 characters.";
    if (!hasUpperCase) return "Password needs at least one uppercase letter.";
    if (!hasLowerCase) return "Password needs at least one lowercase letter.";
    return null;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setErr("");

    const formData = {
      nid: e.target.nid.value,
      name: e.target.name.value,
      email: e.target.email.value,
      contact: e.target.contact.value,
      password: e.target.password.value,
    };

    // Validation Check
    const passwordError = validatePassword(formData.password);
    if (passwordError) {
      setErr(passwordError);
      return;
    }

    setLoading(true);
    const callbackUrl = params.get("callbackUrl") || "/";

    try {
      console.log("Registering User:", formData);
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate server delay

      toast.success("Account created successfully!");
      window.location.href = callbackUrl;
    } catch (error) {
      toast.error("Registration failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleRegister} className="space-y-4">
      {/* NID Number */}
      <div>
        <label className="label font-bold text-xs uppercase opacity-70">
          NID Number
        </label>
        <div className="relative">
          <CreditCard
            className="absolute left-3 top-1/2 -translate-y-1/2 opacity-30"
            size={18}
          />
          <input
            name="nid"
            type="text"
            placeholder="19XXXXXXXXXXX"
            className={`${inputClassNames} pl-5`}
            required
            disabled={loading}
          />
        </div>
      </div>

      {/* Full Name */}
      <div>
        <label className="label font-bold text-xs uppercase opacity-70">
          Full Name
        </label>
        <input
          name="name"
          type="text"
          placeholder="Enter your name"
          className={inputClassNames}
          required
          disabled={loading}
        />
      </div>

      {/* Email & Contact Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="label font-bold text-xs uppercase opacity-70">
            Email Address
          </label>
          <input
            name="email"
            type="email"
            placeholder="email@example.com"
            className={inputClassNames}
            required
            disabled={loading}
          />
        </div>
        <div>
          <label className="label font-bold text-xs uppercase opacity-70">
            Contact Number
          </label>
          <div className="relative">
            <Phone
              className="absolute left-3 top-1/2 -translate-y-1/2 opacity-30"
              size={18}
            />
            <input
              name="contact"
              type="tel"
              placeholder="01XXXXXXXXX"
              className={`${inputClassNames} pl-10`}
              required
              disabled={loading}
            />
          </div>
        </div>
      </div>

      {/* Password */}
      <div>
        <label className="label font-bold text-xs uppercase opacity-70">
          Password
        </label>
        <div className="relative">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="6+ chars, 1 Upper, 1 Lower"
            className={`${inputClassNames} pr-12 ${err ? "border-error" : ""}`}
            required
            disabled={loading}
            onChange={() => setErr("")} // Clear error when typing
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 opacity-40 hover:opacity-100"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        {err ? (
          <p className="mt-1 text-xs text-error font-semibold flex items-center gap-1">
            ⚠️ {err}
          </p>
        ) : (
          <p className="mt-1 text-[10px] opacity-50 italic">
            Must include at least 6 characters, one uppercase and one lowercase
            letter.
          </p>
        )}
      </div>

      {/* Register button */}
      <button
        type="submit"
        disabled={loading}
        className="btn btn-primary btn-block text-white text-lg gap-2 mt-4 shadow-lg"
      >
        {loading ? (
          <span className="loading loading-spinner"></span>
        ) : (
          <>
            <UserPlus size={20} />
            Create Account
          </>
        )}
      </button>
    </form>
  );
};

export default RegisterForm;
