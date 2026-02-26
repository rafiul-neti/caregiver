import BookingForm from "@/Components/Booking/BookingForm";
import divisionsData from "@/data/division.json";
import districts from "@/data/warehouses.json";
import React from "react";

const BookingPage = async ({ params }) => {
  const { id: serviceId } = await params;
  return (
    <BookingForm
      serviceId={serviceId}
      divisions={divisionsData}
      districts={districts}
    />
  );
};

export default BookingPage;
