import AnimatedSection from "@/components/AnimatedSection";

export default function Hero() {
  return (
    <section className="pt-14 pb-14 overflow-hidden bannerBgPattern">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <AnimatedSection delay={0.1} y={-30}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-bold uppercase tracking-wider mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
                </span>
                India's #1 Institutional Access for Retail
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <h1 className="editorial-title text-6xl lg:text-6xl text-gray-900 leading-[1.1] mb-8 font-bold">
                The Future <br />
                <span className="text-primary-600 underline decoration-primary-100 underline-offset-8">
                  Wealth
                </span>{" "}
                is Unlisted.
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="text-xl text-gray-500 leading-relaxed mb-10 max-w-lg">
                Invest in India's next unicorns before they hit the public
                market. Institutional-grade transparency, retail-friendly
                access.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="flex flex-wrap gap-4">
                <button className="bg-gray-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-black transition-all flex items-center gap-3">
                  Explore Unlisted Shares
                  →
                </button>

                <a
                  href="#HowItWorks"
                  className="border border-gray-200 bg-white text-gray-700 px-8 py-4 rounded-xl font-medium hover:bg-gray-50 transition-all"
                >
                  How it works
                </a>
              </div>
            </AnimatedSection>

            {/* Stats – fadeInUp */}
            <AnimatedSection delay={0.5}>
              <div className="mt-12 flex items-center gap-8 border-t border-gray-100 pt-8">
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    ₹2500Cr+
                  </div>
                  <div className="text-sm text-gray-400">
                    Value Transacted
                  </div>
                </div>

                <div className="w-px h-10 bg-gray-100" />

                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    50,000+
                  </div>
                  <div className="text-sm text-gray-400">
                    Trusted Investors
                  </div>
                </div>
              </div>
            </AnimatedSection>

          </div>



          {/* RIGHT CONTENT */}
          <AnimatedSection delay={0.3} y={0}>
            <div className="relative">

              {/* Glow Background */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-100 rounded-full blur-3xl opacity-50" />

              {/* Main Card */}
              <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 p-4 transform lg:rotate-2">
                <div
                  className="bg-gray-50 rounded-2xl aspect-video overflow-hidden flex items-center justify-center relative group bannerVideoThumbs bg-cover bg-center"
                >

                  {/* Play Button – zoomIn */}
                  <AnimatedSection delay={0.45} y={0}>
                    <div className="text-white text-sm font-medium flex flex-col items-center gap-4">
                      <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-8 h-8 text-primary-600 fill-primary-600"
                        >
                          <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
                        </svg>
                      </div>
                      Watch: Why Unlisted Equities?
                    </div>
                  </AnimatedSection>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* FLOATING CARD – zoomIn */}
              <AnimatedSection delay={0.6} y={0}>
                <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl border border-gray-50 max-w-[240px] transform -rotate-3 hidden md:block">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-600 w-5 h-5"
                      >
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </div>
                    <div className="text-sm font-bold text-gray-900">
                      Verified Assets
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 leading-relaxed">
                    Every share transfer is secured through NSDL/CDSL depositories.
                  </p>
                </div>
              </AnimatedSection>

            </div>
          </AnimatedSection>


        </div>
      </div>
    </section>
  );
}
