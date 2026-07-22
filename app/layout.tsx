"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Instrument_Serif, Montserrat } from "next/font/google";
import "./globals.css";

import "./assets/css/output.css";
import { getGlobals } from "@/lib/wordpress/global";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
const Globals = await getGlobals();
console.log(`test: ${Globals}`);
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${instrumentSerif.variable}`}
    >
      <body>
        <Header data={Globals}/>
          <main className="flex-1">
            {children}
          </main>
        <Footer data={Globals}/>
            
          <script  src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"></script>
          <script src="https://unpkg.com/lenis@1.3.11/dist/lenis.min.js"></script>
          <script src="https://unpkg.com/split-type"></script>
      </body>
    </html>
  );
}