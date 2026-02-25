import BookingForm from "@/Components/Booking/BookingForm";
import React from "react";

const BookingPage = async ({ params }) => {
  const { id: serviceId } = await params;
  return <BookingForm serviceId={serviceId} />;
};

export default BookingPage;
