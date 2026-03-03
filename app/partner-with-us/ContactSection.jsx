"use client";

import { useState } from "react";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

import AnimatedSection from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input/Input";


export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);

    setForm({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="bg-white px-6 lg:px-16 py-24"
    >
      <div className="max-w-7xl mx-auto">

        <SectionTitle
          eyebrow="— Reach Us"
          title="Get In Touch"
          description="Connect with our experts for strategic guidance across unlisted shares, bonds, and IPO investments."
        />

        <AnimatedSection delay={0.3} y={50}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">

                <Input
                  label="Full Name"
                  name="name"
                  type="text"
                  placeholder="Arjun Sharma"
                  value={form.name}
                  onChange={handleChange}
                  required
                />

                <Input
                  label="Phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={handleChange}
                />

              </div>

              <Input
                label="Email"
                name="email"
                type="email"
                placeholder="arjun@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />

              {/* For message we keep textarea (since your Input is only for input tag) */}
              <div>
                <label className="block text-xs text-primary-400 tracking-widest uppercase mb-2">
                  Message <em className="f-16 required">*</em>
                </label>
                <textarea
                  rows="5"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us what you're looking for..."
                  className="w-full border border-primary-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary-500 bg-white transition-colors resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                className="px-8 py-3.5 text-sm"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>

            </form>

            {/* Info Section */}
            <div className="space-y-6 pt-2">

              <p className="font-serif text-2xl text-primary-400 leading-snug">
                We typically respond <br /> within 4 business hours.
              </p>

              <div className="space-y-5">
                <InfoItem icon={Mail} label="Email" value="invest@econext.in" />
                <InfoItem icon={Phone} label="Phone" value="+91 98765 00000" />
                <InfoItem icon={MapPin} label="Office" value="Bandra Kurla Complex, Mumbai 400051" />
                <InfoItem icon={Clock} label="Hours" value="Mon – Sat, 9AM – 7PM IST" />
              </div>

            </div>

          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}

function InfoItem({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-11 h-11 rounded-xl bg-white border border-primary-100 flex items-center justify-center flex-shrink-0 shadow-sm">
        <Icon className="w-5 h-5 text-primary-600" />
      </div>
      <div>
        <div className="text-xs text-primary-400 tracking-widest uppercase mb-1">
          {label}
        </div>
        <div className="text-primary-900 text-sm font-medium">
          {value}
        </div>
      </div>
    </div>
  );
}