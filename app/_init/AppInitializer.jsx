"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompany, fetchFooter } from "@/store/action/companyActions";

export default function AppInitializer() {
  const dispatch = useDispatch();

  const { headerStatus, footerStatus } = useSelector((state) => state.company);

  useEffect(() => {
    // ✅ Fetch Header
    if (headerStatus === "idle") {
      dispatch(fetchCompany());
    }

    // ✅ Fetch Footer
    if (footerStatus === "idle") {
      dispatch(fetchFooter());
    }
  }, [headerStatus, footerStatus, dispatch]);

  return null;
}