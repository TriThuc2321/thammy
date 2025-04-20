import "./styles.css";
import logo from "@/assets/images/logo.webp";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="flex items-center gap-2">
          <Image src={logo} width={40} height={40} alt="logo" />
          <h1 className="text-2xl font-bold font-hictDesignors">
            Chân Mày Sương Mai
          </h1>
        </div>
        <nav>
          <ul className="font-hictDesignors">
            <li>
              <Link className="text-xl" href="#home">
                Trang Chủ
              </Link>
            </li>
            <li>
              <Link className="text-xl" href="#about">
                Giới Thiệu
              </Link>
            </li>
            <li>
              <Link className="text-xl" href="#services">
                Dịch Vụ
              </Link>
            </li>
            <li>
              <Link className="text-xl" href="#products">
                Sản Phẩm
              </Link>
            </li>
            <li>
              <Link className="text-xl" href="#contact">
                Liên Hệ
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
