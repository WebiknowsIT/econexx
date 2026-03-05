// components/detail/DetailHero.jsx

import { Calendar, MapPin, Users } from "lucide-react";

export default function DetailHero({ share }) {
  const fmt = (n) => "₹" + n.toLocaleString("en-IN");

  return (
    <div
      className="bg-primary-900 py-10 px-6 lg:px-16 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 90% at 50% 110%,rgba(122,61,154,.35) 0%,transparent 65%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-primary-400 text-xs mb-6">
          <a href="/" className="hover:text-primary-200 transition-colors">Home</a>
          <span className="text-primary-600">›</span>
          <a href="/shares" className="hover:text-primary-200 transition-colors">Shares</a>
          <span className="text-primary-600">›</span>
          <span className="text-primary-300">{share.name}</span>
        </nav>

        {/* Hero row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">

          {/* Left — logo + info */}
          <div className="flex items-start gap-5">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-700 flex items-center justify-center text-white font-serif text-2xl font-bold flex-shrink-0 shadow-lg">
              {share.initials}
            </div>
            <div>
              <div className="flex items-center gap-3 flex-wrap mb-2">
                <h1 className="font-serif font-bold text-white text-4xl lg:text-5xl">
                  {share.name}
                </h1>
                <span className="text-xs bg-red-500/20 border border-red-400/30 text-red-300 px-3 py-1 rounded-full">
                  🔥 Hot
                </span>
                <span className="text-xs bg-primary-700/60 border border-primary-600 text-primary-300 px-3 py-1 rounded-full">
                  {share.sector}
                </span>
              </div>
              <p className="text-primary-300 text-sm max-w-lg leading-relaxed">
                {share.description}
              </p>
              <div className="flex items-center gap-4 mt-3 flex-wrap">
                <span className="flex items-center gap-1.5 text-xs text-primary-400">
                  <MapPin className="w-4 h-4" /> {share.location}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-primary-400">
                  <Calendar className="w-4 h-4" /> Founded {share.founded}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-primary-400">
                  <Users className="w-4 h-4" /> {share.employees} employees
                </span>
                {share.available && (
                  <span className="flex items-center gap-1 text-xs text-secondary-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-400 inline-block animate-pulse" />
                    &nbsp;Available Now
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Right — quick price pill */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-7 py-5 flex gap-8 shrink-0">
            <div className="text-center">
              <div className="text-xs text-primary-400 uppercase tracking-widest mb-1">Current Price</div>
              <div className="font-serif text-3xl font-bold text-white">
                {fmt(share.price)}
              </div>
              <div className="text-xs text-primary-400">per share</div>
            </div>
            <div className="w-px bg-white/10" />
            <div className="text-center">
              <div className="text-xs text-primary-400 uppercase tracking-widest mb-1">6M Return</div>
              <div className="font-serif text-3xl font-bold text-secondary-300">
                +{share.return6m}%
              </div>
              <div className="text-xs text-primary-400">since Jan 2025</div>
            </div>
            <div className="w-px bg-white/10" />
            <div className="text-center">
              <div className="text-xs text-primary-400 uppercase tracking-widest mb-1">Valuation</div>
              <div className="font-serif text-3xl font-bold text-white">{share.valuation}</div>
              <div className="text-xs text-primary-400">{share.stage}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
