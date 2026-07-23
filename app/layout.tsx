
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import { Instrument_Serif, Montserrat } from "next/font/google";
import "./globals.css";

import "./assets/css/output.css";
import { getGlobals } from "@/lib/wordpress/global";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import SmoothScroll from "@/components/common/SmoothScroll";
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
            <SmoothScroll />
            {children}
          </main>
        <Footer data={Globals}/>
      </body>
    </html>
  );
}