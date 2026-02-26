"use client";
import React, { useState } from "react";
import { Send, MessageSquare } from "lucide-react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      toast.success("Message sent! Our care team will contact you shortly.");
      setLoading(false);
      e.target.reset();
    }, 1500);
  };

  return (
    <div className="lg:col-span-2">
      <div className="card bg-base-100 shadow-2xl">
        <form onSubmit={handleSubmit} className="card-body gap-6">
          <h2 className="card-title text-2xl font-black text-neutral">
            <MessageSquare className="text-primary" /> Send a Message
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label font-bold text-xs uppercase">
                Your Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="input w-full input-bordered focus:input-primary"
                required
              />
            </div>
            <div className="form-control">
              <label className="label font-bold text-xs uppercase">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="input w-full input-bordered focus:input-primary"
                required
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label font-bold text-xs uppercase block">
              Subject
            </label>
            <select
              defaultValue=""
              className="select select-bordered focus:select-primary w-full"
            >
              <option value="" disabled>
                Pick a reason
              </option>
              <option>Inquiry about Service</option>
              <option>Billing Question</option>
              <option>Caregiver Feedback</option>
              <option>Partnership/Career</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label font-bold text-xs uppercase block">
              Message
            </label>
            <textarea
              className="textarea textarea-bordered h-32 focus:textarea-primary w-full"
              placeholder="Tell us how we can help your family..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className={`btn btn-primary btn-block text-lg ${loading ? "loading" : ""}`}
            disabled={loading}
          >
            {!loading && <Send size={18} />}
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
