"use client";
import Link from "next/link";
import { useState } from "react";
// Swapped to Lucide-React
import { Eye, EyeOff, LogIn } from "lucide-react";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useSearchParams } from "next/navigation";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const params = useSearchParams();

  const callbackUrl = params.get("callbackUrl") || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (!result.ok) {
        toast.error("Wrong email or password!");
        setLoading(false);
      } else {
        toast.success("Login Successful!");
        setTimeout(() => {
          window.location.href = callbackUrl;
        }, 600);
      }
    } catch (error) {
      toast.error("Something went wrong! Try again.");
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleLogin} className="space-y-4">
        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-neutral mb-1">
            Email
          </label>
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full focus:input-primary"
            required
            disabled={loading}
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-neutral mb-1">
            Password
          </label>
          <div className="relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Your Password"
              className="input input-bordered w-full pr-12 focus:input-primary"
              required
              disabled={loading}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral/40 hover:text-primary transition-colors"
            >
              {/* Lucide Icons Implementation */}
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        {/* Forgot password */}
        <div className="text-right">
          <Link
            href="/forgot-password"
            className="text-sm text-primary hover:underline font-medium"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Login button */}
        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary text-white btn-block gap-2 text-lg"
        >
          {loading ? (
            <span className="loading loading-spinner loading-md"></span>
          ) : (
            <>
              <LogIn size={20} />
              Login
            </>
          )}
        </button>
      </form>

      {/* Register toggle */}
      <p className="text-center text-sm text-neutral/60 mt-6">
        Don&apos;t have an account?{" "}
        <Link
          href={`/register?callbackUrl=${encodeURIComponent(callbackUrl)}`}
          className="text-secondary font-bold hover:underline"
        >
          Create One
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
