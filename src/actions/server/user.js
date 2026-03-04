"use server";

import { collections } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

const usersCollection = collections("users");

export async function generateUserId() {
  const prefix = "CARE-USER";
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const random = crypto.randomUUID().toString("hex").toUpperCase();

  return `${prefix}-${date}-${random}`;
}

export const postUser = async (payload) => {
  const { nid, name, email, contact, password } = payload;

  // 1. Check for Missing Fields
  if (!nid || !name || !email || !contact || !password) {
    throw new Error("All fields are required.");
  }

  // 2. Name Validation (Min 2 chars)
  if (name.length < 2) {
    throw new Error("Name is too short.");
  }

  // 3. Email Validation (Regex)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error("Invalid email format.");
  }

  // 4. NID Validation (Bangladesh NID is usually 10, 13, or 17 digits)
  const nidRegex = /^\d{10}$|^\d{13}$|^\d{17}$/;
  if (!nidRegex.test(nid)) {
    throw new Error("Invalid NID number. Must be 10, 13, or 17 digits.");
  }

  // 5. Contact Validation (BD Numbers usually start with 01 and are 11 digits)
  const contactRegex = /^(?:\+88|88)?(01[3-9]\d{8})$/;
  if (!contactRegex.test(contact)) {
    throw new Error("Invalid Bangladesh contact number.");
  }

  // 6. Password Complexity (Matches your UI requirements)
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  if (password.length < 6 || !hasUpperCase || !hasLowerCase) {
    throw new Error("Password does not meet security requirements.");
  }

  // --- SERVER LOGIC START ---
  try {
    // 2. Check if user/NID already exists
    const isExist = await usersCollection.findOne({
      $or: [{ email: email }, { nid: nid }],
    });
    if (isExist) {
      return { message: "an user already exists with this email!" };
    }

    // 3. Hash password (using bcrypt)
    const newUser = {
      ...payload,
      userId: await generateUserId(),
      provider: "credentials",
      password: await bcrypt.hash(password, 14),
      role: "user",
    };

    // 4. Save to MongoDB
    const result = await usersCollection.insertOne(newUser);

    if (result.acknowledged) {
      return {
        ...result,
        insertedId: result.insertedId.toString(),
      };
    }
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Internal Server Error. Please try again later.");
  }
};

export const loginUser = async (payload) => {
  const { email, password } = payload;

  //checking the payload is valid or not
  if (
    !email ||
    !password ||
    !typeof email === "string" ||
    !email.includes("@")
  ) {
    return null;
  }

  // checking the user is exist or not
  const user = await usersCollection.findOne({ email });
  if (!user) {
    return null;
  }

  // checking password
  const isMatched = await bcrypt.compare(password, user.password);
  if (isMatched) return user;
  else return null;
};