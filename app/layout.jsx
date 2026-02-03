import { Poppins } from "next/font/google";


import "./globals.css";
import "./styles/styles.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Poppins font (same as your HTML)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900",],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "EconexxWealth | Premium Pre-IPO & Unlisted Share Trading",
  description:
    "India's most trusted platform for buying and selling unlisted shares, Pre-IPO stocks, and ESOPs. Experience transparency and expert guidance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
         <Header />
        {children}
         <Footer />
      </body>
    </html>
  );
}
