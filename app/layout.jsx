import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";


import "./globals.css";
import "./../styles/styles.scss";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { ReduxProvider } from "@/store/provider";
import AppInitializer from "./_init/AppInitializer";

// Poppins font (same as your HTML)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900",],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "EconexxWealth | Premium Pre-IPO & Unlisted Share Trading ",
  description:
    "India's most trusted platform for buying and selling unlisted shares, Pre-IPO stocks, and ESOPs. Experience transparency and expert guidance.",
    robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <ReduxProvider>
          <Toaster position="bottom-right" />
          <AppInitializer /> 
         <Header />
          {children}
         <Footer />
         </ReduxProvider>
      </body>
    </html>
  );
}
