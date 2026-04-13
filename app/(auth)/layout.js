"use client";

import AuthRight from "./AuthRight";
import { useAuthGuard } from "@/hooks/useAuthGuard";

export default function Layout({ children }) {
  const ready = useAuthGuard("guest");

  // 🔥 Prevent flicker
  if (!ready) return null;

  return (
    <div className="container-fluid min-h-screen">
      <div className="grid grid-cols-12 gap-4 auth-layout">
        <div className="auth-left col-span-12 md:col-span-6 flex flex-col justify-center">
          {children}
        </div>

        <AuthRight
          imgSrc="/images/login.webp"
          heading="Invest Smarter in Private Markets"
          description="Discover unlisted and pre-IPO opportunities backed by research, transparency, and expert guidance—built for serious investors."
        />
      </div>
    </div>
  );
}