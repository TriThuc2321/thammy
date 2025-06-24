import Image from "next/image";
import "./styles.css";

import phoneIcon from "@/assets/images/phone.webp";
import zaloIcon from "@/assets/images/zalo.webp";
import messagerIcon from "@/assets/images/messager.webp";

const actions = [
  {
    title: "Call Hotline",
    iconSrc: phoneIcon,
    href: "tel:0838355581",
  },
  {
    title: "Zalo",
    iconSrc: zaloIcon,
    href: "https://zalo.me/3322738468713429287",
  },
  {
    title: "Facebook",
    iconSrc: messagerIcon,
    href: "https://www.facebook.com/chanmaysuongmai/",
  },
];
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3 className="font-noto font-bold text-lg">Chân Mày Sương Mai</h3>
            <p>
              Mỗi nét chạm đều mang theo sự tinh tế và định hình nên một phiên
              bản đẹp hơn
            </p>
          </div>
          <div className="footer-links">
            <h4 className="font-noto font-bold text-lg">Liên Kết Nhanh</h4>
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
            <h4 className="font-noto font-bold text-lg">Kết Nối</h4>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/chanmaysuongmai/"
                className="social-icon"
              >
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

      <div className="fixed flex flex-col bottom-4 gap-4 left-4">
        {actions.map((action) => (
          <a
            className="animate-zoom"
            href={action.href}
            target="_blank"
            key={action.title}
          >
            <Image
              key={action.title}
              src={action.iconSrc}
              alt={action.title}
              width={40}
              height={40}
            />
          </a>
        ))}
      </div>
    </footer>
  );
}
