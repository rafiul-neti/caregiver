import { getBookingData } from "@/actions/server/booking";
import Image from "next/image";
import { MapPin, Calendar, Clock, Banknote } from "lucide-react";
import { SERVICES } from "@/data/services/services";
import Link from "next/link";

const MyBookingsPage = async () => {
  const bookings = await getBookingData();

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Header Section */}
      <div className="mb-10 text-center sm:text-left">
        <h1 className="text-3xl font-extrabold text-neutral tracking-tight">
          My <span className="text-primary">Bookings</span>
        </h1>
        <p className="mt-2 text-neutral/60">
          Manage your scheduled care services and history.
        </p>
      </div>

      {bookings.length === 0 ? (
        /* Empty State */
        <div className="card bg-base-100 shadow-xl p-12 text-center flex flex-col items-center">
          <div className="bg-primary/10 p-4 rounded-full mb-4">
            <Calendar className="text-primary w-12 h-12" />
          </div>
          <h2 className="text-xl font-bold">No bookings found</h2>
          <p className="text-neutral/60 mb-6">
            You haven&apos;t scheduled any services yet.
          </p>
          <Link href="/services" className="btn btn-primary">
            Book a Service Now
          </Link>
        </div>
      ) : (
        <div className="grid gap-6">
          {bookings.map((booking) => {
            // FIND the matching service details from your local file
            const serviceInfo = SERVICES.find(
              (s) => s.id === booking.serviceId,
            );

            return (
              <div
                key={booking._id}
                className="card card-side bg-base-100 shadow-xl border border-base-300"
              >
                {/* Service Image from your services.js file */}
                <figure className="w-1/3 hidden md:block relative">
                  <Image
                    src={serviceInfo?.image}
                    alt={serviceInfo?.title}
                    fill
                    className="object-cover"
                  />
                </figure>

                <div className="card-body">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="card-title text-2xl">
                        {serviceInfo?.title}
                      </h2>
                      <p className="text-sm text-neutral/60">
                        {serviceInfo?.description}
                      </p>
                    </div>
                    <div className="badge badge-primary">{booking.status}</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-primary" />{" "}
                      {booking.startDate}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-primary" />{" "}
                      {booking.duration}h / {booking.days} days
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-primary" />{" "}
                      {booking.address}, {booking.district}
                    </div>
                    <div className="flex items-center gap-2">
                      <Banknote size={16} className="text-primary" />{" "}
                      {booking.totalCost}
                    </div>
                  </div>

                  <div className="card-actions justify-end mt-4">
                    <button className="btn btn-error btn-outline btn-sm hover:text-white">
                      Cancel Booking
                    </button>
                    <button className="btn btn-primary btn-sm">
                      Contact Support
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyBookingsPage;
