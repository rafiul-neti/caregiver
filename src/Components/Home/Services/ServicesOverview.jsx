import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SERVICES } from '@/data/services/services';

const ServicesOverview = () => {
  return (
    <section className="py-24 bg-base-100 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-neutral mb-4">
              Tailored Care for <span className="text-primary">Every Stage of Life</span>
            </h2>
            <p className="text-neutral/60">
              Select a category to explore our verified professionals and specialized care plans designed for your family.
            </p>
          </div>
          <Link href="/services" className="btn btn-outline btn-primary px-8">
            View All Services
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="group card bg-base-100 shadow-sm hover:shadow-2xl transition-all duration-500 border border-base-300 overflow-hidden">
              <figure className="relative h-64 overflow-hidden">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral/80 to-transparent opacity-60" />
              </figure>
              
              <div className="card-body">
                <h3 className="card-title text-2xl text-neutral group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-neutral/70 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="card-actions mt-6">
                  <Link 
                    href={`/service/${service.id}`} 
                    className="btn btn-primary btn-block group-hover:gap-4 transition-all"
                  >
                    {service.action}
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;