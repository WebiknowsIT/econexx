"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {getInitials} from "@/utils/helper"

const navItems = [
  {
    section: "Account",
    label: "My Profile",
    href: "/profile",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="8" cy="5" r="3" />
        <path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      </svg>
    ),
  },
  {
    label: "My Portfolio",
    href: "/profile/portfolio",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="12" height="12" rx="2" />
        <path d="M5 8h6M5 5h6M5 11h4" />
      </svg>
    ),
  },
  // {
  //   label: "Watchlist",
  //   href: "/profile/watchlist",
  //   icon: (
  //     <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
  //       <path d="M8 2l1.8 3.6L14 6.3l-3 2.9.7 4.1L8 11.1l-3.7 2.2.7-4.1-3-2.9 4.2-.7z" />
  //     </svg>
  //   ),
  // },
  {
    label: "Transaction History",
    href: "/profile/transactions",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="8" cy="8" r="6" />
        <path d="M8 4v4l2.5 2.5" />
      </svg>
    ),
  },
  // {
  //   section: "Settings",
  //   label: "Account Settings",
  //   href: "/profile/settings",
  //   icon: (
  //     <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
  //       <circle cx="8" cy="8" r="2.5" />
  //       <path d="M8 1.5v2M8 12.5v2M1.5 8h2M12.5 8h2M3.6 3.6l1.4 1.4M11 11l1.4 1.4M3.6 12.4l1.4-1.4M11 5l1.4-1.4" />
  //     </svg>
  //   ),
  // },
  {
    label: "Change Password",
    href: "/profile/change-password",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="7" width="8" height="7" rx="1" />
        <path d="M5 7V5a3 3 0 0 1 6 0v2" />
      </svg>
    ),
  },
  // {
  //   label: "KYC / Documents",
  //   href: "/profile/kyc",
  //   icon: (
  //     <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
  //       <rect x="2" y="1" width="12" height="14" rx="1.5" />
  //       <path d="M5 5h6M5 8h6M5 11h3" />
  //     </svg>
  //   ),
  // },
];

export default function ProfileSidebar({ user }) {
  const pathname = usePathname();

  return (
    <aside className="w-60 shrink-0 bg-white border-r border-purple-100 flex flex-col min-h-screen shadow-sm">

      {/* User mini card */}
      <div className="px-5 py-6 border-b border-purple-100">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary-400 to-secondary-400 flex items-center justify-center text-base font-bold text-white mb-3 shadow-md shadow-secondary-200">
          {getInitials(user.name)}
        </div>
        <p className="text-sm font-semibold text-slate-800 leading-tight mb-1">{user.name}</p>
        <p className="text-xs text-purple-400 capitalize tracking-wide">
          {user.account_type} · {user.role}
        </p>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-2">
        {navItems.map((item, idx) => {
          const isActive = pathname === item.href;
          const prevItem = navItems[idx - 1];
          const showSection = item.section && item.section !== prevItem?.section;

          return (
            <div key={item.href}>
              {showSection && (
                <p className="px-5 pt-4 pb-1 text-[9px] font-semibold tracking-widest uppercase text-purple-300">
                  {item.section}
                </p>
              )}
              {item.section === "Settings" && (
                <div className="mx-5 my-2 h-px bg-purple-100" />
              )}
              <Link
                href={item.href}
                className={`flex items-center gap-2.5 px-5 py-2.5 text-[13px] border-l-2 transition-all duration-150 no-underline
                  ${isActive
                    ? "border-secondary-400 bg-secondary-50 text-secondary-500 font-semibold"
                    : "border-transparent text-slate-500 hover:bg-purple-50 hover:text-slate-700 font-normal"
                  }`}
              >
                <span className={`flex shrink-0 ${isActive ? "opacity-100" : "opacity-50"}`}>
                  {item.icon}
                </span>
                {item.label}
              </Link>
            </div>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="border-t border-purple-100 pt-2 pb-4">
        <Link
          href="/logout"
          className="flex items-center gap-2.5 px-5 py-2.5 text-[13px] text-rose-400 border-l-2 border-transparent hover:bg-rose-50 transition-all duration-150 no-underline"
        >
          <span className="flex shrink-0 opacity-75">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 3H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3M10 11l4-3-4-3M14 8H6" />
            </svg>
          </span>
          Logout
        </Link>
      </div>
    </aside>
  );
}