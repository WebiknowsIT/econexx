"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input/Input";
import AnimatedSection from "@/components/AnimatedSection";
import PageHeader2 from "../../components/PageHeader2";

export default function ContactPage() {
    return (
        <div className="bg-gray-50">
            <AnimatedSection>
                <PageHeader2
                    extraClass="!pb-32"
                    title="Let’s Talk."
                    highlight="We’re Here to Help."
                    subtitle="Have a question about investing, partnerships, or our platform? Reach out and our team will get back to you shortly."
                    image={{
                        src: "/images/contact-us.svg",
                        alt: "Contact Econexxwealth",
                    }}
                    // primaryCta={{
                    //     label: "Send a Message",
                    //     onClick: () => {
                    //         document
                    //             .getElementById("contact-form")
                    //             ?.scrollIntoView({ behavior: "smooth" });
                    //     },
                    // }}
                    // stats={[
                    //     { value: "24–48 hrs", label: "Response Time" },
                    //     { value: "1000+", label: "Happy Clients" },
                    // ]}
                    
                />

            </AnimatedSection>


            <div className="max-w-5xl mx-auto px-4 py-20">
                <AnimatedSection delay={0.15}>
                    <div className="bg-white border border-primary-400 rounded-2xl shadow-lg p-8 md:p-10 md:mt-[-150px]">
                        <form className="space-y-6">

                            {/* Name & Email */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input
                                    label="Name"
                                    placeholder="Your full name"
                                    required
                                />
                                <Input
                                    label="Email"
                                    type="email"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>

                            {/* Phone & Subject */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input
                                    label="Phone Number"
                                    placeholder="+91 98765 43210"
                                />
                                <Input
                                    label="Subject"
                                    placeholder="How can we help?"
                                />
                            </div>

                            {/* Source */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Where did you find us?
                                </label>
                                <select
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3
                             focus:ring-2 focus:ring-green-500 focus:outline-none"
                                >
                                    <option>Select an option</option>
                                    <option>Google Search</option>
                                    <option>Social Media</option>
                                    <option>Referral</option>
                                    <option>News / Media</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Your Message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    rows="4"
                                    placeholder="Tell us about your project or inquiry..."
                                    className="w-full rounded-lg border border-gray-300 px-4 py-3
                             focus:ring-2 focus:ring-green-500 focus:outline-none resize-none"
                                />
                            </div>

                            {/* Submit */}
                            <div className="flex justify-center pt-4">
                                <Button variant="primary" className="px-8">
                                    Submit Message →
                                </Button>
                            </div>
                        </form>
                    </div>
                </AnimatedSection>

                {/* ================= FOOTER ================= */}
                <AnimatedSection delay={0.3}>
                    <p className="mt-6 text-center text-sm text-gray-500 flex items-center justify-center gap-2">
                        🔒 Your information is secure and will never be shared with third
                        parties.
                    </p>
                </AnimatedSection>

            </div>
        </div>
    );
}
