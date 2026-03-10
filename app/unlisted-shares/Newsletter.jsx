"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/ui/Button";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) return;

    // TODO: connect to API
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <section
      id="newsletter"
      className="bg-white border-y border-primary-100 px-6 lg:px-16 py-24"
    >
      <div className="max-w-2xl mx-auto text-center">
        <SectionTitle
          align="center"
          eyebrow="Stay Ahead"
          title="Get Exclusive Deal Alerts"
          description="Be the first to know about new pre-IPO listings, buyback opportunities, and market insights — delivered to your inbox."
        />

        {/* Form */}
        <AnimatedSection delay={0.4} y={50}>
          <form
            onSubmit={handleSubmit}
            className="flex gap-3 flex-wrap justify-center md:px-18"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 min-w-[220px] border border-primary-200 rounded-xl px-5 py-3.5 text-sm outline-none focus:border-primary-500 transition-colors bg-primary-50"
            />

            <Button
              type="submit"
              variant="primary"
              className="px-7 py-3.5 text-sm"
            >
              <Send className="w-4 h-4 mr-2" />
              Subscribe
            </Button>
          </form>
        </AnimatedSection>

        <AnimatedSection delay={0.5} y={30}>
          <p className="text-primary-400 text-xs mt-4">
            No spam. Unsubscribe anytime.{" "}
            <a
              href="#"
              className="text-primary-600 hover:underline"
            >
              Privacy Policy
            </a>
            .
          </p>
        </AnimatedSection>

      </div>
    </section>
  );
}