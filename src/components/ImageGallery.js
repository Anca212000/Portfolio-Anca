import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper, { SwiperSlide, Navigation, Pagination, Autoplay } from "swiper";
// import { Swiper, SwiperSlide } from 'swiper';
import "swiper/css";
// import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import {
  Pagination,
  Autoplay,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";

// SwiperCore.use([Autoplay,Pagination,Navigation]);
// Swiper.use([Navigation, Pagination, Autoplay]);

export default function ImageGallery({ nameImages }) {
  const imgGallery = process.env.PUBLIC_URL + "/assets/";

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        loop={true}
        navigation={true}
        // slidesPerView={"auto"}
        // centeredSlides={true}
        // spaceBetween={30}
        // pagination={{
        //   type: "fraction",
        //   clickable: true,
        // }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // loop={true}
        // navigation
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        className="swiper"
      >
        {nameImages.map((item) => (
          <SwiperSlide className="swiper-slide">
            <img src={imgGallery + item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
