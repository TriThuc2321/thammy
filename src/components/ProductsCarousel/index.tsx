"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./styles.css";

export default function GallerySection() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const images = [
    "/images/carousel/1.png",
    "/images/carousel/2.png",
    "/images/carousel/3.png",
    "/images/carousel/4.png",
    "/images/carousel/5.png",
    "/images/carousel/6.png",
    "/images/carousel/7.png",
    "/images/carousel/8.png",
    "/images/carousel/9.png",
  ];

  return (
    <section className="gallery-section" id="gallery">
      <h2 className="gallery-title">Hình Ảnh Khách Hàng</h2>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        navigation={true}
        effect={"fade"}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay, Navigation, EffectFade]}
        className="swiper-container"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={src}
              alt={"Gallery " + (idx + 1)}
              className="gallery-image"
              onClick={() => setLightboxImage(src)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {lightboxImage && (
        <div className="lightbox" onClick={() => setLightboxImage(null)}>
          <span className="lightbox-close">&times;</span>
          <img src={lightboxImage} alt="Large preview" />
        </div>
      )}
    </section>
  );
}
