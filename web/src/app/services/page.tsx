"use client";

import { CommonWrapper } from "@/components/Common/Wrapper";
import { SearchInput } from "@/components/SearchInput";
import Masonry from "react-responsive-masonry";

export default function ServicesPage() {
  const services = [
    {
      source:
        "https://www.grafiquesmogent.com/wp-content/uploads/2020/04/PLV-001a.jpg",
      link: "/",
    },
    {
      source:
        "https://www.grafiquesmogent.com/wp-content/uploads/2020/04/rollup-001-960x1050.jpg",
      link: "/",
    },
    {
      source:
        "https://www.grafiquesmogent.com/wp-content/uploads/2020/04/tottem-001a-960x1050.jpg",
      link: "/",
    },
    {
      source:
        "https://www.grafiquesmogent.com/wp-content/uploads/2020/05/vinilos-001.jpg",
      link: "/",
    },
    {
      source:
        "https://www.grafiquesmogent.com/wp-content/uploads/2020/04/carpetas-001b.jpg",
      link: "/",
    },
    {
      source:
        "https://www.grafiquesmogent.com/wp-content/uploads/2020/04/calendario-001b.jpg",
      link: "/",
    },
    {
      source:
        "https://www.grafiquesmogent.com/wp-content/uploads/2021/04/stopper-impresion-imprenta-barcelona-005.jpg",
      link: "/",
    },
  ];

  return (
    <CommonWrapper>
      <section
        className=" flex-col
      mb-10 mt-10 text-slate-700 text-center flex px-20 align-middle justify-center
      lg:px-0 lg:text-center lg:items-center lg:justify-center  lg:gap-10 lg:mt-20 lg:mb-20 "
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

        <Masonry columnsCount={2}>
          {services.map((photo, index) => (
            <a
              key={index}
              href={photo.link}
              target="_blank"
              rel="noreferrer"
              className="w-full h-full ease-in-out transition-all duration-300 group hover:scale-95 cursor-pointer"
            >
              <img
                src={photo.source}
                alt="Services"
                className="w-full h-full object-cover group-hover:brightness-50"
              />

              <p className="hidden group-hover:block group-hover:brightness-80 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-slate-100 font-normal md:font-semibold text-xs md:text-lg lg:text-2xl">
                Lorem ipsum dolor sit amet elit.
              </p>
            </a>
          ))}
        </Masonry>
      </section>
    </CommonWrapper>
  );
}
