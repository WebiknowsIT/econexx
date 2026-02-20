// app/page.tsx
import HeroSection from "../components/Home/HeroSection";
import Homeinfo from "@/components/Home/Homeinfo";
import ServiceInfo from "@/components/Home/ServiceInfo";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import HowItWorks from "@/components/Home/HowItWorks";
import Testimonials from "@/components/Home/Testimonials";
import FAQ from "@/components/Home/FAQ";
import CTASection from "@/components/Home/CTASection";



export default function Home() {
  return (
    <>
      <main className="">
        <HeroSection />
        <Homeinfo />
        <ServiceInfo />
        <WhyChooseUs />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>
    </>
  );
}
