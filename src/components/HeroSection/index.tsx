import Image from "next/image";
import banner from "@/assets/images/banner.webp";
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
            <h2>Chào Mừng Đến Với Chân Mày Sương Mai</h2>
            <p>
              Tại Sương Mai, vẻ đẹp không chỉ đến từ kỹ thuật – mà còn từ sự
              thấu hiểu về thần thái, khí sắc và tính cách từng khách hàng. Mỗi
              nét chạm đều mang theo sự tinh tế và định hình nên một phiên bản
              đẹp hơn – đúng với bạn nhất.
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
