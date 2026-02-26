import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/Components/Contact/ContactForm";

const ContactPage = () => {
  const contactMethods = [
    {
      icon: <Phone className="text-primary" />,
      title: "Call Us",
      details: "+880 1XXX-XXXXXX",
      subText: "24/7 Emergency Support",
    },
    {
      icon: <Mail className="text-primary" />,
      title: "Email Us",
      details: "support@carexyz.com",
      subText: "Response within 2 hours",
    },
    {
      icon: <MapPin className="text-primary" />,
      title: "Visit Office",
      details: "Banani, Dhaka, Bangladesh",
      subText: "10 AM - 6 PM (Sun-Thu)",
    },
  ];

  return (
    <div className="min-h-screen bg-base-200">
      {/* Hero Section */}
      <div className="bg-primary text-primary-content py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            How can we help?
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Whether you have a question about our caregivers, pricing, or need
            immediate assistance for a loved one, our team is ready to support
            you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-4">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="card bg-base-100 shadow-xl border border-base-300"
              >
                <div className="card-body flex-row items-center gap-4">
                  <div className="p-3 bg-base-200 rounded-2xl">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral">{method.title}</h3>
                    <p className="text-lg font-semibold">{method.details}</p>
                    <p className="text-xs opacity-60 uppercase font-bold tracking-wider">
                      {method.subText}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Support Hours Alert */}
            <div className="alert bg-secondary/10 border-secondary/20 text-secondary-content">
              <Clock size={20} />
              <div>
                <h3 className="font-bold">Instant Support</h3>
                <div className="text-xs text-neutral">
                  Available for active bookings 24/7.
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
