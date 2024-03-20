"use client";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/swiper-bundle.css";

export default function Carousel() {
  return (
    <section
      className="text-slate-700
      tracking-widest 
      flex flex-col items-center justify-center w-full "
      style={{ height: "90vh" }}
    >
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        // mousewheel={true}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        modules={[Navigation, Pagination]}
        className="w-full h-full"
      >
        <SwiperSlide>
          <img
            className="object-cover w-full h-full brightness-75"
            src="https://images.unsplash.com/photo-1493421419110-74f4e85ba126?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Services"
          />
          <h3
            className="text-slate-100
            w-8/12
            leading-extra-loose  
            absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-semibold 
            md:text-5xl md:font-bold lg:left-2/3 lg:w-1/3 lg:text-6xl"
          >
            Ofertas en impresión digital y offset.
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover w-full h-full brightness-75"
            src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Services"
          />
          <h3
            className="text-slate-100
            w-8/12
            leading-extra-loose
            absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-semibold
            md:text-5xl md:font-bold lg:left-2/3 lg:w-1/3 lg:text-6xl"
          >
            Creamos tu marca, tu imagen, tu publicidad y tu web.
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
