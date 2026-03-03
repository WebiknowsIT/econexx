// app/page.tsx
import HeroSection from "../components/Home/HeroSection";
import Homeinfo from "@/components/Home/Homeinfo";
import ServiceInfo from "@/components/Home/ServiceInfo";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import HowItWorks from "@/components/Home/HowItWorks";
import Testimonials from "@/components/Home/Testimonials";
import FAQ from "@/components/ui/Faq";
import CTASection from "@/components/Home/CTASection";



export default function Home() {
  
  const faqs = [
    {
      id: 1,
      question: "What investment services does Econexx Wealth offer?",
      answer: (
        <>
          <p className="mb-3">
            Econexx Wealth provides curated access to three key investment segments:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-3">
            <li>Corporate Bonds for stable and predictable income</li>
            <li>Unlisted Shares for early access to high-growth companies</li>
            <li>Pre-IPO Consultancy for strategic IPO investment guidance</li>
          </ul>
          <p>
            Each opportunity is supported by structured research, due diligence, and personalized advisory.
          </p>
        </>
      ),
    },
    {
      id: 2,
      question: "Who should consider investing in these opportunities?",
      answer: (
        <p>
          Our services are designed for serious investors seeking diversification beyond traditional fixed deposits and public equities. Whether you aim for stable income, long-term growth, or tactical IPO gains, we help structure investments based on your financial goals and risk appetite.
        </p>
      ),
    },
    {
      id: 3,
      question: "Are these investments risky?",
      answer: (
        <p>
          Every investment carries some level of risk. Corporate bonds generally offer lower volatility and predictable returns, while unlisted shares and IPO investments may involve higher growth potential with corresponding risk. We provide transparent risk assessment and help you make informed decisions aligned with your profile.
        </p>
      ),
    },
    {
      id: 4,
      question: "How are opportunities selected?",
      answer: (
        <p>
          All investment opportunities go through a structured evaluation process that includes financial analysis, business model assessment, management review, and market positioning. Our focus is on quality, credibility, and long-term value creation.
        </p>
      ),
    },
    {
      id: 5,
      question: "What is the minimum investment amount?",
      answer: (
        <p>
          Minimum investment varies depending on the product category. Corporate bonds and unlisted shares may have different entry thresholds. Our advisory team provides clarity on eligibility and allocation during consultation.
        </p>
      ),
    },
    {
      id: 6,
      question: "How do I get started?",
      answer: (
        <>
          <p className="mb-3">Getting started is simple:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Schedule a consultation</li>
            <li>Discuss your financial goals and risk preferences</li>
            <li>Receive a tailored investment strategy</li>
            <li>Execute with guided support</li>
          </ol>
          <p className="mt-3">
            We ensure a smooth and transparent onboarding process.
          </p>
        </>
      ),
    },
  ];


  return (
    <>
      <main className="">
        <HeroSection />
        <Homeinfo />
        <ServiceInfo />
        <WhyChooseUs />
        <HowItWorks />
        <Testimonials />

        <FAQ 
        title="Frequently Asked"
        highlightedTitle="Questions"
        subtitle="Everything you need to know before investing with Econexx Wealth."
        data={faqs} 
      />
        <CTASection />
      </main>
    </>
  );
}
