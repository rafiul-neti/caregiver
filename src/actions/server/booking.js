"use server";

import { authOptions } from "@/lib/authOptions";
import { bookingInvoice } from "@/lib/bookingInvoice";
import { sendEmail } from "@/lib/sendEmail";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

const { collections } = require("@/lib/dbConnect");

const bookingCollection = collections("bookings");

export const postBookingData = async (payload) => {
  try {
    // 1. Security Check
    const session = await getServerSession(authOptions);
    if (!session) throw new Error("Unauthorized access.");

    // 2. Prepare Data
    const formattedServiceName = payload.serviceId
      .split("-")
      .join(" ")
      .toUpperCase();

    const finalData = {
      ...payload,
      userEmail: session.user.email,
      createdAt: new Date(),
      status: "pending",
    };

    // 3. Perform the Insert
    const result = await bookingCollection.insertOne(finalData);

    if (!result.acknowledged) {
      throw new Error("Failed to save booking.");
    }

    // 4. Email Sending
    sendEmail({
      to: session.user.email,
      subject: `Booking Confirmed - ${formattedServiceName}`,
      html: bookingInvoice({
        serviceName: formattedServiceName,
        totalPrice: payload.totalCost,
        startDate: payload.startDate,
        location: `${payload.address}, ${payload.district}, ${payload.division}`,
      }),
    }).catch((err) => console.error("Background Email Error:", err));

    return {
      success: true,
      insertedId: result.insertedId.toString(),
    };
  } catch (error) {
    console.error("Booking Action Error:", error.message);
    return { success: false, error: error.message || "Server Error" };
  }
};

export const getBookingData = async () => {
  try {
    // 1. Session Check (Server-side)
    const session = await getServerSession(authOptions);

    // If no session, return empty or handle redirect.
    // Throwing error in a Server Action can crash the UI if not caught.
    if (!session?.user?.email) return [];

    // 2. The Query:
    const result = await bookingCollection
      .find({ userEmail: session.user.email })
      .sort({ createdAt: -1 })
      .toArray();

    // 3. Serializing ObjectIDs:
    // MongoDB _id is an object. Next.js Client Components can't read it.
    // We map it to a string to avoid "Plain Object" serialization errors.
    const serializedBookings = result.map((booking) => ({
      ...booking,
      _id: booking._id.toString(),
    }));

    return serializedBookings;
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return []; // Return empty array so the UI doesn't break
  }
};

export const deleteBooking = async (bookingId) => {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) return { success: false, error: "Unauthorized" };

    // Security: Check both the ID AND the userEmail
    // This prevents someone from deleting a booking by just guessing an ID
    const result = await bookingCollection.deleteOne({
      _id: new ObjectId(bookingId),
      userEmail: session.user.email,
    });

    if (result.deletedCount === 1) {
      // Refresh the data on the page automatically
      revalidatePath("/my-bookings");
      return { success: true };
    }

    return { success: false, error: "Booking not found or unauthorized" };
  } catch (error) {
    console.error("Delete Error:", error);
    return { success: false, error: "Server error" };
  }
};
