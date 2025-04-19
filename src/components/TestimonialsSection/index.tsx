import "./styles.css";

export default function TestimonialsSection() {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">Khách Hàng Nói Gì</h2>
        <div className="testimonial-slider">
          <div className="testimonial-card">
            <div className="quote">
              Dịch vụ phun mày Trăng Non tại Sương Mai thật sự đã thay đổi diện
              mạo của tôi. Không chỉ đẹp về mặt thẩm mỹ mà còn giúp tôi cảm thấy
              tự tin hơn rất nhiều. Cách tư vấn theo nhân tướng học rất độc đáo
              và hiệu quả!
            </div>
            <div className="client-name">- Chị Thanh Hương</div>
          </div>

          <div className="testimonial-card">
            <div className="quote">
              Phun môi cân bằng năng lượng là một trải nghiệm tuyệt vời. Màu môi
              được chọn rất hợp với tông da và khí chất của tôi. Sau 3 tháng,
              môi vẫn giữ màu đẹp tự nhiên và tôi nhận được rất nhiều lời khen.
            </div>
            <div className="client-name">- Chị Mai Anh</div>
          </div>

          <div className="testimonial-card">
            <div className="quote">
              Là nam giới, tôi rất hài lòng với dịch vụ Chân Mày Minh Tướng.
              Dáng mày được thiết kế vừa nam tính vừa phù hợp với khuôn mặt. Đặc
              biệt ấn tượng với cách tư vấn chuyên nghiệp dựa trên nhân tướng
              học.
            </div>
            <div className="client-name">- Anh Minh Quân</div>
          </div>
        </div>
      </div>
    </section>
  );
}
