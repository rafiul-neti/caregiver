import AboutSection from "@/Components/Home/About/AboutSection";
import Banner from "@/Components/Home/Banner/Banner";
import ServicesOverview from "@/Components/Home/Services/ServicesOverview";
import Testimonials from "@/Components/Home/Testimonial/Testimonials";
import WhyUs from "@/Components/Home/WhyUs/WhyUs";

export default function Home() {
  return (
    <section className="">
      <Banner />
      <div className="w-11/12 mx-auto">
        <WhyUs />
        <ServicesOverview />
        <AboutSection />
        <Testimonials />
      </div>
    </section>
  );
}
