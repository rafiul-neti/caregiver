import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  Clock,
  ShieldCheck,
  MapPin,
  ArrowLeft,
  Star,
} from "lucide-react";

// Mock Data - In production, fetch this from your API/DB
const SERVICE_DATA = {
  "baby-care": {
    title: "Expert Baby Care",
    tagline: "Safe, nurturing environments for your little explorers.",
    description:
      "Our baby care service is designed to provide parents with peace of mind. We go beyond simple babysitting by focusing on developmental milestones, nutrition, and safety.",
    price: "500", // BDT per hour
    image:
      "https://images.pexels.com/photos/265987/pexels-photo-265987.jpeg?_gl=1*bi2yn5*_ga*MTE3NjY4Mzc3OS4xNzY1NzY0NTYy*_ga_8JE65Q40S6*czE3NzE5ODc3OTgkbzUkZzEkdDE3NzE5ODc4MjYkajMyJGwwJGgw",
    highlights: [
      "NID Verified Carers",
      "CPR & First Aid Trained",
      "Daily Activity Reports",
      "Flexible Scheduling",
    ],
    expectations: [
      "Initial consultation to understand child's routine.",
      "Engaging play-based learning activities.",
      "Safe feeding and hygiene maintenance.",
      "Real-time updates via our app dashboard.",
    ],
  },
  "elderly-care": {
    title: "Dignified Elderly Care",
    tagline: "Support for seniors to live independently with dignity.",
    description:
      "We provide compassionate companionship and physical assistance for seniors. Our goal is to enhance their quality of life through emotional support and daily aid.",
    price: "450",
    image:
      "https://images.pexels.com/photos/7551653/pexels-photo-7551653.jpeg?_gl=1*qohgnu*_ga*MTE3NjY4Mzc3OS4xNzY1NzY0NTYy*_ga_8JE65Q40S6*czE3NzE5ODc3OTgkbzUkZzEkdDE3NzE5ODc4OTgkajMzJGwwJGgw",
    highlights: [
      "Mobility Assistance",
      "Medication Management",
      "Companion Care",
      "24/7 Support Available",
    ],
    expectations: [
      "Personalized care plan for chronic conditions.",
      "Light housekeeping and meal preparation.",
      "Accompaniment to medical appointments.",
      "Cognitive engagement and social interaction.",
    ],
  },
  "sick-care": {
    title: "Specialized Sick Care",
    tagline: "Professional medical support in the comfort of your home.",
    description:
      "Recovering from surgery or managing a chronic condition requires more than just help; it requires clinical expertise. Our sick care service bridges the gap between hospital discharge and full recovery.",
    price: "600",
    image:
      "https://images.pexels.com/photos/6010794/pexels-photo-6010794.jpeg?_gl=1*1o0mxou*_ga*MTE3NjY4Mzc3OS4xNzY1NzY0NTYy*_ga_8JE65Q40S6*czE3NzE5ODc3OTgkbzUkZzEkdDE3NzE5ODc5ODAkajIwJGwwJGgw",
    highlights: [
      "Post-Operative Support",
      "Stroke Recovery",
      "Wound Care Specialists",
      "Oxygen Support Management",
    ],
    expectations: [
      "24/7 monitoring by certified medical assistants.",
      "Coordination with your primary physician.",
      "Professional administration of medications.",
      "Support with medical equipment setup at home.",
    ],
  },
};

const ServiceDetail = async ({ params }) => {
  const { id } = await params;
  const service = SERVICE_DATA[id];

  if (!service)
    return <div className="text-center py-20">Service not found.</div>;

  return (
    <main className="min-h-screen bg-base-100 pb-20">
      {/* 1. Header & Navigation */}
      <div className="bg-neutral py-12 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href="/services"
            className="flex items-center gap-2 text-primary hover:underline mb-6 text-sm font-bold uppercase tracking-wider"
          >
            <ArrowLeft size={16} /> All Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-black">{service.title}</h1>
          <p className="text-neutral-content/70 mt-4 text-lg max-w-2xl">
            {service.tagline}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* LEFT CONTENT: Detailed Info */}
          <div className="flex-1 space-y-10">
            {/* Main Image */}
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-lg">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>

            <section>
              <h2 className="text-2xl font-bold text-neutral mb-4">
                Service Overview
              </h2>
              <p className="text-neutral/70 text-lg leading-relaxed">
                {service.description}
              </p>
            </section>

            <section className="bg-base-200 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-neutral mb-6">
                What to Expect
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.expectations.map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle className="text-primary shrink-0" size={20} />
                    <span className="text-neutral/80 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT SIDEBAR: Sticky Booking Card */}
          <aside className="w-full lg:w-95">
            <div className="sticky top-24 card bg-base-100 border border-base-300 shadow-2xl">
              <div className="card-body">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm font-bold text-neutral/50 uppercase">
                    Starting From
                  </span>
                  <div className="text-right">
                    <span className="text-3xl font-black text-primary">
                      ৳{service.price}
                    </span>
                    <span className="text-xs block text-neutral/40">
                      / per hour
                    </span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-sm text-neutral/70">
                    <ShieldCheck size={18} className="text-secondary" />
                    <span>Insurance Protected</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-neutral/70">
                    <Clock size={18} className="text-secondary" />
                    <span>Instant Booking Confirmation</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-neutral/70">
                    <Star size={18} className="text-accent fill-accent" />
                    <span>Top Rated Carers Only</span>
                  </div>
                </div>

                <Link
                  href={`/booking/${id}`}
                  className="btn btn-primary btn-block text-white btn-lg shadow-lg"
                >
                  Book This Service
                </Link>

                <p className="text-[10px] text-center text-neutral/40 mt-4 leading-tight">
                  No credit card required to request a booking. Cancellation is
                  free up to 24 hours.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default ServiceDetail;
