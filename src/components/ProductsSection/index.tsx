import Image from "next/image";
import chanmay from "@/assets/images/chanmay.webp";
import chanmaynam from "@/assets/images/chanmaynam.webp";
import moi from "@/assets/images/moi.webp";
import notruoi from "@/assets/images/notruoi.webp";
import "./styles.css";

const products = [
  {
    image: chanmay,
    title: "Chân mày Sương Mai",
    description:
      "Dáng mày mềm mại, thanh tú, tôn lên nét quý phái và sự tự tin nội lực.",
  },
  {
    image: moi,
    title: "Phun môi cân bằng năng lượng",
    description: "Cải thiện sắc khí, tạo sự hài hòa giữa gương mặt và biểu cảm",
  },
  {
    image: notruoi,
    title: "Điểm nốt ruồi tinh tế",
    description:
      "Theo xu hướng nhân tướng học hiện đại, tăng điểm nhấn và tạo điểm thu hút tự nhiên",
  },
  {
    image: chanmaynam,
    title: "Chân mày Minh Tướng",
    description:
      "Đặt điểm nhấn tinh tế theo vị trí được tư vấn bởi nhân tướng học hiện đại.",
  },
];

export default function ProductsSection() {
  return (
    <section className="products" id="products">
      <div className="container">
        <p className="font-waterBrush mx-auto text-3xl text-center text-[#453a15] font-medium">
          Chân Mày Sương Mai
        </p>
        <h2 className="section-title">Sản Phẩm Phong Thủy</h2>
        <div className="product-grid">
          {products.map(({ image, title, description }) => (
            <div className="product-card" key={title}>
              <div className="product-image">
                <Image
                  className="w-full h-full object-cover"
                  src={image}
                  alt=""
                />
              </div>
              <h3 className="font-cardo">{title}</h3>
              <p>{description}</p>
              <a href="#contact" className="btn-small">
                Chi Tiết
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
