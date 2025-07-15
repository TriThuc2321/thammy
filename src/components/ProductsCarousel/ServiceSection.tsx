export default function ServiceSection() {
  return (
    <section className="services" id="services">
      <div className="container">
        <p className="font-waterBrush mx-auto text-3xl text-center text-[#453a15] font-medium">
          Chân Mày Sương Mai
        </p>
        <h2 className="section-title font-noto">Dịch Vụ Của Chúng Tôi</h2>
        <div className="service-grid">
          <div className="service-card">
            <h3 className="font-noto">Chân Mày Trăng Non</h3>
            <p className="text-justify">Dáng mày mềm mại, thanh thoát...</p>
          </div>
          <div className="service-card">
            <h3 className="font-noto">Chân Mày Minh Tướng</h3>
            <p className="text-justify">Tạo dáng mày mạnh mẽ, sắc nét...</p>
          </div>
          <div className="service-card">
            <h3 className="font-noto">Phun Môi Cân Bằng Năng Lượng</h3>
            <p className="text-justify">Chọn màu và dáng môi phù hợp...</p>
          </div>
          <div className="service-card">
            <h3 className="font-noto">Nốt Ruồi Nhân Tướng</h3>
            <p className="text-justify">Định vị và tạo hình nốt ruồi...</p>
          </div>
        </div>
      </div>
    </section>
  );
}