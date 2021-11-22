import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css';
import 'swiper/modules/pagination/pagination.scss';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/effect-coverflow/effect-coverflow.scss';
import 'swiper/modules/effect-coverflow/effect-coverflow.js';
import SwiperCore, {Autoplay,Pagination,Navigation} from 'swiper';
import '../css/animations.css';

SwiperCore.use([Autoplay,Pagination,Navigation]);

export default function ImageGallery({nameImages}) {
    const imgGallery = process.env.PUBLIC_URL + '/assets/';
    
    return (
        <>
            <Swiper 
            slidesPerView={3} centeredSlides={true} spaceBetween={30} pagination={{
            "type": "fraction"
            }} 
            autoplay={{
                "delay": 2500,
                "disableOnInteraction": false
            }}
            loop={true}
            navigation={true} className="swiper">
                {nameImages.map(item => <SwiperSlide className="swiper-slide"><img src={imgGallery + item} /></SwiperSlide>)} 
            </Swiper>
        </>
    )
}