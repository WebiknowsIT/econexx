// components/Header.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav border-b border-gray-100 bg-white/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link href='/' className="text-2xl font-bold tracking-tighter text-primary-700 flex items-center gap-2">
            <Image
              src="/images/Logo.png"
              alt="Logo"
              height={50}
              width={200}  
              priority
              className="w-auto h-[50px] ml-[-14px]"
            />
          </Link>
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-500">
            <Link href="/unlisted-shares" className="hover:text-primary-600">
              All Unlisted<br />Shares
            </Link>
            <a href="#" className="hover:text-primary-600">
              DRHP<br />Filed
            </a>
            <a href="#" className="hover:text-primary-600">
              Become Our<br />Partner
            </a>
            <a href="#" className="hover:text-primary-600">
              Our<br />Screener
            </a>
            <a href="#" className="hover:text-primary-600">
              Media<br />Coverage
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 gap-2">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="7" cy="7" r="6" />
              <path d="m15 15-3-3" />
            </svg>
            <input
              type="text"
              placeholder="Search companies..."
              className="bg-transparent border-none focus:ring-0 text-sm w-40"
            />
          </div>

          <button className="text-sm font-semibold text-gray-700 hover:text-primary-600">
            Sign In
          </button>

          <button className="bg-primary-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-700 shadow-lg shadow-primary-100">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
