import Image from "next/image";
import banner from "@/assets/images/banner_2.webp";
import "./styles.css";

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <Image
        priority
        loading="eager"
        src={banner}
        className="lg:object-contain object-cover"
        fill
        sizes="100vw"
        alt="Banner"
      />

      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-content">
            <h2 className="font-noto">
              Chân mày vượng khí – Tướng diện thăng hoa
            </h2>
            <p>
              Chân mày ẩn ngọc rồng bay <br></br>
              Dáng mày vượng khí, phúc dày đời sang <br></br>
              Sương Mai đo vẽ chuẩn vàng <br></br>
              Tướng dung rạng rỡ – huy hoàng tiền duyên.
            </p>
            <a href="#contact" className="btn font-noto font-bold text-white">
              Liên Hệ Ngay
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
