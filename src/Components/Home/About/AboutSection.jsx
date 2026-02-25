import React from "react";
import Image from "next/image";
import { Heart, ShieldCheck, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="pb-14 bg-base-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Visual Storytelling */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-4xl overflow-hidden shadow-2xl border-8 border-base-200">
              <Image
                src="https://images.unsplash.com/photo-1725870953863-4ad4db0acfc2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Our Caregiving Mission"
                width={800}
                height={600}
                className="object-cover h-125"
              />
            </div>
            {/* Decorative Element: Trusted Badge */}
            <div className="absolute -bottom-6 -right-6 z-20 bg-secondary p-8 rounded-2xl shadow-xl text-white hidden md:block max-w-50">
              <p className="text-3xl font-black">20+</p>
              <p className="text-sm font-medium leading-tight opacity-90">
                Years of collective healthcare experience.
              </p>
            </div>
            {/* Abstract Background Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 blur-[100px] -z-10 rounded-full" />
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <span className="badge badge-primary badge-outline font-bold uppercase tracking-widest px-4 py-3">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-neutral leading-tight">
                Redefining Care with{" "}
                <span className="text-primary italic">Compassion</span> & Tech.
              </h2>
              <p className="text-lg text-neutral/70 leading-relaxed">
                Care.xyz was born out of a simple realization: finding reliable
                care shouldn&apos;t be a source of stress. We&apos;ve combined
                deep-rooted empathy with modern technology to ensure your family
                gets the support they deserve.
              </p>
            </div>

            {/* Micro-Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-base-200 rounded-xl text-primary">
                  <Heart size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-neutral">Pure Empathy</h4>
                  <p className="text-sm text-neutral/60">
                    We treat your family like our own.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-base-200 rounded-xl text-secondary">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-neutral">Safety First</h4>
                  <p className="text-sm text-neutral/60">
                    Every carer is 100% NID verified.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button className="btn btn-primary btn-lg shadow-lg hover:shadow-primary/30 transition-all px-10">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
