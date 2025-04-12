import Image from "next/image";
import banner from "@/assets/images/banner.webp";
import "./styles.css";

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <Image src={banner} style={{ objectFit: "cover" }} fill alt="" />

      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-content">
            <h2>Chào Mừng Đến Với Chân Mày Sương Mai</h2>
            <p>
              Giải pháp phong thủy chuyên nghiệp cho cuộc sống hài hòa và thịnh
              vượng
            </p>
            <a href="#contact" className="btn">
              Liên Hệ Ngay
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
