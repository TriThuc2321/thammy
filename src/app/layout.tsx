import type { Metadata } from "next";
import { Geist, Geist_Mono, Water_Brush, Cardo } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components";
import localFont from "next/font/local";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const hictDesignorsFont = localFont({
  src: "./fonts/hictDesignors.ttf",
  display: "swap",
  variable: "--font-hictDesignors",
});

const waterBrushFont = Water_Brush({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-waterBrush",
});

const cardoFont = Cardo({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cardo",
});

export const metadata: Metadata = {
  title: "Chân mày sương mai",
  description:
    "Toạ lạc tại trung tâm Quận Ninh Kiều, TP Cần Thơ, chúng tôi tin rằng mỗi đường nét trên gương mặt không chỉ phản ánh cá tính, mà còn là chiếc “bản đồ năng lượng” riêng biệt của từng người. Lấy  cảm hứng từ nhân tướng học hiện đại và tinh hoa thẩm mỹ phương  Đông, các dịch vụ tại đây được thiết kế để tái cân bằng diện mạo,  nâng tầm thần thái và giúp bạn tỏa sáng một cách tự nhiên, đầy  cuốn hút.",
  openGraph: {
    title: "Chân mày sương mai",
    description:
      "Toạ lạc tại trung tâm Quận Ninh Kiều, TP Cần Thơ, chúng tôi tin rằng mỗi đường nét trên gương mặt không chỉ phản ánh cá tính, mà còn là chiếc “bản đồ năng lượng” riêng biệt của từng người. Lấy  cảm hứng từ nhân tướng học hiện đại và tinh hoa thẩm mỹ phương  Đông, các dịch vụ tại đây được thiết kế để tái cân bằng diện mạo,  nâng tầm thần thái và giúp bạn tỏa sáng một cách tự nhiên, đầy  cuốn hút.",
    images: [
      {
        url: "https://i.imgur.com/Z7NzQwU.png",
        width: 600,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${waterBrushFont.variable} ${hictDesignorsFont.variable} ${cardoFont.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
