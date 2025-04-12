import "./styles.css";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <h1>Chân Mày Sương Mai</h1>
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
  );
}
