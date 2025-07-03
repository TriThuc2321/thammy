import type { Metadata } from "next";
import { Water_Brush, Noto_Serif } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components";
import localFont from "next/font/local";

// Optimize font loading with preload and display swap
const hictDesignorsFont = localFont({
  src: "./fonts/hictDesignors.ttf",
  display: "swap",
  variable: "--font-hictDesignors",
});

const waterBrushFont = Water_Brush({
  weight: "400",
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-waterBrush",
});

const notoFont = Noto_Serif({
  weight: ["400", "700"],
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-noto",
});

export const metadata: Metadata = {
  title: "Chân mày sương mai",
  description:
    "Toạ lạc tại trung tâm Quận Ninh Kiều, TP Cần Thơ, chúng tôi tin rằng mỗi đường nét trên gương mặt không chỉ phản ánh cá tính, mà còn là chiếc bản đồ năng lượng riêng biệt của từng người. Lấy cảm hứng từ nhân tướng học hiện đại và tinh hoa thẩm mỹ phương Đông, các dịch vụ tại đây được thiết kế để tái cân bằng diện mạo, nâng tầm thần thái và giúp bạn tỏa sáng một cách tự nhiên, đầy cuốn hút.",
  openGraph: {
    title: "Chân mày sương mai",
    description:
      "Toạ lạc tại trung tâm Quận Ninh Kiều, TP Cần Thơ, chúng tôi tin rằng mỗi đường nét trên gương mặt không chỉ phản ánh cá tính, mà còn là chiếc bản đồ năng lượng riêng biệt của từng người. Lấy cảm hứng từ nhân tướng học hiện đại và tinh hoa thẩm mỹ phương Đông, các dịch vụ tại đây được thiết kế để tái cân bằng diện mạo, nâng tầm thần thái và giúp bạn tỏa sáng một cách tự nhiên, đầy cuốn hút.",
    images: [
      {
        url: "https://i.imgur.com/Z7NzQwU.png",
        width: 600,
        height: 600,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "Thẩm mỹ",
    "Chân mày",
    "Chân mày sương mai",
    "Làm đẹp Cần Thơ",
    "Phong thủy",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${waterBrushFont.variable} ${hictDesignorsFont.variable} ${notoFont.variable} antialiased font-sans`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
