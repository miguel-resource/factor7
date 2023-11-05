import { Inter } from "next/font/google";
import NavBar from "@/components/common/NavBar";
import Link from "next/link";
import MainSection from "@/components/common/MainSection";
import BannerSlider from "@/components/common/BannerSlider";
import RateSection from "../components/common/RateSection";
import Projects from "../components/common/Projects";
import Footer from "@/components/common/Footer";
import Map from "@/components/common/Map";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <NavBar />
      <MainSection />

      <section
        id="proyectos"
        className="mt-48 md:mt-40 pb-40 relative bg-slate-300"
      >
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden text-slate-300"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 1440 100"
            x="0"
            y="0"
          >
            <polygon
              className="fill-current bg-blue-300 text-slate-300"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto px-4 pb-32 m-44 mb-20 pt-0">
          <BannerSlider />
        </div>
        <div
          id="testimonios"
          className="container mx-auto px-4 pb-32 mb-20 pt-0"
        >
          <RateSection />
        </div>
      </section>
      <Projects />

      <Map />

      <Footer />
    </>
  );
}
