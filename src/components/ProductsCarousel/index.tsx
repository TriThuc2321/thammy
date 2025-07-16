"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./styles.css";
import Image from "next/image";

const images = Array.from(
  { length: 39 },
  (_, index) => `/images/carousel/${index + 1}.png`
);
images.splice(29, 2);

export default function GallerySection() {
  const [zoomImage, setZoomImage] = useState<string | null>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className=" bg-[#f9f6f2] py-10" id="gallery">
      <div className="container">
        <h2 className="section-title">Hình Ảnh Khách Hàng</h2>
        <div className="relative">
          <button
            ref={prevRef}
            className="custom-swiper-prev carousel-nav-btn left-0"
            aria-label="Previous"
            type="button"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button
            ref={nextRef}
            className="custom-swiper-next carousel-nav-btn right-0"
            aria-label="Next"
            type="button"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
          <Swiper
            spaceBetween={20}
            slidesPerView={4}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Autoplay, Navigation, EffectFade]}
            className="swiper-container"
            onInit={(swiper) => {
              // @ts-expect-error: Swiper types do not recognize dynamic prevEl assignment
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-expect-error: Swiper types do not recognize dynamic nextEl assignment
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-[300px] rounded-2xl overflow-hidden">
                  <Image
                    fill
                    src={src}
                    alt={`Gallery ${index + 1}`}
                    className="gallery-image object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onClick={() => setZoomImage(src)}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {zoomImage && (
          <div className="lightbox">
            <span onClick={() => setZoomImage(null)} className="lightbox-close">
              &times;
            </span>
            <div className="relative justify-center items-center flex m-auto w-4/5 h-4/5">
              <Image
                fill
                sizes="90vw"
                src={zoomImage}
                alt="Large preview"
                className="object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
