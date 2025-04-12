import Image from "next/image";
import banner from "@/assets/images/banner.webp";
import "./styles.css";

export default function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">Giới Thiệu</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Chân Mày Sương Mai là đơn vị chuyên cung cấp các dịch vụ và sản
              phẩm phong thủy chất lượng cao, mang đến sự cân bằng và thịnh
              vượng cho không gian sống và làm việc của bạn.
            </p>
            <p>
              Với nhiều năm kinh nghiệm trong lĩnh vực phong thủy, chúng tôi tự
              hào mang đến những giải pháp phong thủy hiệu quả, phù hợp với nhu
              cầu của từng khách hàng.
            </p>
          </div>
          <div className="about-image">
            <Image src={banner} style={{ objectFit: "cover" }} fill alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
