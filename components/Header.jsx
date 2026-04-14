// components/Header.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "@/components/ui/Button";
import { usePathname, useRouter } from "next/navigation";
import { LogIn, User, LogOut } from "lucide-react";



import { isLoggedIn , logoutUser } from "@/utils/auth";
import { getLocalStorageItem } from "@/utils/localStorage";
import { useDispatch } from "react-redux";



export default function Header() {

const dispatch = useDispatch();
const router = useRouter();

const [open, setOpen] = useState(false);

const userInfo = getLocalStorageItem("user-info", {});
const user = userInfo?.user;

const name = user?.name || "";
const initial = name ? name.charAt(0).toUpperCase() : "U";

const pathname = usePathname();

  const isActive = (path) =>
    pathname === path ? "text-primary-600 font-semibold" : "text-gray-500 hover:text-primary-600";


  return (
    <nav className="fixed top-0 w-full z-50 glass-nav border-b border-gray-100 bg-white/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 h-20 flex gap-5 items-center justify-between w-full">
        <Link href='/' className="text-2xl font-bold tracking-tighter text-primary-700 flex items-center">
            <Image
              src="/images/Logo.png"
              alt="Logo"
              height={50}
              width={200}  
              priority
              className="w-auto h-[46px]"
            />
          </Link>
          <div className="mainMenu hidden lg:flex items-center gap-4 text-sm font-medium">
            <Link href="/unlisted-shares" className={isActive("/unlisted-shares")}>
              Unlisted Shares
            </Link>
            <Link href="/pre-ipo-stocks" className={isActive("/pre-ipo-stocks")}>
              Pre-IPO Stocks
            </Link>
            <Link href="/smart-screener" className={isActive("/smart-screener")}>
              Smart Screener
            </Link>
            <Link href="/bonds" className={isActive("/bonds")}>
              Bonds
            </Link>
            <Link href="/news-and-insights" className={isActive("/news-and-insights")}>
              Insights
            </Link>
            <Link href="/partner-with-us" className={isActive("/partner-with-us")}>
              Partner With Us
            </Link>
          </div>
        

        {/* RIGHT */}
        <div className="flex items-center gap-4 shrink-0">
            {/* <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="7" cy="7" r="6" />
              <path d="m15 15-3-3" />
            </svg> */}
          {/* <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 gap-2">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="7" cy="7" r="6" />
              <path d="m15 15-3-3" />
            </svg>
            <input
              type="text"
              placeholder="Search companies..."
              className="bg-transparent border-none focus:ring-0 text-sm w-40"
            />
          </div> */}

          {!isLoggedIn() ? (
            <Button
              variant="outline"
              href="/login"
              className={`shrink-0 ${isActive("/login")}`}
            >
              <LogIn size={14} className="mr-2" />
              Sign In
            </Button>
          ) : (
            <div className="relative">

              {/* USER BUTTON */}
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center"
              >
                <div className="w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center text-sm font-bold shadow">
                  {initial}
                </div>
              </button>

              {/* DROPDOWN */}
              {open && (
                <div className="absolute right-0 mt-2 w-48 bg-white overflow-hidden rounded-lg shadow-lg z-50">

                  {/* <button
                    onClick={() => {
                      setOpen(false);
                      router.push("/profile");
                    }}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center gap-2"
                  >
                    <User size={14} /> Profile
                  </button> */}

                  <button
                    onClick={() => {
                      setOpen(false);
                      logoutUser(dispatch, router.push);
                    }}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center gap-2 text-red-500"
                  >
                    <LogOut size={14} /> Logout
                  </button>

                </div>
              )}
            </div>
          )}


          <Button href="/contact-us" variant="secondary">Get Started</Button>
        </div>
      </div>
    </nav>
  );
}
