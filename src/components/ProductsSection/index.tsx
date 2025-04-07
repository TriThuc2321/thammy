import Image from "next/image";
import banner from "@/assets/images/banner.webp";
import "./styles.css";

export default function ProductsSection() {
  return (
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
  );
}
