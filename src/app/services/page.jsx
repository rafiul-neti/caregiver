import React from "react";
import Image from "next/image";
import {
  CheckCircle2,
  Baby,
  HeartPulse,
  UserRound,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const ALL_SERVICES = [
  {
    id: "baby-care",
    title: "Expert Baby Care",
    icon: <Baby size={32} />,
    description:
      "Professional care for your little ones, from newborns to toddlers. Our carers are trained in infant safety and early development.",
    features: [
      "Nanny & Babysitting",
      "Infant Massage",
      "Bedtime Routines",
      "Play-based Learning",
    ],
    image:
      "https://images.pexels.com/photos/265987/pexels-photo-265987.jpeg?_gl=1*bi2yn5*_ga*MTE3NjY4Mzc3OS4xNzY1NzY0NTYy*_ga_8JE65Q40S6*czE3NzE5ODc3OTgkbzUkZzEkdDE3NzE5ODc4MjYkajMyJGwwJGgw",
    color: "bg-blue-50 text-blue-600",
  },
  {
    id: "elderly-care",
    title: "Dignified Elderly Care",
    icon: <UserRound size={32} />,
    description:
      "Compassionate companionship and daily assistance for seniors. We focus on independence, safety, and emotional well-being.",
    features: [
      "Medication Reminders",
      "Mobility Support",
      "Companionship",
      "Light Housekeeping",
    ],
    image:
      "https://images.pexels.com/photos/7551653/pexels-photo-7551653.jpeg?_gl=1*qohgnu*_ga*MTE3NjY4Mzc3OS4xNzY1NzY0NTYy*_ga_8JE65Q40S6*czE3NzE5ODc3OTgkbzUkZzEkdDE3NzE5ODc4OTgkajMzJGwwJGgw",
    color: "bg-teal-50 text-teal-600",
  },
  {
    id: "sick-care",
    title: "Specialized Sick Care",
    icon: <HeartPulse size={32} />,
    description:
      "Post-surgery recovery and chronic illness support. Our medical carers ensure a smooth healing process at home.",
    features: [
      "Wound Dressing",
      "Vital Monitoring",
      "Physical Therapy Support",
      "Dietary Management",
    ],
    image:
      "https://images.pexels.com/photos/6010794/pexels-photo-6010794.jpeg?_gl=1*1o0mxou*_ga*MTE3NjY4Mzc3OS4xNzY1NzY0NTYy*_ga_8JE65Q40S6*czE3NzE5ODc3OTgkbzUkZzEkdDE3NzE5ODc5ODAkajIwJGwwJGgw",
    color: "bg-rose-50 text-rose-600",
  },
];

const ServicesPage = () => {
  return (
    <main className="min-h-screen">
      {/* 1. Simple Hero Header */}
      <section className="bg-neutral py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            Our <span className="text-primary italic">Professional</span>{" "}
            Services
          </h1>
          <p className="text-lg text-neutral-content/80 leading-relaxed">
            From the first steps of a child to the golden years of our parents,
            Care.xyz provides specialized support for every stage of life.
          </p>
        </div>
      </section>

      {/* 2. Services List */}
      <section className="py-24 bg-base-100">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {ALL_SERVICES.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Image Content */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border-4 border-base-200">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center ${service.color}`}
                >
                  {service.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-neutral">
                  {service.title}
                </h2>
                <p className="text-lg text-neutral/70">{service.description}</p>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-neutral/80 font-medium"
                    >
                      <CheckCircle2 size={18} className="text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 flex gap-4">
                  <Link
                    href={`/services/${service.id}`}
                    className="btn btn-primary btn-lg px-8 gap-2"
                  >
                    See Details <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
