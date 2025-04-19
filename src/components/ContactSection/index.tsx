import ContactForm from "../ContactForm";
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
                <p>Địa chỉ 156B đường Mậu Thân, An Phú, Ninh Kiều, Cần Thơ</p>
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
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
