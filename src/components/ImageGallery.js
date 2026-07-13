import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import { Pagination, Autoplay, Navigation, EffectCoverflow } from "swiper/modules";

export default function ImageGallery({ nameImages }) {
  const imgGallery = process.env.PUBLIC_URL + "/assets/";
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const formatImageLabel = (imageName) =>
    imageName
      .split("/")
      .pop()
      .replace(/\.(png|jpe?g|webp|avif)$/i, "")
      .replace(/[-_]+/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

  const openImage = (index) => setSelectedImageIndex(index);
  const closeImage = () => setSelectedImageIndex(null);
  const showPreviousImage = () =>
    setSelectedImageIndex((current) => (current === 0 ? nameImages.length - 1 : current - 1));
  const showNextImage = () =>
    setSelectedImageIndex((current) => (current === nameImages.length - 1 ? 0 : current + 1));

  return (
    <div className="gallery-shell">
      <div className="gallery-glow" />
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1.2}
        spaceBetween={24}
        coverflowEffect={{
          rotate: 8,
          stretch: -18,
          depth: 140,
          modifier: 2.2,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1.35,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 1.7,
            spaceBetween: 36,
          },
        }}
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        className="gallery-swiper"
      >
        {nameImages.map((item, index) => {
          const label = formatImageLabel(item);

          return (
            <SwiperSlide key={`${item}-${index}`} className="gallery-slide">
              <div
                className="gallery-frame"
                role="button"
                tabIndex={0}
                onClick={() => openImage(index)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openImage(index);
                  }
                }}
              >
                <img src={imgGallery + item} alt={label} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {selectedImageIndex !== null && (
        <div className="gallery-modal" role="dialog" aria-modal="true" onClick={closeImage}>
          <div className="gallery-modal-content" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="gallery-modal-close" onClick={closeImage} aria-label="Close preview">
              ×
            </button>
            <button type="button" className="gallery-modal-nav gallery-modal-nav-left" onClick={showPreviousImage} aria-label="Previous image">
              ‹
            </button>
            <img src={imgGallery + nameImages[selectedImageIndex]} alt="Selected project preview" />
            <button type="button" className="gallery-modal-nav gallery-modal-nav-right" onClick={showNextImage} aria-label="Next image">
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
