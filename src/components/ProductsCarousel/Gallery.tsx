import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

export default function GallerySection() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const images = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg"
  ];

  return (
    <section className="gallery-section" id="gallery">
      <h2 className="gallery-title">Hình Ảnh Khách Hàng</h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        navigation={true}
        effect={'fade'}
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