import "./styles.css";

export default function TestimonialsSection() {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">Khách Hàng Nói Gì</h2>
        <div className="testimonial-slider">
          <div className="testimonial-card">
            <div className="quote">
              Dịch vụ tư vấn phong thủy của Ngọc San đã giúp gia đình tôi cải
              thiện rõ rệt về mặt tài chính và sức khỏe. Rất hài lòng!
            </div>
            <div className="client-name">- Nguyễn Văn A</div>
          </div>
          <div className="testimonial-card">
            <div className="quote">
              Vật phẩm phong thủy chất lượng cao, giá cả hợp lý. Tôi sẽ quay lại
              mua thêm sản phẩm khác.
            </div>
            <div className="client-name">- Trần Thị B</div>
          </div>
        </div>
      </div>
    </section>
  );
}
