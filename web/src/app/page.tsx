import Carousel from "@/components/Carousel";
import Header from "@/components/Common/Header";
import Description from "@/components/Description";

import SecurityPoints from "../components/SecurityPoints";
import MainClients from "@/components/MainClients";
import MainAssociation from "@/components/MainAssociation";
import Footer from "@/components/Common/Footer";
import Services from "@/components/Services";
import { CommonWrapper } from "@/components/Common/Wrapper";

export default function Home() {
  return (
    <CommonWrapper>
      <Carousel />
      <Description />
      <Services />
      <SecurityPoints />
      <MainClients />
      <MainAssociation />
    </CommonWrapper>
  );
}
