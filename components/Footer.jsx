import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";

export default function Footer() {
  return (
        <>
    <footer className="bg-slate-900 text-slate-400 pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">

          {/* BRAND COLUMN */}
          <AnimatedSection delay={0.1}>
            <div className="col-span-2">
              <div className="text-2xl font-bold tracking-tighter text-primary-700 flex items-center gap-2 mb-6">
                <Image
                  src="/images/Logo.png"
                  alt="Logo"
                  height={50}
                  width={200}  
                  priority
                  className="w-auto h-[50px]"
                />
              </div>

              <p className="text-gray-500 mb-8 max-w-xs leading-relaxed">
                India's premier gateway to private markets. Trusted by 50k+
                investors for transparency and service excellence.
              </p>

             <div className="flex gap-4">
      {/* Instagram */}
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 hover:text-pink-500 transition-colors"
      >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    data-lucide="linkedin" className="lucide lucide-linkedin w-4 h-4">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
                    </path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
      </a>

      {/* Twitter / X */}
      <a
        href="https://twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 hover:text-sky-500 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                data-lucide="twitter" className="lucide lucide-twitter w-4 h-4">
                                <path
                                    d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z">
                                </path>
                            </svg>
      </a>

      {/* YouTube */}
      <a
        href="https://www.youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 hover:text-red-500 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                data-lucide="youtube" className="lucide lucide-youtube w-4 h-4">
                                <path
                                    d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17">
                                </path>
                                <path d="m10 15 5-3-5-3z"></path>
                            </svg>
      </a>
    </div>
            </div>
          </AnimatedSection>

          {/* MARKET */}
          <AnimatedSection delay={0.2}>
            <div>
              <h5 className="font-bold text-secondary-500 mb-6">Market</h5>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-secondary-600">All Shares</a></li>
                <li><a href="#" className="hover:text-secondary-600">Pre-IPO List</a></li>
                <li><a href="#" className="hover:text-secondary-600">Screener</a></li>
                <li><a href="#" className="hover:text-secondary-600">DRHP Filed</a></li>
              </ul>
            </div>
          </AnimatedSection>

          {/* RESOURCES */}
          <AnimatedSection delay={0.3}>
            <div>
              <h5 className="font-bold text-secondary-500 mb-6">Resources</h5>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-secondary-600">Knowledge Center</a></li>
                <li><a href="#" className="hover:text-secondary-600">Market News</a></li>
                <li><a href="#" className="hover:text-secondary-600">SEBI Guidelines</a></li>
                <li><a href="#" className="hover:text-secondary-600">FAQ</a></li>
              </ul>
            </div>
          </AnimatedSection>

          {/* NEWSLETTER */}
          <AnimatedSection delay={0.4}>
            <div className="col-span-2 bg-primary-50 p-8 rounded-3xl">
              <h5 className="font-bold text-primary-900 mb-2">
                Market Insights to your inbox
              </h5>
              <p className="text-sm text-primary-700/70 mb-6">
                Get weekly updates on new arrivals and price changes.
              </p>

              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 rounded-xl p-2 border border-primary-100 focus:ring-primary-500 text-sm"
                />
                <button className="bg-secondary-600 text-white px-4 py-2 rounded-xl text-sm font-bold">
                  Subscribe
                </button>
              </div>
            </div>
          </AnimatedSection>

        </div>

        {/* FOOTER BOTTOM */}
        <AnimatedSection delay={0.5}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-gray-100 pt-12">
            <p className="text-sm text-gray-400">
              © 2025 EconexxWealth. Secure Trading. Private Markets.
            </p>

            <div className="flex gap-8 text-xs font-bold text-gray-400 uppercase tracking-widest">
              <a href="#" className="hover:text-secondary-500">Privacy Policy</a>
              <a href="#" className="hover:text-secondary-500">Terms of Use</a>
              <a href="#" className="hover:text-secondary-500">Disclaimer</a>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </footer>

      {/*  Floating Contact (Calm Style) */}
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <button
        type="button"
        className="w-14 h-14 cursor-pointer bg-secondary-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all"
        aria-label="Chat"
      >
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
          className="w-6 h-6"
        >
          <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
        </svg>
      </button>
    </div>

    </>
  );
}
