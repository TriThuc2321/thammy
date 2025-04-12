import "./styles.css";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Chân Mày Sương Mai</h3>
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
          <p>&copy; 2025 Chân Mày Sương Mai. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}
