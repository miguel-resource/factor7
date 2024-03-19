import Carousel from "@/components/Carousel";
import Header from "@/components/Common/Header";
import Description from "@/components/Description";
import Services from "@/components/Services";
import Image from "next/image";
import SecurityPoints from "../components/SecurityPoints";
import MainClients from "@/components/MainClients";
import MainAsociation from "@/components/MainAsociation";
import Footer from "@/components/Common/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <Header />
      <Carousel />
      <Description />
      <Services />
      <SecurityPoints />
      <MainClients />
      <MainAsociation />
      <Footer />
    </main>
  );
}