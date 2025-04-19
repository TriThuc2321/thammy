import "./styles.css";
export default function ContactForm() {
  return (
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
          <textarea id="message" name="message" rows={3} required></textarea>
        </div>
        <button type="submit" className="btn">
          Gửi Tin Nhắn
        </button>
      </form>
    </div>
  );
}
