"use client";

import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
  return (
    <Toaster
      position="top-right" // Standard position for web apps to avoid blocking mobile navs
      reverseOrder={false}
      gutter={12}
      containerStyle={{
        top: 40,
        right: 20,
      }}
      toastOptions={{
        duration: 4000,
        style: {
          padding: "16px 24px",
          borderRadius: "16px",
          fontSize: "15px",
          fontWeight: "500",
          background: "#ffffff",
          color: "#1f2937", // text-neutral
          border: "1px solid #e5e7eb", // base-200
          boxShadow:
            "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        },

        // SUCCESS TOAST: Using your Primary Care Color
        success: {
          iconTheme: {
            primary: "#10b981", // Emerald-500 (Success)
            secondary: "#fff",
          },
          style: {
            border: "1px solid #10b981",
            background: "#f0fdf4", // Light green background
          },
        },

        // ERROR TOAST: Using a softer Rose/Red
        error: {
          iconTheme: {
            primary: "#f43f5e", // Rose-500
            secondary: "#fff",
          },
          style: {
            border: "1px solid #f43f5e",
            background: "#fff1f2", // Light red background
          },
        },

        // LOADING TOAST: Useful for the "Saving Booking" state
        loading: {
          style: {
            border: "1px solid #3b82f6",
            background: "#eff6ff",
          },
        },
      }}
    />
  );
};

export default ToasterProvider;
