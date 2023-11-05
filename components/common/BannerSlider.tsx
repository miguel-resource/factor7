import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";

import {
  Navigation,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import Link from "next/link";

const BannerSlider = () => {
  return (
    <section>
      <h6 className="text-4xl text-center mb-1 font-semibold tracking-widest mt-20">
        Destacados
      </h6>

      <Swiper
        effect="coverflow"
        modules={[Navigation, Scrollbar, A11y, Autoplay, EffectCoverflow]}
        spaceBetween={50}
        autoplay={{ delay: 4000 }}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        scrollbar={{ draggable: true, hide: false }}
        loop={true}
        width={1620}
        slidesPerView={2}
        className="mt-20"
      >
        <SwiperSlide>
          <Link href={"/"}>
            <img src="https://picsum.photos/1920/1080?random=1" alt="banner1" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            href={{
              pathname: "/",
            }}
          >
            <img src="https://picsum.photos/1920/1080?random=2" alt="banner2" />
          </Link>

        </SwiperSlide>
        <SwiperSlide>
            <Link
              href={{
                pathname: "/",
              }}
            >
          <img src="https://picsum.photos/1920/1080?random=3" alt="banner3" />
            </Link>

        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/1920/1080?random=4" alt="banner4" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default BannerSlider;
