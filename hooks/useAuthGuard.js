"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { isLoggedIn } from "@/utils/auth";

export const useAuthGuard = (type = "private") => {
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const loggedIn = isLoggedIn();

    if (type === "private" && !loggedIn) {
      toast.error("Please login first", { id: "auth-error" });
      router.replace("/login");
      return;
    }

    if (type === "guest" && loggedIn) {
      toast.success("You are already logged in", { id: "auth-success" });
      router.replace("/");
      return;
    }

    setChecked(true);
  }, [type, router]);

  return checked;
};