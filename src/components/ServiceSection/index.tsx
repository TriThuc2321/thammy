import "./styles.css";

export default function ServiceSection() {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title">Dịch Vụ</h2>
        <div className="service-grid">
          <div className="service-card">
            <div className="service-icon">🏠</div>
            <h3>Tư Vấn Phong Thủy Nhà Ở</h3>
            <p>
              Phân tích và tư vấn phong thủy cho nhà ở, giúp mang lại sự cân
              bằng và thịnh vượng.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">🏢</div>
            <h3>Phong Thủy Văn Phòng</h3>
            <p>
              Thiết kế và bố trí không gian làm việc hài hòa, tăng cường năng
              suất và thành công.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">📜</div>
            <h3>Xem Ngày Tốt</h3>
            <p>
              Tư vấn chọn ngày tốt cho các sự kiện quan trọng trong cuộc sống và
              công việc.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">🧿</div>
            <h3>Vật Phẩm Phong Thủy</h3>
            <p>
              Cung cấp các vật phẩm phong thủy chất lượng cao để cải thiện năng
              lượng.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
