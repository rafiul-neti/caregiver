"use client";
import React, { useState, useEffect, useMemo } from "react";
import {
  MapPin,
  Clock,
  Calendar,
  creditCard,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import toast from "react-hot-toast";

// We'll use the same price mapping we established in the Detail page
const PRICE_MAP = {
  "baby-care": 500,
  "elderly-care": 450,
  "sick-care": 600,
};

const BookingForm = ({ serviceId }) => {
  const basePrice = PRICE_MAP[serviceId] || 0;

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    duration: 1, // Hours
    days: 1,
    division: "",
    district: "",
    address: "",
    startDate: "",
  });

  // Calculate Total Dynamically
  const totalCost = useMemo(() => {
    return formData.duration * formData.days * basePrice;
  }, [formData.duration, formData.days, basePrice]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBooking = async () => {
    setLoading(true);
    try {
      // This is where your Server Action / API call goes
      // const response = await saveBooking({ ...formData, serviceId, totalCost, status: 'pending' });

      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate DB save
      toast.success("Booking Request Sent! Status: Pending");
      setStep(4); // Move to Success Step
    } catch (error) {
      toast.error("Failed to save booking.");
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
            {/* STEP 1: DURATION */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="card-title text-2xl font-black text-neutral uppercase tracking-tight">
                  <Clock className="text-primary" /> Select Duration
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-control">
                    <label className="label font-bold">Hours Per Day</label>
                    <input
                      type="number"
                      name="duration"
                      min="1"
                      max="24"
                      value={formData.duration}
                      onChange={handleInputChange}
                      className="input w-full input-bordered focus:input-primary"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label font-bold">Total Days</label>
                    <input
                      type="number"
                      name="days"
                      min="1"
                      value={formData.days}
                      onChange={handleInputChange}
                      className="input w-full input-bordered focus:input-primary"
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label font-bold">Start Date</label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    className="input w-full input-bordered focus:input-primary"
                  />
                </div>
                <button
                  onClick={() => setStep(2)}
                  className="btn btn-primary btn-block gap-2"
                >
                  Next: Location <ChevronRight size={18} />
                </button>
              </div>
            )}

            {/* STEP 2: LOCATION */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="card-title text-2xl font-black text-neutral uppercase tracking-tight">
                  <MapPin className="text-primary" /> Service Location
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    placeholder="Division"
                    name="division"
                    value={formData.division}
                    onChange={handleInputChange}
                    className="input w-full input-bordered"
                  />
                  <input
                    placeholder="District"
                    name="district"
                    value={formData.district}
                    onChange={handleInputChange}
                    className="input w-full input-bordered"
                  />
                </div>
                <textarea
                  name="address"
                  placeholder="Full Detailed Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="textarea w-full textarea-bordered h-24"
                ></textarea>
                <div className="flex gap-4">
                  <button onClick={() => setStep(1)} className="btn btn-ghost">
                    Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="btn btn-primary flex-1"
                  >
                    Review Booking
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: REVIEW & DYNAMIC COST */}
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="card-title text-2xl font-black text-neutral uppercase tracking-tight">
                  Final Review
                </h2>
                <div className="bg-base-200 p-6 rounded-2xl space-y-3">
                  <div className="flex justify-between">
                    <span>Service ID:</span>{" "}
                    <span className="font-bold uppercase text-primary">
                      {serviceId}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Rate:</span> <span>৳{basePrice}/hr</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Hours:</span>{" "}
                    <span>{formData.duration * formData.days} hrs</span>
                  </div>
                  <div className="divider"></div>
                  <div className="flex justify-between text-xl font-black">
                    <span>Total Cost:</span>
                    <span className="text-secondary">৳{totalCost}</span>
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
                    Confirm & Request Booking
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: SUCCESS */}
            {step === 4 && (
              <div className="text-center py-10 space-y-6">
                <div className="flex justify-center">
                  <div className="bg-success/20 p-6 rounded-full">
                    <CheckCircle2 size={64} className="text-success" />
                  </div>
                </div>
                <h2 className="text-3xl font-black text-neutral">
                  Booking Pending!
                </h2>
                <p className="text-neutral/60 max-w-sm mx-auto">
                  Your request has been sent to our team. We will verify a
                  caregiver for your location and update you shortly.
                </p>
                <button
                  onClick={() => (window.location.href = "/")}
                  className="btn btn-outline"
                >
                  Return Home
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
