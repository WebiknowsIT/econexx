// components/Header.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

import Button from "@/components/ui/Button";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isActive = (path) =>
    pathname === path ? "text-primary-600 font-semibold" : "text-gray-500 hover:text-primary-600";


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
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
            <Link href="/unlisted-shares" className={isActive("/unlisted-shares")}>
              All Unlisted<br />Shares
            </Link>

            <Link href="/drhp-filed" className={isActive("/drhp-filed")}>
              DRHP<br />Filed
            </Link>

            <Link href="/partners" className={isActive("/partners")}>
              Become Our<br />Partner
            </Link>

            <Link href="/screener" className={isActive("/screener")}>
              Our<br />Screener
            </Link>

            <Link href="/media-coverage" className={isActive("/media-coverage")}>
              Media<br />Coverage
            </Link>
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

          <Link href="login" className={`text-sm font-semibold text-gray-700 hover:text-primary-600 ${isActive("/login")} `}>
            Sign In
          </Link>
          <Button variant="secondary">Get Started</Button>
        </div>
      </div>
    </nav>
  );
}
