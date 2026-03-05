import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import ToasterProvider from "@/Components/Providers/ToasterProvider";
import NextAuthProvider from "@/Components/Providers/NextAuthProvider";
// import Banner from "@/Components/Home/Banner/Banner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://caregiver-five.vercel.app/"),

  title: {
    default: "Care.xyz | Professional Caregiving Services in Bangladesh",
    template: "%s | Care.xyz",
  },

  description:
    "Expert care for baby, elderly, and sick people. Verified caregivers providing compassionate support at your home.",

  applicationName: "Care.xyz",

  keywords: [
    "caregiver",
    "nursing home",
    "baby care",
    "elderly care",
    "Care.xyz",
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  openGraph: {
    type: "website",
    siteName: "Care.xyz",
    url: "https://caregiver-five.vercel.app/",
    title: "Care.xyz | Compassionate Care for Every Stage of Life",
    description: "Book verified caregivers for your family.",
    images: [
      {
        url: "https://i.ibb.co.com/HDLZD7wr/care-home.png",
        width: 1200,
        height: 630,
        alt: "Care.xyz Home Page",
      },
    ],
  },

  alternates: {
    canonical: "https://caregiver-five.vercel.app/",
  },
};

export default function RootLayout({ children }) {
  return (
    <NextAuthProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md">
            <div className="py-2 md:w-11/12 mx-auto">
              <Navbar />
            </div>
          </header>

          <main>
            <section>{children}</section>
          </main>

          <footer>
            <Footer />
          </footer>
          <ToasterProvider />
        </body>
      </html>
    </NextAuthProvider>
  );
}
