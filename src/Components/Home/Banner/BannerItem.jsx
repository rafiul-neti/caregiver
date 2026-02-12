"use client";

import Image from "next/image";
import Link from "next/link";

export default function BannerItem({ item }) {
  return (
    <section className="relative w-full h-[85vh] flex items-center">
      
      {/* Background Image */}
      <Image
        src={item.image}
        alt="banner"
        fill
        priority
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
        <div className="max-w-2xl space-y-5">
          
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            {item.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-200">
            {item.subtitle}
          </p>

          {/* Button */}
          <Link href={`/services`} className="mt-4 bg-primary hover:bg-primary/90 transition px-6 py-3 rounded-lg font-semibold">
            {item.button}
          </Link>

        </div>
      </div>
    </section>
  );
}
