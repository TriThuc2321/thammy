import duongQuynhNga from "@/assets/images/random/duong_quynh_nga.webp";
import hoangHoa from "@/assets/images/random/hoang_hoa.webp";
import hoangMinhMinh from "@/assets/images/random/hoang_minh_minh.webp";
import hongPhuong from "@/assets/images/random/hong_phuong.webp";
import kimLan from "@/assets/images/random/kim_lan.webp";
import linhChi from "@/assets/images/random/linh_chi.webp";
import linhNguyen from "@/assets/images/random/linh_nguyen.webp";
import minhHa from "@/assets/images/random/minh_ha.webp";
import admin from "@/assets/images/about.webp";
import chanmaynam from "@/assets/images/chanmaynam.webp";

export const RANDOM_BOOKING = [
  {
    id: 1,
    name: "Dương Quỳnh Nga",
    service: "Nốt Ruồi Nhân Tướng",
    time: "2 phút trước",
    avatar: duongQuynhNga,
  },
  {
    id: 2,
    name: "Hoàng Hoa",
    service: "Phun Môi Cân Bằng Năng Lượng",
    time: "5 phút trước",
    avatar: hoangHoa,
  },
  {
    id: 3,
    name: "Hoàng Minh Minh",
    service: "Chân Mày Minh Tướng",
    time: "8 phút trước",
    avatar: hoangMinhMinh,
  },
  {
    id: 4,
    name: "Hồng Phượng",
    service: "Chân Mày Trăng Non",
    time: "3 phút trước",
    avatar: hongPhuong,
  },
  {
    id: 5,
    name: "Kim Lan",
    service: "Nốt Ruồi Nhân Tướng",
    time: "7 phút trước",
    avatar: kimLan,
  },
  {
    id: 6,
    name: "Linh Chi",
    service: "Phun Môi Cân Bằng Năng Lượng",
    time: "1 phút trước",
    avatar: linhChi,
  },
  {
    id: 7,
    name: "Linh Nguyễn",
    service: "Chân Mày Minh Tướng",
    time: "9 phút trước",
    avatar: linhNguyen,
  },
  {
    id: 8,
    name: "Minh Hà",
    service: "Chân Mày Trăng Non",
    time: "4 phút trước",
    avatar: minhHa,
  },
];

export const TESTIMONIAL_DATA = [
  {
    id: 1,
    avatar: linhNguyen,
    name: "Linh Nguyễn",
    comment:
      "Dịch vụ phun mày Trăng Non tại Sương Mai thật sự đã thay đổi diện mạo của tôi. Không chỉ đẹp về mặt thẩm mỹ mà còn giúp tôi cảm thấy tự tin hơn rất nhiều. Cách tư vấn theo nhân tướng học rất độc đáo và hiệu quả!",
    time: "10 phút trước",
    likes: 12,
    replies: [
      {
        id: 101,
        avatar: admin,
        name: "Chân mày Sương Mai",
        comment:
          "Cảm ơn chị đã tin tưởng và sử dụng dịch vụ của chúng tôi. Rất vui khi biết chị hài lòng với kết quả!",
        time: "10 phút trước",
        likes: 3,
      },
    ],
  },
  {
    id: 2,
    avatar: hoangHoa,
    name: "Hoàng Hoa",
    comment:
      "Phun môi cân bằng năng lượng là một trải nghiệm tuyệt vời. Màu môi được chọn rất hợp với tông da và khí chất của tôi. Sau 3 tháng, môi vẫn giữ màu đẹp tự nhiên và tôi nhận được rất nhiều lời khen.",
    time: "15 phút trước",
    likes: 8,
    replies: [],
  },
  {
    id: 3,
    avatar: chanmaynam,
    name: "Hoàng Văn Minh",
    comment:
      "Là nam giới, tôi rất hài lòng với dịch vụ Chân Mày Minh Tướng. Dáng mày được thiết kế vừa nam tính vừa phù hợp với khuôn mặt. Đặc biệt ấn tượng với cách tư vấn chuyên nghiệp dựa trên nhân tướng học.",
    time: "1 ngày trước",
    likes: 15,
    replies: [
      {
        id: 301,
        avatar: admin,
        name: "Chân mày Sương Mai",
        comment:
          "Cảm ơn anh đã tin tưởng và sử dụng dịch vụ của chúng tôi. Rất vui khi được phục vụ khách hàng nam giới!",
        time: "1 ngày trước",
        likes: 2,
      },
    ],
  },
];
