// Optimized mock data with static image paths for better performance

export const RANDOM_BOOKING = [
  {
    id: 1,
    name: "Dương Quỳnh Nga",
    service: "Nốt Ruồi Nhân Tướng",
    time: "2 phút trước",
    avatar: "/images/random/duong_quynh_nga.webp",
  },
  {
    id: 2,
    name: "Hoàng Hoa",
    service: "Phun Môi Cân Bằng Năng Lượng",
    time: "5 phút trước",
    avatar: "/images/random/hoang_hoa.webp",
  },
  {
    id: 3,
    name: "Hoàng Minh Minh",
    service: "Chân Mây Minh Tướng",
    time: "8 phút trước",
    avatar: "/images/random/hoang_minh_minh.webp",
  },
  {
    id: 4,
    name: "Hồng Phượng",
    service: "Chân Mây Trăng Non",
    time: "3 phút trước",
    avatar: "/images/random/hong_phuong.webp",
  },
  {
    id: 5,
    name: "Kim Lan",
    service: "Nốt Ruồi Nhân Tướng",
    time: "7 phút trước",
    avatar: "/images/random/kim_lan.webp",
  },
  {
    id: 6,
    name: "Linh Chi",
    service: "Phun Môi Cân Bằng Năng Lượng",
    time: "1 phút trước",
    avatar: "/images/random/linh_chi.webp",
  },
  {
    id: 7,
    name: "Linh Nguyễn",
    service: "Chân Mây Minh Tướng",
    time: "9 phút trước",
    avatar: "/images/random/linh_nguyen.webp",
  },
  {
    id: 8,
    name: "Minh Hà",
    service: "Chân Mây Trăng Non",
    time: "4 phút trước",
    avatar: "/images/random/minh_ha.webp",
  },
];

export const TESTIMONIAL_DATA = [
  {
    id: 1,
    avatar: "/images/random/linh_nguyen.webp",
    name: "Linh Nguyễn",
    comment:
      "Dịch vụ phun mày Trăng Non tại Sương Mai thật sự đã thay đổi diện mạo của tôi. Không chỉ đẹp về mặt thẩm mỹ mà còn giúp tôi cảm thấy tự tin hơn rất nhiều. Cách tư vấn theo nhân tướng học rất độc đáo và hiệu quả!",
    time: "10 phút trước",
    likes: 12,
    replies: [
      {
        id: 101,
        avatar: "/images/about.webp",
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
    avatar: "/images/random/hoang_hoa.webp",
    name: "Hoàng Hoa",
    comment:
      "Phun môi cân bằng năng lượng là một trải nghiệm tuyệt vời. Màu môi được chọn rất hợp với tông da và khí chất của tôi. Sau 3 tháng, môi vẫn giữ màu đẹp tự nhiên và tôi nhận được rất nhiều lời khen.",
    time: "15 phút trước",
    likes: 8,
    replies: [],
  },
  {
    id: 3,
    avatar: "/images/chanmaynam.webp",
    name: "Hoàng Văn Minh",
    comment:
      "Là nam giới, tôi rất hài lòng với dịch vụ Chân Mây Minh Tướng. Dáng mày được thiết kế vừa nam tính vừa phù hợp với khuôn mặt. Đặc biệt ấn tượng với cách tư vấn chuyên nghiệp dựa trên nhân tướng học.",
    time: "1 ngày trước",
    likes: 15,
    replies: [
      {
        id: 301,
        avatar: "/images/about.webp",
        name: "Chân mày Sương Mai",
        comment:
          "Cảm ơn anh đã tin tưởng và sử dụng dịch vụ của chúng tôi. Rất vui khi được phục vụ khách hàng nam giới!",
        time: "1 ngày trước",
        likes: 2,
      },
    ],
  },
];

// Helper function to preload critical images
export const preloadCriticalImages = () => {
  const criticalImages = [
    "/images/logo.webp",
    "/images/banner.webp",
    "/images/about.webp",
  ];
  
  criticalImages.forEach((src) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = src;
    document.head.appendChild(link);
  });
};
