// "use client"
import "@/globals.css";
// import "bootstrap/dist/css/bootstrap.min.css"
import Loading from "./Loading";
// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { ContextProvider } from "@/contexts/ContextProvider";
import Header from "@/components/HeaderComponents/Header";
import Footer from "@/components/FooterComponents/Footer";
import MobileBottomMenu from "@/components/HeaderComponents/MobileBottomMenu";
import BackToTop from "@/components/common/BackToTop";
import Navbar from "@/components/HeaderComponents/Navbar";
import MobileNavbar from "@/components/HeaderComponents/MobileNavbar";

import { Tajawal } from "next/font/google";

const tajawalFont = Tajawal({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  // display: "swap",
  preload: true,
  fallback: [],
  variable: "--font-tajawal",
});

export default function RootLayout({ children }) {
  //   useEffect(() => {import("bootstrap/dist/js/bootstrap");
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  return (
    <html dir="rtl" className={tajawalFont.className}>
      <ContextProvider>
        <body className="relative">
          <BackToTop />
          <MobileBottomMenu />
          <Header />
          <div className="block max-lg:hidden">
            <Navbar />
          </div>
          <div className="hidden max-lg:block">
            <MobileNavbar />
          </div>
          {children}
          <Footer />
        </body>
      </ContextProvider>
    </html>
  );
}
