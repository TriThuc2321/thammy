import Image from "next/image";
import banner from "@/assets/images/banner.webp";

export default function Home() {
  return (
    <div>
      <header>
        <div className="container">
          <div className="logo">
            <h1>Phong Thủy Ngọc San</h1>
          </div>
          <nav>
            <ul>
              <li>
                <a href="#home">Trang Chủ</a>
              </li>
              <li>
                <a href="#about">Giới Thiệu</a>
              </li>
              <li>
                <a href="#services">Dịch Vụ</a>
              </li>
              <li>
                <a href="#products">Sản Phẩm</a>
              </li>
              <li>
                <a href="#contact">Liên Hệ</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="container">
          <div className="hero-wrapper">
            <div className="hero-content">
              <h2>Chào Mừng Đến Với Phong Thủy Ngọc San</h2>
              <p>
                Giải pháp phong thủy chuyên nghiệp cho cuộc sống hài hòa và
                thịnh vượng
              </p>
              <a href="#contact" className="btn">
                Liên Hệ Ngay
              </a>
            </div>
          </div>
          <div className="relative">
            <Image src={banner} style={{ objectFit: "cover" }} fill alt="" />
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="container">
          <h2 className="section-title">Giới Thiệu</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Phong Thủy Ngọc San là đơn vị chuyên cung cấp các dịch vụ và sản
                phẩm phong thủy chất lượng cao, mang đến sự cân bằng và thịnh
                vượng cho không gian sống và làm việc của bạn.
              </p>
              <p>
                Với nhiều năm kinh nghiệm trong lĩnh vực phong thủy, chúng tôi
                tự hào mang đến những giải pháp phong thủy hiệu quả, phù hợp với
                nhu cầu của từng khách hàng.
              </p>
            </div>
            <div className="about-image">
              <Image src={banner} alt="" />
            </div>
          </div>
        </div>
      </section>

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
                Tư vấn chọn ngày tốt cho các sự kiện quan trọng trong cuộc sống
                và công việc.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">🧿</div>
              <h3>Vật Phẩm Phong Thủy</h3>
              <p>
                Cung cấp các vật phẩm phong thủy chất lượng cao để cải thiện
                năng lượng.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="products" id="products">
        <div className="container">
          <h2 className="section-title">Sản Phẩm Phong Thủy</h2>
          <div className="product-grid">
            <div className="product-card">
              <div className="product-image">
                <Image src={banner} alt="" />
              </div>
              <h3>Tỳ Hưu Phong Thủy</h3>
              <p>Vật phẩm thu hút tài lộc và bảo vệ gia chủ</p>
              <div className="product-price">1,200,000₫</div>
              <a href="#" className="btn-small">
                Chi Tiết
              </a>
            </div>
            <div className="product-card">
              <div className="product-image">
                <Image src={banner} alt="" />
              </div>
              <h3>Cây Thủy Sinh Phong Thủy</h3>
              <p>Tăng cường năng lượng tích cực trong nhà</p>
              <div className="product-price">800,000₫</div>
              <a href="#" className="btn-small">
                Chi Tiết
              </a>
            </div>
            <div className="product-card">
              <div className="product-image">
                <Image src={banner} alt="" />
              </div>
              <h3>Tranh Phong Thủy</h3>
              <p>Mang đến may mắn và thành công cho gia chủ</p>
              <div className="product-price">1,500,000₫</div>
              <a href="#" className="btn-small">
                Chi Tiết
              </a>
            </div>
            <div className="product-card">
              <div className="product-image">
                <Image src={banner} alt="" />
              </div>
              <h3>Đá Phong Thủy</h3>
              <p>Cân bằng năng lượng và mang lại sự bình an</p>
              <div className="product-price">650,000₫</div>
              <a href="#" className="btn-small">
                Chi Tiết
              </a>
            </div>
          </div>
        </div>
      </section>

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
                Vật phẩm phong thủy chất lượng cao, giá cả hợp lý. Tôi sẽ quay
                lại mua thêm sản phẩm khác.
              </div>
              <div className="client-name">- Trần Thị B</div>
            </div>
          </div>
        </div>
      </section>

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

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <h3>Phong Thủy Ngọc San</h3>
              <p>Giải pháp phong thủy chuyên nghiệp</p>
            </div>
            <div className="footer-links">
              <h4>Liên Kết Nhanh</h4>
              <ul>
                <li>
                  <a href="#home">Trang Chủ</a>
                </li>
                <li>
                  <a href="#about">Giới Thiệu</a>
                </li>
                <li>
                  <a href="#services">Dịch Vụ</a>
                </li>
                <li>
                  <a href="#products">Sản Phẩm</a>
                </li>
                <li>
                  <a href="#contact">Liên Hệ</a>
                </li>
              </ul>
            </div>
            <div className="footer-social">
              <h4>Kết Nối</h4>
              <div className="social-icons">
                <a href="#" className="social-icon">
                  Facebook
                </a>
                <a href="#" className="social-icon">
                  Instagram
                </a>
                <a href="#" className="social-icon">
                  YouTube
                </a>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; 2025 Phong Thủy Ngọc San. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
