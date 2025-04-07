import "./styles.css";

export default function ContactSection() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Liên Hệ</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h3>Địa Chỉ</h3>
                <p>123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <h3>Điện Thoại</h3>
                <p>0123 456 789</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div>
                <h3>Email</h3>
                <p>info@phongthuyngocsan.vn</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form action="#" method="POST">
              <div className="form-group">
                <label htmlFor="name">Họ và Tên</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Số Điện Thoại</label>
                <input type="tel" id="phone" name="phone" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Tin Nhắn</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn">
                Gửi Tin Nhắn
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
