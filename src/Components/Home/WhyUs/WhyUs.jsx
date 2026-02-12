import React from 'react';
import { ShieldCheck, Activity, Clock, HeartHandshake } from 'lucide-react';

/**
 * WhyUs Component - Care.xyz
 * @description Architecture:
 * 1. Data-Driven: Content is decoupled from layout for easy maintenance.
 * 2. UX: Uses 'glassmorphism' and large radii for a safe, modern feel.
 * 3. Accessibility: Semantic HTML with aria-labels.
 */

const WHY_US_DATA = [
  {
    id: 1,
    title: "Verified Caregivers",
    description: "Every professional undergoes a rigorous 5-step background check and NID verification for your peace of mind.",
    icon: <ShieldCheck className="w-8 h-8" />,
    color: "text-primary"
  },
  {
    id: 2,
    title: "Health Tracking",
    description: "Stay updated with real-time logs for medications, activity, and dietary needs directly through your dashboard.",
    icon: <Activity className="w-8 h-8" />,
    color: "text-secondary"
  },
  {
    id: 3,
    title: "24/7 Dedicated Support",
    description: "A care coordinator is always one tap away to handle schedule changes or emergency requests.",
    icon: <Clock className="w-8 h-8" />,
    color: "text-accent"
  },
  {
    id: 4,
    title: "Vetted Community",
    description: "Join thousands of families who trust our platform for its transparency and high-quality service standards.",
    icon: <HeartHandshake className="w-8 h-8" />,
    color: "text-info"
  }
];

const WhyUs = () => {
  return (
    <section className="bg-base-200 py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral">
            Your Family’s Safety is <span className="text-primary">Our Only Priority</span>
          </h2>
          <p className="text-lg text-neutral/60 max-w-2xl mx-auto">
            We’ve built Care.xyz on a foundation of trust, transparency, and top-tier medical empathy.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_US_DATA.map((item) => (
            <div 
              key={item.id} 
              className="card bg-base-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-base-300 group"
            >
              <div className="card-body items-center text-center p-8">
                {/* Icon Container with subtle background hit */}
                <div className={`p-4 rounded-2xl bg-base-200 ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                
                <h3 className="card-title mt-4 text-xl font-bold text-neutral">
                  {item.title}
                </h3>
                
                <p className="text-neutral/70 leading-relaxed mt-2 text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics / Bottom Trust Bar */}
        <div className="mt-20 pt-10 border-t border-base-300 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-black text-primary">10k+</div>
            <div className="text-xs uppercase tracking-widest font-bold opacity-50">Verified Carers</div>
          </div>
          <div>
            <div className="text-3xl font-black text-secondary">21k+</div>
            <div className="text-xs uppercase tracking-widest font-bold opacity-50">Happy Families</div>
          </div>
          <div>
            <div className="text-3xl font-black text-accent">4.9/5</div>
            <div className="text-xs uppercase tracking-widest font-bold opacity-50">Avg. Rating</div>
          </div>
          <div>
            <div className="text-3xl font-black text-info">98%</div>
            <div className="text-xs uppercase tracking-widest font-bold opacity-50">Safety Score</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;