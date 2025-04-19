import "./styles.css";
import logo from "@/assets/images/logo.webp";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="flex items-center gap-2">
          <Image src={logo} width={40} height={40} alt="logo" />
          <h1 className="text-2xl font-bold">Chân Mày Sương Mai</h1>
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
