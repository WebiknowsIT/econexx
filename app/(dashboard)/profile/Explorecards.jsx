import { ArrowRight } from "lucide-react";
import Link from "next/link";

const exploreCards = [
  {
    href: "/unlisted-shares",
    label: "Unlisted Shares",
    description: "Invest in pre-listed companies before they go public",
    badge: "500+ Stocks",
    badgeColor: "bg-secondary-100 text-secondary-600",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 17l4-5 3.5 3L14 9l5 8" />
        <path d="M2 20h18" />
        <circle cx="17" cy="5" r="3" />
        <path d="M17 3v2h2" />
      </svg>
    ),
    accent: "from-orange-400 to-amber-400",
    ring: "ring-orange-100",
    btnClass: "bg-secondary-500 hover:bg-secondary-600 text-white",
    iconBg: "bg-secondary-50 text-secondary-500",
  },
  {
    href: "/pre-ipo-stocks",
    label: "Pre-IPO Stocks",
    description: "Get early access to companies filing for IPO",
    badge: "DRHP Filed",
    badgeColor: "bg-primary-100 text-primary-600",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    accent: "from-primary-400 to-violet-400",
    ring: "ring-primary-100",
    btnClass: "bg-primary-600 hover:bg-primary-700 text-white",
    iconBg: "bg-primary-50 text-primary-500",
  },
  {
    href: "/bonds",
    label: "Bonds",
    description: "Fixed income securities with stable assured returns",
    badge: "Upto 12% p.a.",
    badgeColor: "bg-teal-100 text-teal-700",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="2" y="6" width="18" height="13" rx="2" />
        <path d="M6 6V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
        <path d="M11 11v4M9 13h4" />
      </svg>
    ),
    accent: "from-teal-400 to-emerald-400",
    ring: "ring-teal-100",
    btnClass: "bg-teal-600 hover:bg-teal-700 text-white",
    iconBg: "bg-teal-50 text-teal-600",
  },
];

export default function ExploreCards() {
  return (
    <div className="mb-5">
      <div className="grid grid-cols-3 gap-6">
        {exploreCards.map((card) => (
          <div
            key={card.href}
            className={`bg-white border border-slate-200 rounded-2xl p-5 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow duration-200 ring-1 ${card.ring}`}
          >
            <div className="flex items-start justify-between">
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${card.iconBg}`}>
                {card.icon}
              </div>
              <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${card.badgeColor}`}>
                {card.badge}
              </span>
            </div>

            {/* Label & description */}
            <div>
              <p className="text-sm font-bold text-slate-800 mb-1">{card.label}</p>
              <p className="text-xs text-slate-400 leading-relaxed">{card.description}</p>
            </div>

            {/* CTA */}
            <Link
              href={card.href}
              className={`w-full text-center text-xs font-semibold py-2.5 rounded-xl transition-colors duration-150 no-underline items-center justify-center flex gap-3 ${card.btnClass}`}
            >
                Explore <ArrowRight size={14} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}