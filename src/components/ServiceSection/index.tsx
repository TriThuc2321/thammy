import "./styles.css";
import Image from "next/image";

const services = [
  {
    title: "Chân Mày Trăng Non",
    description:
      "Dáng mày mềm mại, thanh thoát, cân bằng đường nét gương mặt – hài hòa năng lượng và thu hút ánh nhìn một cách tự nhiên.",
    image: "/images/services/ChanMayTrangNon.webp",
  },
  {
    title: "Chân Mày Minh Tướng",
    description:
      "Tạo dáng mày mạnh mẽ, sắc nét theo nhân tướng học hiện đại – tôn lên phong thái và khí chất riêng của từng người.",
    image: "/images/services/ChanMayMinhTuong.webp",
  },
  {
    title: "Phun Môi Cân Bằng Năng Lượng",
    description:
      "Chọn màu và dáng môi phù hợp với ngũ hành – giúp thần sắc rạng rỡ, dung mạo hài hòa và tràn đầy sinh khí.",
    image: "/images/services/PhunMoi.webp",
  },
  {
    title: "Nốt Ruồi Nhân Tướng",
    description:
      "Định vị và tạo hình nốt ruồi theo nhân tướng học hiện đại – kích hoạt điểm sáng phong thái, tăng sức hút tự nhiên và may mắn.",
    image: "/images/services/NotRuoi.webp",
  },
];

export default function ServiceSection() {
  return (
    <section className="services" id="services">
      <div className="container">
        <p className="font-waterBrush mx-auto text-3xl text-center text-[#453a15] font-medium">
          Chân Mày Sương Mai
        </p>

        <h2 className="section-title font-noto">Dịch Vụ Của Chúng Tôi</h2>

        <div className="service-grid">
          {services.map(({ title, description, image }) => (
            <div className="service-card" key={title}>
              <div className="relative h-[520px] lg:h-[360px] w-full rounded-lg">
                <Image
                  src={image}
                  fill
                  alt={title}
                  className=" w-full object-cover rounded-lg"
                />
              </div>
              <h3 className="font-noto">{title}</h3>
              <p className="text-justify">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
