import Breadcumb from "@/components/common/Breadcumb";
import ChangePassword from "@/components/dashboard/ChangePassword";
import Profile from "@/components/dashboard/Profile";
import Footer1 from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import Topbar from "@/components/headers/Topbar";

import React from "react";

export const metadata = {
  title: "Accout Address || Vineta - Multipurpose React Nextjs eCommerce",
  description: "Vineta - Multipurpose React Nextjs eCommerce",
};
export default function page() {
  return (
    <>
      <Topbar parentClass="tf-topbar bg-dark-5 topbar-bg" />
      <Header />
      <Breadcumb pageName="Change Password" pageTitle="Change Password" />
      <ChangePassword />
      <Footer1 />
    </>
  );
}
