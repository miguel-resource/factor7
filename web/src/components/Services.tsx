"use client";

import { link } from "fs";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function Services() {
  const photos = [
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
    <section className="text-slate-700 flex flex-col items-center justify-center w-full">
      <h3 className="mb-10 mt-20">
        <span className="font-semibold text-2xl mt-10 tracking-widest lg:text-4xl">
          Nuestros servicios
        </span>
      </h3>
      <Masonry columnsCount={3}>
        {photos.map((photo, index) => (
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
  );
}
