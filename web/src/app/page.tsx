import Carousel from "@/components/Carousel";
import Header from "@/components/Common/Header";
import Description from "@/components/Description";

import SecurityPoints from "../components/SecurityPoints";
import MainClients from "@/components/MainClients";
import MainAssociation from "@/components/MainAssociation";
import Footer from "@/components/Common/Footer";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      <Header />
      <Carousel />
      <Description />
      <Services />
      <SecurityPoints />
      <MainClients />
      <MainAssociation />
      <Footer />
    </main>
  );
}
