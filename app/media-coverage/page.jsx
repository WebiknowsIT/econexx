"use client";
import { useState } from 'react';
import { ArrowRight, FileText, Users, TrendingUp, Menu, X, Download, Mail, Phone, MapPin, Play } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import Accordion from "../../components/ui/Accordion"
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input/Input";

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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">
                Unlisted<span className="text-[#7A3D9A]">Zone</span>
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-[#7A3D9A] transition">Home</a>
              <a href="#" className="text-gray-700 hover:text-[#7A3D9A] transition">About</a>
              <a href="#" className="text-gray-700 hover:text-[#7A3D9A] transition">Partners</a>
              <a href="#" className="text-gray-700 hover:text-[#7A3D9A] transition">Contact</a>
              <Button variant="primary">
                Join Now
              </Button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-3">
                <a href="#" className="text-gray-700 hover:text-[#7A3D9A] transition">Home</a>
                <a href="#" className="text-gray-700 hover:text-[#7A3D9A] transition">About</a>
                <a href="#" className="text-gray-700 hover:text-[#7A3D9A] transition">Partners</a>
                <a href="#" className="text-gray-700 hover:text-[#7A3D9A] transition">Contact</a>
                <Button variant="primary" className="w-full">
                  Join Now
                </Button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <AnimatedSection delay={0.1}>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Become Our <span className="text-[#7A3D9A]">Partner</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Join our exclusive partner program
            </p>
          </div>
        </AnimatedSection>

        {/* Value Proposition Card */}
        <AnimatedSection delay={0.2}>
          <div className="bg-gradient-to-br from-purple-50 to-orange-50 rounded-2xl p-8 md:p-12 shadow-lg mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Sell Pre-IPO Shares and Earn Commission at{' '}
                  <span className="text-[#7A3D9A]">Zero Investment</span>
                </h2>
                <p className="text-gray-600 mb-6">
                  Join Us and Transform Your Income Graph
                </p>
              </div>
              <div className="flex justify-center">
                <div className="bg-white rounded-full p-8 shadow-xl">
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-[#7A3D9A] to-[#F59F4A] rounded-full flex items-center justify-center">
                      <Users className="w-16 h-16 text-white" />
                    </div>
                    <div className="absolute -top-4 -right-4 bg-[#F59F4A] text-white rounded-full p-3">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Steps Section */}
        <div className="mb-20">
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Become Our Partner in 3 Easy Steps
            </h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <AnimatedSection delay={0.2}>
              <div className="relative">
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                      <div className="w-12 h-12 bg-[#7A3D9A] rounded-full flex items-center justify-center text-white font-bold text-xl">
                        1
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Sign Up</h3>
                  <p className="text-gray-600 text-center">
                    Register your account and complete the simple verification process
                  </p>
                </div>
                <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-[#7A3D9A]" />
                </div>
              </div>
            </AnimatedSection>

            {/* Step 2 */}
            <AnimatedSection delay={0.3}>
              <div className="relative">
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                      <div className="w-12 h-12 bg-[#7A3D9A] rounded-full flex items-center justify-center text-white font-bold text-xl">
                        2
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Upload Documents</h3>
                  <p className="text-gray-600 text-center">
                    Submit required documentation for partner verification
                  </p>
                </div>
                <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-[#7A3D9A]" />
                </div>
              </div>
            </AnimatedSection>

            {/* Step 3 */}
            <AnimatedSection delay={0.4}>
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-[#7A3D9A] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      3
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Get Started</h3>
                <p className="text-gray-600 text-center">
                  Start earning commissions from Pre-IPO share sales
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Dashboard Preview */}
        <AnimatedSection delay={0.2}>
          <div className="bg-gradient-to-br from-purple-50 to-orange-50 rounded-2xl p-8 md:p-12 mb-20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-600">Total Earnings</span>
                    <span className="text-2xl font-bold text-[#7A3D9A]">₹2,45,000</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-600">Active Clients</span>
                    <span className="text-2xl font-bold text-[#7A3D9A]">156</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-600">This Month</span>
                    <span className="text-2xl font-bold text-[#7A3D9A]">₹45,000</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Our Dashboard
                </h3>
                <p className="text-gray-600 mb-6">
                  Access comprehensive analytics and track your performance with our intuitive dashboard. Monitor your earnings, client base, and growth metrics in real-time.
                </p>
                <Button variant="outline">
                  Browse Partner
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection delay={0.2}>
          <div className="bg-gradient-to-r from-purple-100 via-orange-50 to-orange-100 rounded-2xl p-8 md:p-12 text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Become Our Partner in 3 Easy Steps
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Unlock Your Earning Potential: Sign Up, Get Paid, Repeat! Join us today to start earning effortlessly.
            </p>
            <Button variant="primary">
              Join Now
            </Button>
          </div>
        </AnimatedSection>

        {/* Benefits Section */}
        <div className="mb-20">
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              What You Get?
            </h2>
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

        {/* Social Proof */}
        <div className="bg-gray-900 text-white rounded-2xl p-8 text-center mb-20">
          <p className="text-lg md:text-xl font-semibold">
            Currently, More Than 1000+ Partners Are Working With UnlistedZone
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Find answers to common questions that may help you in your initial exploration
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
              <Accordion items={faqItems} />
            </div>
          </AnimatedSection>
        </div>

        {/* Video Section */}
        <AnimatedSection delay={0.2}>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 mb-20 overflow-hidden">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
              India's No.1 Platform to Buy & Sell Pre-IPO
            </h2>
            <div className="relative rounded-xl overflow-hidden aspect-video bg-gray-700 flex items-center justify-center group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-[#7A3D9A]/20 to-[#F59F4A]/20"></div>
              <div className="relative z-10 bg-[#7A3D9A] rounded-full p-6 group-hover:bg-[#F59F4A] transition">
                <Play className="w-12 h-12 text-white" fill="white" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center space-x-4">
                <Users className="w-8 h-8 text-white/80" />
                <Users className="w-8 h-8 text-white" />
                <Users className="w-8 h-8 text-white/80" />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Contact Form */}
        <div className="mb-20">
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Reach Out To Us
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Love what's on your mind and you have had a moment to check our partners section. Then why not drop us a line along with your questions. Get in touch now!
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email"
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Enter your phone number"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Where did you hear about us?
                  </label>
                  <select 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7A3D9A] focus:border-transparent outline-none transition"
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
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7A3D9A] focus:border-transparent outline-none transition resize-none"
                    placeholder="Tell us more about your query..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>
                
                <Button variant="primary" className="w-full">
                  Submit
                </Button>
              </form>
            </div>
          </AnimatedSection>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <AnimatedSection delay={0.2}>
            <div className="bg-gradient-to-br from-purple-50 to-orange-50 rounded-xl p-8 text-center hover:shadow-lg transition">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-[#7A3D9A] rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-sm text-gray-600">
                B-710 GOK, LBS Marg, Vikhroli(w)<br />
                Hiranandani Meadows, Pin Code<br />
                400 083
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="bg-gradient-to-br from-purple-50 to-orange-50 rounded-xl p-8 text-center hover:shadow-lg transition">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-[#7A3D9A] rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-sm text-gray-600">
                +91 9594747028
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="bg-gradient-to-br from-purple-50 to-orange-50 rounded-xl p-8 text-center hover:shadow-lg transition">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-[#7A3D9A] rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-sm text-gray-600">
                info@unlistedzone.com
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                Unlisted<span className="text-[#F59F4A]">Zone</span>
              </h3>
              <p className="text-gray-400 text-sm">
                India's trusted platform for Pre-IPO shares
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#F59F4A] transition">About Us</a></li>
                <li><a href="#" className="hover:text-[#F59F4A] transition">Services</a></li>
                <li><a href="#" className="hover:text-[#F59F4A] transition">Partner Program</a></li>
                <li><a href="#" className="hover:text-[#F59F4A] transition">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#F59F4A] transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#F59F4A] transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-[#F59F4A] transition">Disclaimer</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#7A3D9A] transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#7A3D9A] transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#7A3D9A] transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 UnlistedZone. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}