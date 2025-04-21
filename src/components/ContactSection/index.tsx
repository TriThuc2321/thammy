import ContactForm from "../ContactForm";
import "./styles.css";

export default function ContactSection() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <p className="font-waterBrush mx-auto text-3xl text-center text-[#453a15] font-medium">
          Chân Mày Sương Mai
        </p>

        <h2 className="section-title">Liên Hệ Ngay Các Dịch Vụ</h2>
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
                <p>08.4567.7881 - 08383.55581</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div>
                <h3>Email</h3>
                <p>chanmaysuongmai@gmail.com</p>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
