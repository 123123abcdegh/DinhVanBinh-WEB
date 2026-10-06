/**
 * ============================================================
 *  CONFIG — Toàn bộ nội dung của trang nằm ở đây.
 *  Bạn chỉ cần sửa file này, không cần đụng vào code giao diện.
 * ============================================================
 *  MẸO: mọi chỗ ghi "#" hoặc "https://..." hãy thay bằng link thật
 *  của bạn. Để trống "" thì mục đó sẽ tự ẩn đi trên trang.
 */

export const CONFIG = {
  /* ===== THÔNG TIN CÁ NHÂN ===== */
  name: 'Đinh Văn Bính',
  shortName: 'DVB',
  // Chức danh hiển thị ở trang chủ (hiệu ứng gõ chữ)
  roles: ['Lập trình viên Full Stack', 'Game Developer', 'UI/UX Enthusiast'],
  email: 'dinhvb162005@gmail.com',
  address: 'Thu Cúc — Tân Sơn — Phú Thọ',
  birthDate: '16/09/2005',
  status: 'Đang học',
  specialty: 'Web & Game',

  hero: {
    // Lời chào nhỏ phía trên tên
    greeting: 'Xin chào, tôi là',
    // Nhãn trạng thái ở trang chủ
    badge: 'Sẵn sàng cho dự án mới',
    scrollHint: 'Cuộn xuống để khám phá',
  },

  about: {
    heading: 'Chào bạn! Tôi là',
    paragraphs: [
      'Tui ở Tân Sơn — Phú Thọ. Tôi yêu thích việc tạo ra những trải nghiệm kỹ thuật số đẹp mắt, chức năng và đầy ấn tượng.',
      'Với con mắt tinh tế về thiết kế và niềm đam mê với code sạch, tôi luôn cố gắng xây dựng những ứng dụng không chỉ đẹp về mặt thị giác mà còn hiệu quả cao và thân thiện với người dùng.',
    ],
    // Bấm vào từng mục để xem thông tin
    facts: [
      { icon: 'calendar', label: 'Ngày sinh', value: '16/09/2005' },
      { icon: 'map-pin', label: 'Quê quán', value: 'Tân Sơn — Phú Thọ' },
      { icon: 'code', label: 'Chuyên môn', value: 'Web & Game' },
      { icon: 'graduation', label: 'Trạng thái', value: 'Đang học' },
    ],
  },

  /* ===== MẠNG XÃ HỘI ===== */
  // Đổi "#" thành link thật. Xoá dòng nào không dùng.
  socials: {
    github: '#',
    linkedin: '#',
    facebook: '#',
    instagram: '#',
  },

  /* ===== AVATAR ===== */
  avatar: {
    type: 'icon', // "icon" = dùng icon | "image" = dùng ảnh
    icon: 'code', // tên icon khi type = "icon"
    imageUrl: '', // ví dụ: '/avatar.jpg' khi type = "image"
    fallbackText: 'DVB',
  },

  /* ===== DỰ ÁN ===== */
  // Thêm/xoá dự án thoải mái — giao diện tự dàn lại.
  // featured: true  => dự án nổi bật, hiện ở thẻ lớn
  // link/demo để "" nếu chưa có.
  projects: [
    {
      title: 'Website bán hàng',
      description:
        'Trang thương mại điện tử có giỏ hàng, thanh toán và trang quản trị đơn hàng cho người bán.',
      tags: ['PHP', 'MySQL', 'Bootstrap'],
      link: '#',
      demo: '',
      icon: 'shopping-cart',
      gradient: 'violet',
      featured: true,
    },
    {
      title: 'Game 2D Platformer',
      description:
        'Game đi cảnh 2D với nhiều màn chơi, hệ thống điểm và lưu tiến trình người chơi.',
      tags: ['Unity', 'C#', 'Game Design'],
      link: '#',
      demo: '',
      icon: 'gamepad',
      gradient: 'pink',
      featured: true,
    },
    {
      title: 'Ứng dụng quản lý chi tiêu',
      description:
        'Ghi chép thu chi, thống kê theo biểu đồ và nhắc nhở hạn mức theo từng tháng.',
      tags: ['JavaScript', 'Chart.js', 'LocalStorage'],
      link: '#',
      demo: '',
      icon: 'wallet',
      gradient: 'mint',
      featured: false,
    },
    {
      title: 'Portfolio cá nhân',
      description:
        'Trang bạn đang xem — React + Vite, giao diện pastel, sáng/tối và tối ưu tốc độ tải.',
      tags: ['React', 'Vite', 'CSS'],
      link: '#',
      demo: '',
      icon: 'sparkles',
      gradient: 'sky',
      featured: false,
    },
  ],

  /* ===== KỸ NĂNG ===== */
  // level: 0 - 100 (chỉ dùng để vẽ thanh tiến độ)
  skills: [
    {
      group: 'Frontend',
      icon: 'layout',
      items: [
        { name: 'HTML / CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React', level: 75 },
      ],
    },
    {
      group: 'Backend',
      icon: 'server',
      items: [
        { name: 'PHP', level: 80 },
        { name: 'MySQL', level: 78 },
        { name: 'REST API', level: 72 },
      ],
    },
    {
      group: 'Game & Khác',
      icon: 'gamepad',
      items: [
        { name: 'Unity / C#', level: 70 },
        { name: 'Git & GitHub', level: 82 },
        { name: 'UI/UX Design', level: 68 },
      ],
    },
  ],

  /* ===== HÀNH TRÌNH ===== */
  timeline: [
    {
      year: '2021 — 2026',
      title: 'Bắt đầu hành trình lập trình',
      description: 'Học HTML, CSS và JavaScript — những dòng code đầu tiên.',
    },
    {
      year: '2021 — 2026',
      title: 'Phát triển Web',
      description: 'PHP, MySQL và các framework hiện đại.',
    },
    {
      year: '2022 — 2026',
      title: 'Phát triển Game',
      description: 'Tạo game với đam mê, từ ý tưởng đến sản phẩm hoàn chỉnh.',
    },
    {
      year: '2024 — 2026',
      title: 'Công nghệ nâng cao',
      description: 'Đi sâu vào web hiện đại: React, Vite và tối ưu trải nghiệm.',
    },
  ],

  /* ===== MENU ĐIỀU HƯỚNG ===== */
  // id phải trùng với id của từng mục trong trang.
  nav: [
    { id: 'home', label: 'Trang chủ' },
    { id: 'about', label: 'Giới thiệu' },
    { id: 'projects', label: 'Dự án' },
    { id: 'skills', label: 'Kỹ năng' },
    { id: 'timeline', label: 'Hành trình' },
    { id: 'contact', label: 'Liên hệ' },
  ],

  /* ===== LIÊN HỆ ===== */
  contact: {
    heading: 'Kết Nối Ngay',
    intro:
      'Tui xài AI. Dù bạn có một dự án trong đầu hay chỉ muốn chào hỏi, đừng ngần ngại liên hệ!',
    projectStatus: 'Sẵn sàng cho dự án',
    // Ghi chú nhỏ dưới form
    formNote: 'Tôi thường phản hồi trong vòng 24 giờ.',
    // Để true nếu bạn muốn form mở sẵn ứng dụng email của người gửi
    useMailtoFallback: true,
  },

  /* ===== SEO ===== */
  seo: {
    description: 'Đinh Văn Bính — Chuyên phát triển web và game với đam mê và vibe coding.',
    keywords:
      'portfolio, lập trình viên, web developer, game developer, Việt Nam, full stack, javascript, php',
  },
};

export default CONFIG;
