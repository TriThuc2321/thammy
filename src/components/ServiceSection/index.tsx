import "./styles.css";

const services = [
  {
    title: "Chân Mày Trăng Non",
    description:
      "Dáng mày mềm mại, thanh thoát, cân bằng đường nét gương mặt – hài hòa năng lượng và thu hút ánh nhìn một cách tự nhiên.",
  },
  {
    title: "Chân Mày Minh Tướng",
    description:
      "Tạo dáng mày mạnh mẽ, sắc nét theo nhân tướng học hiện đại – tôn lên phong thái và khí chất riêng của từng người.",
  },
  {
    title: "Phun Môi Cân Bằng Năng Lượng",
    description:
      "Chọn màu và dáng môi phù hợp với ngũ hành – giúp thần sắc rạng rỡ, dung mạo hài hòa và tràn đầy sinh khí.",
  },
  {
    title: "Nốt Ruồi Nhân Tướng",
    description:
      "Định vị và tạo hình nốt ruồi theo nhân tướng học hiện đại – kích hoạt điểm sáng phong thái, tăng sức hút tự nhiên và may mắn.",
  },
];
export default function ServiceSection() {
  return (
    <section className="services" id="services">
      <div className="container">
        <p className="font-waterBrush mx-auto text-3xl text-center text-[#453a15] font-medium">
          Chân Mày Sương Mai
        </p>

        <h2 className="section-title font-cardo">Dịch Vụ Của Chúng Tôi</h2>

        <div className="service-grid">
          {services.map(({ title, description }) => (
            <div className="service-card" key={title}>
              <h3 className="font-cardo">{title}</h3>
              <p className="text-justify">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
