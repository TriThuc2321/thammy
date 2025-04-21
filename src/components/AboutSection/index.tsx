import Image from "next/image";
import about from "@/assets/images/about.webp";
import "./styles.css";

export default function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="container">
        <p className="font-waterBrush mx-auto text-3xl text-center text-[#453a15] font-medium">
          Chân Mày Sương Mai
        </p>
        <h2 className="section-title">Giới Thiệu Về Chúng Tôi</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Toạ lạc tại trung tâm Quận Ninh Kiều, TP Cần Thơ, chúng tôi tin
              rằng mỗi đường nét trên gương mặt không chỉ phản ánh cá tính, mà
              còn là chiếc “bản đồ năng lượng” riêng biệt của từng người. Lấy
              cảm hứng từ nhân tướng học hiện đại và tinh hoa thẩm mỹ phương
              Đông, các dịch vụ tại đây được thiết kế để tái cân bằng diện mạo,
              nâng tầm thần thái và giúp bạn tỏa sáng một cách tự nhiên, đầy
              cuốn hút.
            </p>
          </div>
          <div className="w-full h-[620px] relative">
            <Image
              src={about}
              sizes="100vw"
              style={{ objectFit: "cover" }}
              fill
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
