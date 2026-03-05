"use server";

import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

const { collections } = require("@/lib/dbConnect");

const bookingCollection = collections("bookings");

export const postBookingData = async (payload) => {
  try {
    // 1. Security Check: Get user from Server Session
    const session = await getServerSession(authOptions);
    if (!session) throw new Error("Unauthorized access.");

    // 2. Optimized Logic:
    const finalData = {
      ...payload,
      userEmail: session.user.email, // Use session email for integrity
      createdAt: new Date(),
      status: "pending",
    };

    // 3. Perform the Insert
    const result = await bookingCollection.insertOne(finalData);

    if (!result.acknowledged) {
      throw new Error("Failed to save booking.");
    }

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
