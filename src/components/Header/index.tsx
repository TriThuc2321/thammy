import "./styles.css";
import logo from "@/assets/images/logo.webp";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container text-[#453a15]">
        <div className="flex items-center gap-2">
          <Image src={logo} width={40} height={40} alt="logo" />
          <h1 className="text-2xl font-bold font-waterBrush">
            Chân Mày Sương Mai
          </h1>
        </div>
        <nav>
          <ul className="font-noto">
            <li>
              <Link href="#home">Trang Chủ</Link>
            </li>
            <li>
              <Link href="#about">Giới Thiệu</Link>
            </li>
            <li>
              <Link href="#services">Dịch Vụ</Link>
            </li>
            <li>
              <Link href="#products">Sản Phẩm</Link>
            </li>
            <li>
              <Link href="#contact">Liên Hệ</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
