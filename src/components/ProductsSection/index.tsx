import Image from "next/image";
import banner from "@/assets/images/banner.webp";
import "./styles.css";

const products = [
  {
    image: banner,
    title: "Tỳ Hưu Phong Thủy",
    description: "Vật phẩm thu hút tài lộc và bảo vệ gia chủ",
    price: "1,200,000₫",
  },
  {
    image: banner,
    title: "Cây Thủy Sinh Phong Thủy",
    description: "Tăng cường năng lượng tích cực trong nhà",
    price: "800,000₫",
  },
  {
    image: banner,
    title: "Tranh Phong Thủy",
    description: "Mang đến may mắn và thành công cho gia chủ",
    price: "1,500,000₫",
  },
  {
    image: banner,
    title: "Đá Phong Thủy",
    description: "Cân bằng năng lượng và mang lại sự bình an",
    price: "650,000₫",
  },
];

export default function ProductsSection() {
  return (
    <section className="products" id="products">
      <div className="container">
        <h2 className="section-title">Sản Phẩm Phong Thủy</h2>
        <div className="product-grid">
          {products.map(({ image, title, description, price }) => (
            <div className="product-card" key={title}>
              <div className="product-image">
                <Image src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="product-price">{price}</div>
              <a href="#" className="btn-small">
                Chi Tiết
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
