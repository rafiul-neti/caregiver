import React from "react";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Rahat Chowdhury",
    role: "Parent",
    service: "Baby Care",
    content:
      "As a working parent, finding a trustworthy babysitter was my biggest stress. Care.xyz made it so easy. The caregiver was professional and my son loved him!",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=rahat",
  },
  {
    id: 2,
    name: "Anika Tabassum",
    role: "Daughter",
    service: "Elderly Care",
    content:
      "The companion they sent for my father was exceptional. It wasn't just medical help; it was genuine friendship. Highly recommended for any family.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=anika",
  },
  {
    id: 3,
    name: "Sajid Ahmed",
    role: "Patient",
    service: "Sick Care",
    content:
      "Recovering from surgery at home was tough, but the nurse provided by Care.xyz was a lifesaver. Extremely punctual and knowledgeable.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=sajid",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-base-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em]">
            Real Stories
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-neutral">
            Trusted by <span className="text-secondary italic">Thousands</span>{" "}
            of Families
          </h3>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <article
              key={review.id}
              className="card bg-base-100 shadow-xl border border-base-300 relative overflow-visible hover:border-primary/30 transition-all duration-300 group"
            >
              {/* Floating Quote Icon */}
              <div className="absolute -top-4 -left-4 bg-primary text-white p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                <Quote size={20} fill="currentColor" />
              </div>

              <div className="card-body pt-10 px-8">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-accent text-accent"
                    />
                  ))}
                </div>

                <p className="text-neutral/80 italic leading-relaxed mb-6">
                  &quot;{review.content}&quot;
                </p>

                {/* Profile Section */}
                <div className="flex items-center gap-4 mt-auto border-t border-base-200 pt-6">
                  {/* Optimized Avatar Container */}
                  <div className="avatar">
                    <div className="relative w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
                      <Image
                        src={review.image}
                        alt={`${review.name}'s profile`}
                        fill
                        sizes="48px"
                        className="object-cover"
                        priority={false} // Only use true for Hero images
                      />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <h4 className="font-bold text-neutral leading-tight">
                      {review.name}
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs font-medium text-neutral/50">
                        {review.role}
                      </span>
                      <span className="text-[10px] badge badge-secondary badge-outline py-0 h-4 px-2">
                        {review.service}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
