"use client";
import React, { useRef, useState } from "react";
import { Trash2, AlertTriangle } from "lucide-react";
import { deleteBooking } from "@/actions/server/booking";
import toast from "react-hot-toast";

const CancelBookingButton = ({ bookingId }) => {
  const [loading, setLoading] = useState(false);
  const deleteModalRef = useRef(null)

  const handleDelete = async () => {
    setLoading(true);
    const res = await deleteBooking(bookingId);

    if (res.success) {
      toast.success("Booking cancelled successfully");
      // Close modal (DaisyUI checkbox/method logic)
      deleteModalRef.current.close();
    } else {
      toast.error(res.error || "Failed to cancel");
      deleteModalRef.current.close();
    }
    setLoading(false);
  };

  return (
    <>
      {/* 1. The Trigger Button */}
      <button
        className="btn btn-error btn-outline btn-sm gap-2 hover:text-white"
        onClick={() => deleteModalRef.current.showModal()}
      >
        <Trash2 size={14} /> Cancel Booking
      </button>

      {/* 2. The Confirmation Modal */}
      <dialog
        ref={deleteModalRef}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box border-t-4 border-error">
          <div className="flex items-center gap-3 text-error mb-4">
            <AlertTriangle size={24} />
            <h3 className="font-bold text-lg">Confirm Cancellation</h3>
          </div>
          <p className="py-4 text-neutral/70">
            Are you sure you want to cancel this booking? This action cannot be
            undone.
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* If there is a button in form, it will close the modal */}
              <button className="btn btn-ghost" disabled={loading}>
                No, Keep it
              </button>
            </form>
            <button
              className={`btn btn-error text-white ${loading ? "loading" : ""}`}
              onClick={handleDelete}
              disabled={loading}
            >
              Yes, Cancel Booking
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default CancelBookingButton;
