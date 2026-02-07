"use client";

import AnimatedSection from "../../components/AnimatedSection";
import Accordion from "../../components/ui/Accordion"
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input/Input";
import { useState } from "react";
import { ArrowRight, FileText, Mail, MapPin, Phone, TrendingUp, Users } from "lucide-react";


export default function PartnerPage() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    source: '',
    message: ''
  });

  const faqItems = [
    {
      question: "Q1 - Who is Eligible for Partner Program?",
      answer: "Anyone with a passion for financial markets and a network of potential investors can join our partner program. Whether you're a financial advisor, consultant, or simply have connections in the investment community, you're welcome to apply."
    },
    {
      question: "Q2 - How can I become a partner with UnlistedZone?",
      answer: "Becoming a partner is simple: Sign up on our platform, complete the verification process by uploading required documents, and once approved, you can start earning commissions immediately."
    },
    {
      question: "Q3 - What resources are available to partners?",
      answer: "Partners get access to comprehensive research reports, real-time pricing data, marketing materials, a dedicated dashboard for tracking performance, and ongoing support from our team."
    },
    {
      question: "Q4 - What can you provide from our Partner Program?",
      answer: "You'll receive competitive commission rates, access to exclusive Pre-IPO opportunities, comprehensive training materials, dedicated support, and regular market updates to help you succeed."
    },
    {
      question: "Q5 - Is there a fee to join the Partner Program?",
      answer: "No, joining our Partner Program is completely free. There are no setup fees, monthly charges, or hidden costs. You start earning commissions from your first successful transaction."
    },
    {
      question: "Q6 - How do I contact UnlistedZone for more information about the partnership?",
      answer: "You can reach us via email at info@unlistedzone.com, call us at +91 9594747028, or fill out the contact form on this page. Our team typically responds within 24 hours."
    },
    {
      question: "Q7 - What makes UnlistedZone's Partner Program unique?",
      answer: "Our program offers zero investment requirements, industry-leading commission rates, comprehensive support, access to India's largest Pre-IPO platform, and a proven track record with 1000+ active partners."
    }
  ];


  return (
    <main>
      <div className="w-full text-gray-800">

        {/* ================= HERO ================= */}
        <section className="bg-gradient-to-br from-purple-50 to-orange-50 py-20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
            <AnimatedSection>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Sell Pre-IPO Shares.<br />
                  <span className="text-[var(--color-primary-500)]">
                    Earn Commission.
                  </span><br />
                  Zero Investment.
                </h1>

                <p className="mt-5 text-lg text-gray-600 max-w-xl">
                  Join India’s growing partner network and help investors
                  access curated pre-IPO opportunities.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Button variant="primary">Become a Partner</Button>
                  <Button variant="outline">View Dashboard</Button>
                </div>

                <div className="mt-10 flex gap-12 text-sm">
                  <div>
                    <p className="text-2xl font-bold">1000+</p>
                    <p className="text-gray-500">Active Partners</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">₹100Cr+</p>
                    <p className="text-gray-500">Deals Enabled</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="">
                <img
                  src="/images/icons/finance.svg"
                  alt="Dashboard"
                  className="rounded-lg"
                />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ================= STEPS ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">

            <AnimatedSection>
              <h2 className="text-3xl font-bold">
                Become Our Partner in 3 Easy Steps
              </h2>
              <p class="text-gray-600 mb-8 max-w-2xl mx-auto">Unlock Your Earning Potential: Sign Up, Get Paid, Repeat! Join us today to start earning effortlessly.</p>
            </AnimatedSection>

            <div className="mt-16 grid md:grid-cols-3 gap-10">
              {[
                { step: "1", title: "Sign Up", desc: "Register as a partner in minutes" },
                { step: "2", title: "Upload KYC", desc: "Complete verification securely" },
                { step: "3", title: "Start Earning", desc: "Refer clients & earn commission" },
              ].map((item, index) => (
                <AnimatedSection key={item.step} delay={index * 0.15}>
                  <div className="relative">
                    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition">
                      <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                          <div className="w-12 h-12 bg-[#7A3D9A] rounded-full flex items-center justify-center text-white font-bold text-xl">
                            {item.step}
                          </div>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-center text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 text-center">{item.desc}</p>
                    </div>
                    {index !== 2 &&
                      <div className="hidden md:flex absolute top-1/2 -right-9 transform -translate-y-1/2 z-10">
                        <ArrowRight className="w-8 h-8 text-[#7A3D9A]" />
                      </div>
                    }

                  </div>
                </AnimatedSection>
              ))}
            </div>

          </div>
        </section>

        {/* ================= DASHBOARD ================= */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

            <AnimatedSection>
              <img
                src="/images/our-dashboard.png"
                className=""
                alt="Dashboard Preview"
              />
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div>
                <h2 className="text-3xl font-bold">Your Partner Dashboard</h2>
                <p className="mt-4 text-gray-600">
                  Access comprehensive analytics and track your performance with our intuitive dashboard. Monitor your earnings, client base, and growth metrics in real-time.
                </p>

                <ul className="mt-6 space-y-3 text-sm">
                  <li>✔ Real-time commission tracking</li>
                  <li>✔ Lead & referral management</li>
                  <li>✔ Payout history & reports</li>
                </ul>

                <div className="mt-8">
                  <Button variant="primary">Access Dashboard</Button>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </section>

        {/* ================= BENEFITS ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
                What You Get?
              </h2>
              <p class="text-gray-600 mb-8 max-w-2xl mx-auto">Research Reports, Partner Dashboard and
                            Daily News of Unlisted Market.</p>
            </AnimatedSection>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Benefit 1 */}
              <AnimatedSection delay={0.2}>
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-8 h-8 text-[#7A3D9A]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Reports</h3>
                  <p className="text-gray-600">
                    Research reports, real-time price data, and IPO details
                  </p>
                </div>
              </AnimatedSection>

              {/* Benefit 2 */}
              <AnimatedSection delay={0.3}>
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Users className="w-8 h-8 text-[#7A3D9A]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Partner Dashboard</h3>
                  <p className="text-gray-600">
                    Dedicated dashboard where you can track clients, transactions, and commissions effortlessly
                  </p>
                </div>
              </AnimatedSection>

              {/* Benefit 3 */}
              <AnimatedSection delay={0.4}>
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-8 h-8 text-[#7A3D9A]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Daily Updates</h3>
                  <p className="text-gray-600">
                    Daily expert analysis, research reports on the hottest unlisted stocks
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ================= TRUST BAR ================= */}
        <section className="py-8 bg-[var(--color-primary-500)] text-white text-center">
          <p className="font-medium text-sm">
            1000+ Partners • Secure Platform • India’s #1 Pre-IPO Marketplace
          </p>
        </section>

        {/* ================= FAQ ================= */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6">

            <AnimatedSection>
              <h2 className="text-3xl font-bold text-center">
                Frequently Asked Questions
              </h2>
              <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Find answers to common questions that may help you in your initial exploration</p>
            </AnimatedSection>

            <Accordion
              items={[
                {
                  question: "What is the Partner Program?",
                  answer: "It allows you to earn commission by referring clients interested in pre-IPO shares.",
                },
                {
                  question: "Is there any joining fee?",
                  answer: "No. Joining the partner program is completely free.",
                },
                {
                  question: "How much can I earn?",
                  answer: "Your earnings depend on deal size and successful conversions.",
                },
                {
                  question: "How do payouts work?",
                  answer: "Payouts are processed transparently via your dashboard.",
                },
              ]}
            />

          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">

            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
                Reach Out To Us
              </h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Love what's on your mind and you have had a moment to check our partners section. Then why not drop us a line along with your questions. Get in touch now!
              </p>
            </AnimatedSection>



            <div className="mb-20 grid md:grid-cols-2 gap-4">

              {/* Contact Info Cards */}
              <div className="grid md:grid-cols-1 gap-8 mb-20">
                <AnimatedSection delay={0.2}>
                  <div className="bg-gradient-to-br from-purple-50 to-orange-50 rounded-md p-8 text-center hover:shadow-lg transition flex gap-4 items-start">
                    <div className="flex">
                      <div className="w-12 h-12 bg-[#7A3D9A] rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-gray-900 mb-2">Visit Us</h3>
                    <p className="text-sm text-gray-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.3}>
                  <div className="bg-gradient-to-br from-purple-50 to-orange-50 rounded-md p-8 text-center hover:shadow-lg transition flex gap-4 items-start">
                    <div className="flex justify-center">
                      <div className="w-12 h-12 bg-[#7A3D9A] rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
                    <p className="text-sm text-gray-600">
                      +91 9594747028
                    </p>

                    </div>
                    
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.4}>
                  <div className="bg-gradient-to-br from-purple-50 to-orange-50 rounded-md p-8 text-center hover:shadow-lg transition flex gap-4 items-start">
                    <div className="flex justify-center">
                      <div className="w-12 h-12 bg-[#7A3D9A] rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
                    <p className="text-sm text-gray-600">
                      info@unlistedzone.com
                    </p>

                    </div>
                    
                  </div>
                </AnimatedSection>
              </div>
              <AnimatedSection delay={0.2}>
                <div className="mx-auto bg-gradient-to-br from-purple-50 to-orange-50 hover:shadow-lg transition rounded-md p-8">
                  <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                          label="Name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Enter your name"
                          className="input-styled !mb-0"
                        />
                        <Input
                          label="Email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Enter your email"
                          className="input-styled !mb-0"
                        />
                    </div>
                    <Input
                        label="Phone Number"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Enter your phone number"
                        className="input-styled !mb-0"
                      />

                    

                    <div className="form-group ">
                      <label className="form-label">
                        Where did you hear about us?
                      </label>
                      <select
                        className="w-full bg-white px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7A3D9A] focus:border-transparent outline-none transition"
                        value={formData.source}
                        onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                      >
                        <option>Select an option</option>
                        <option>Social Media</option>
                        <option>Search Engine</option>
                        <option>Referral</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        Message
                      </label>
                      <textarea
                        rows="2"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7A3D9A] focus:border-transparent outline-none transition resize-none"
                        placeholder="Tell us more about your query..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      ></textarea>
                    </div>

                    <Button variant="secondary" className="w-full">
                      Submit
                    </Button>
                  </form>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
