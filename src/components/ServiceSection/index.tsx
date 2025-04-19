import "./styles.css";

const services = [
  {
    title: "Chân Mày Trăng Non",
    description:
      "Dịch vụ này kết hợp kỹ thuật phun mày tinh tế với nguyên lý nhân tướng học, giúp xác định dáng mày phù hợp với bản mệnh và năng lượng cá nhân, từ đó hỗ trợ tạo sự thịnh vượng và cân bằng cuộc sống, bạn sẽ có được vẻ đẹp nhẹ nhàng, sắc sảo và một thần thái tựa như ánh sáng trăng – hài hòa tôn lên khí sắc tự nhiên.",
  },
  {
    title: "Chân Mày Minh Tướng",
    description:
      "Tạo hình dáng mày chuẩn xác, sắc nét theo cấu trúc gương mặt và khí sắc riêng từng người. Kết hợp kỹ thuật thẩm mỹ với nguyên tắc nhân tướng học hiện đại, giúp tôn lên thần thái sáng rõ, phong độ và bản lĩnh tự nhiên của phái mạnh.",
  },
  {
    title: "Phun Môi Cân Bằng Năng Lượng",
    description:
      "Chọn màu môi và dáng môi theo sắc diện và ngũ hành cá nhân, giúp cân bằng năng lượng khuôn mặt. Đôi môi không chỉ rạng rỡ mà còn truyền tải cảm xúc tích cực, làm bừng sáng thần sắc một cách tự nhiên.",
  },
  {
    title: "Nốt Ruồi Nhân Tướng",
    description:
      "Đặt điểm nhấn tinh tế theo vị trí được tư vấn bởi nhân tướng học hiện đại. Mỗi nốt ruồi không chỉ là nét riêng, mà còn là “dấu ấn năng lượng” giúp khuôn mặt trở nên thu hút và hài hòa hơn với khí chất thật sự bên trong.",
  },
];
export default function ServiceSection() {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title">Dịch Vụ</h2>
        <div className="service-grid">
          {services.map(({ title, description }) => (
            <div className="service-card" key={title}>
              <h3>{title}</h3>
              <p className="text-justify">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
