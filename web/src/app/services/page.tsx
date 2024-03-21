"use client";

import { CommonWrapper } from "@/components/Common/Wrapper";
import { SearchInput } from "@/components/SearchInput";
import { ServicesList } from "@/components/ServicesList";
import { Provider, useSelector } from "react-redux";
import Masonry from "react-responsive-masonry";

export default function ServicesPage() {
  const services = [
    {
      source:
        "https://www.grafiquesmogent.com/wp-content/uploads/2020/04/PLV-001a.jpg",
      link: "/",
      name: "PLV",
    },
    {
      source:
        "https://www.grafiquesmogent.com/wp-content/uploads/2020/04/rollup-001-960x1050.jpg",
      link: "/",
      name: "Rollup",
    },
    {
      source:
        "https://www.grafiquesmogent.com/wp-content/uploads/2020/04/tottem-001a-960x1050.jpg",
      link: "/",
      name: "Tottem",
    },
    {
      source:
        "https://www.grafiquesmogent.com/wp-content/uploads/2020/05/vinilos-001.jpg",
      link: "/",
      name: "Vinilos",
    },
    {
      source:
        "https://www.grafiquesmogent.com/wp-content/uploads/2020/04/carpetas-001b.jpg",
      link: "/",
      name: "Carpetas",
    },
    {
      source:
        "https://www.grafiquesmogent.com/wp-content/uploads/2020/04/calendario-001b.jpg",
      link: "/",
      name: "Calendario",
    },
    {
      source: "https://www.grafiquesmogent.com/wp-content/uploads/2021/04/stopper-impresion-imprenta-barcelona-005.jpg",
      link: "/",
      name: "Stopper",
    },
  ];

  return (
    <CommonWrapper>
      <section
        className=" flex-col
      mb-10 mt-10 text-slate-700 text-center flex px-5 align-middle justify-center
      lg:text-center lg:items-center lg:justify-center  lg:gap-10 lg:mt-20 lg:mb-20 "
      >
        <div className="flex flex-col mx-auto w-full mb-10  lg:mx-auto lg:px-64">
          <h3 className="mb-10 mt-20">
            <span className="font-semibold text-2xl mt-10 tracking-widest lg:text-4xl">
              Nuestros servicios
            </span>
          </h3>{" "}
          <p className="text-sm lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            in mauris et odio convallis ultrices. In hac habitasse platea
            dictumst
          </p>
        </div>

        <SearchInput />

        <ServicesList services={services} />
      </section>
    </CommonWrapper>
    
  );
}
