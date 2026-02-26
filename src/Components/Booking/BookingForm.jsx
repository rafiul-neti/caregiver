"use client";
import React, { useState, useMemo } from "react";
import {
  Clock,
  MapPin,
  ChevronRight,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import toast from "react-hot-toast";

const PRICE_MAP = {
  "baby-care": 500,
  "elderly-care": 450,
  "sick-care": 600,
};

const BookingForm = ({ serviceId, divisions, districts }) => {
  const basePrice = PRICE_MAP[serviceId] || 0;

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    duration: 1,
    days: 1,
    startDate: "", // Re-added the timeline logic
    division: "",
    district: "",
    address: "",
  });

  // Filters the warehouses.json (districts prop) where 'region' matches selected 'division'
  const availableDistricts = useMemo(() => {
    if (!formData.division) return [];
    return districts.filter((item) => item.region === formData.division);
  }, [formData.division, districts]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "division") {
      // Reset district if division changes to maintain data integrity
      setFormData((prev) => ({ ...prev, division: value, district: "" }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const totalCost = useMemo(() => {
    return formData.duration * formData.days * basePrice;
  }, [formData.duration, formData.days, basePrice]);

  const handleBooking = async () => {
    setLoading(true);
    try {
      // Simulate API call to save to MongoDB
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Booking saved! Status: Pending");
      setStep(4);
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 py-12">
      <div className="max-w-3xl mx-auto px-6">
        {/* Step Indicator */}
        <ul className="steps w-full mb-12">
          <li className={`step ${step >= 1 ? "step-primary" : ""}`}>
            Duration
          </li>
          <li className={`step ${step >= 2 ? "step-primary" : ""}`}>
            Location
          </li>
          <li className={`step ${step >= 3 ? "step-primary" : ""}`}>Review</li>
        </ul>

        <div className="card bg-base-100 shadow-2xl">
          <div className="card-body">
            {/* STEP 1: DURATION & DATE */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="card-title text-2xl font-black text-neutral">
                  <Clock className="text-primary" /> Select Timing
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-control">
                    <label className="label font-bold text-xs uppercase opacity-60">
                      Hours Per Day
                    </label>
                    <input
                      type="number"
                      name="duration"
                      value={formData.duration}
                      onChange={handleInputChange}
                      min="1"
                      max="24"
                      className="input input-bordered focus:border-primary"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label font-bold text-xs uppercase opacity-60">
                      Total Days
                    </label>
                    <input
                      type="number"
                      name="days"
                      value={formData.days}
                      onChange={handleInputChange}
                      min="1"
                      className="input input-bordered focus:border-primary"
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label font-bold text-xs uppercase opacity-60 block">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> Start Date
                    </span>
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    className="input w-full input-bordered focus:border-primary"
                    min={new Date().toISOString().split("T")[0]} // Prevents past date selection
                  />
                </div>
                <button
                  onClick={() => setStep(2)}
                  className="btn btn-primary btn-block gap-2"
                  disabled={!formData.startDate}
                >
                  Next: Location <ChevronRight size={18} />
                </button>
              </div>
            )}

            {/* STEP 2: LOCATION (CASCADING DROPDOWNS) */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="card-title text-2xl font-black text-neutral">
                  <MapPin className="text-primary" /> Service Location
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <select
                    name="division"
                    className="select select-bordered w-full"
                    value={formData.division}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled>
                      Select Division
                    </option>
                    {divisions.map((div, i) => (
                      <option key={i} value={div}>
                        {div}
                      </option>
                    ))}
                  </select>

                  <select
                    name="district"
                    className="select select-bordered w-full"
                    value={formData.district}
                    onChange={handleInputChange}
                    disabled={!formData.division}
                  >
                    <option value="" disabled>
                      {formData.division
                        ? "Select District"
                        : "Select Division First"}
                    </option>
                    {availableDistricts.map((item, i) => (
                      <option key={i} value={item.district}>
                        {item.district}
                      </option>
                    ))}
                  </select>
                </div>
                <textarea
                  name="address"
                  placeholder="Street Address, House No, etc."
                  value={formData.address}
                  onChange={handleInputChange}
                  className="textarea textarea-bordered w-full h-24"
                ></textarea>
                <div className="flex gap-4">
                  <button onClick={() => setStep(1)} className="btn btn-ghost">
                    Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="btn btn-primary flex-1"
                    disabled={!formData.district || !formData.address}
                  >
                    Review Order
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: REVIEW & DYNAMIC PRICE */}
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="card-title text-2xl font-black text-neutral uppercase tracking-widest">
                  Final Summary
                </h2>
                <div className="bg-base-200 p-6 rounded-3xl space-y-4">
                  <div className="flex justify-between border-b border-base-300 pb-2">
                    <span className="opacity-60">Service</span>
                    <span className="font-bold text-primary uppercase">
                      {serviceId.replace("-", " ")}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-base-300 pb-2">
                    <span className="opacity-60">Schedule</span>
                    <span className="font-bold">
                      {formData.startDate} ({formData.days} days)
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-base-300 pb-2">
                    <span className="opacity-60">Location</span>
                    <span className="font-bold text-right">
                      {formData.district}, {formData.division}
                    </span>
                  </div>
                  <div className="flex justify-between text-2xl font-black pt-2">
                    <span>Total Cost</span>
                    <span className="text-secondary font-mono">
                      ৳{totalCost}
                    </span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => setStep(2)}
                    className="btn btn-ghost"
                    disabled={loading}
                  >
                    Back
                  </button>
                  <button
                    onClick={handleBooking}
                    className={`btn btn-primary flex-1 ${loading ? "loading" : ""}`}
                    disabled={loading}
                  >
                    Confirm Booking
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: SUCCESS UI */}
            {step === 4 && (
              <div className="text-center py-10 space-y-6">
                <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={40} className="text-success" />
                </div>
                <h2 className="text-3xl font-black text-neutral">
                  Request Received!
                </h2>
                <p className="text-neutral/60 px-10">
                  We are currently matching your request with our best-rated
                  caregivers in <b>{formData.district}</b>.
                </p>
                <button
                  onClick={() => (window.location.href = "/")}
                  className="btn btn-outline btn-wide"
                >
                  Back to Home
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
