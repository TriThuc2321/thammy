import "./styles.css";

const services = [
  {
    icon: "🏠",
    title: "Tư Vấn Phong Thủy Nhà Ở",
    description:
      "Phân tích và tư vấn phong thủy cho nhà ở, giúp mang lại sự cân bằng và thịnh vượng.",
  },
  {
    icon: "🏢",
    title: "Phong Thủy Văn Phòng",
    description:
      "Thiết kế và bố trí không gian làm việc hài hòa, tăng cường năng suất và thành công.",
  },
  {
    icon: "📜",
    title: "Xem Ngày Tốt",
    description:
      "Tư vấn chọn ngày tốt cho các sự kiện quan trọng trong cuộc sống và công việc.",
  },
  {
    icon: "🧿",
    title: "Vật Phẩm Phong Thủy",
    description:
      "Cung cấp các vật phẩm phong thủy chất lượng cao để cải thiện năng lượng.",
  },
];
export default function ServiceSection() {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title">Dịch Vụ</h2>
        <div className="service-grid">
          {services.map(({ icon, title, description }) => (
            <div className="service-card" key={title}>
              <div className="service-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
