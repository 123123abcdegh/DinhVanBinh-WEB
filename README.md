# DinhVanBinh.WEB — Portfolio Đinh Văn Bính

Trang portfolio cá nhân (bản nâng cấp 2.0): giao diện pastel cao cấp, có chế độ **Sáng / Tối**,
hiệu ứng xuất hiện khi cuộn và tối ưu tốc độ tải.

> **Nâng cấp từ bản cũ (1 file HTML + config.js) → React + Vite.**
> Toàn bộ nội dung giờ nằm trong một file duy nhất: [`src/data/config.js`](src/data/config.js).

---

## 1. Có gì mới so với bản cũ

| Vấn đề của bản cũ                                      | Bản 2.0                                                    |
| ------------------------------------------------------ | ---------------------------------------------------------- |
| Menu có mục **“Dự án”** nhưng không có mục nào như vậy   | Thêm đầy đủ mục **Dự án**, **Kỹ năng**, **Hành trình**      |
| Màn hình chờ 1,5 giây che mất nội dung                  | Bỏ hẳn — nội dung hiện ngay                                 |
| Con trỏ chuột tự chế + tim/ngôi sao bay gây rối mắt      | Hiệu ứng nhẹ nhàng, có tôn trọng `prefers-reduced-motion`   |
| Tải Font Awesome (~1,4 MB) chỉ để lấy vài icon          | Icon SVG nội tuyến, **0 thư viện ngoài**                    |
| Không có chế độ tối                                    | Nút gạt **Sáng / Tối**, ghi nhớ lựa chọn, không nháy màu     |
| `config.js` khai báo timeline, mô tả… nhưng không hiển thị | Mọi dữ liệu trong config đều được render                  |
| Email ở HTML và trong config khác nhau                 | Chỉ còn **một nguồn dữ liệu** duy nhất                      |
| Form không báo lỗi, không gửi được đi đâu              | Kiểm tra dữ liệu từng ô + mở sẵn ứng dụng email            |
| Ảnh/link mạng xã hội để `#`                            | Mục nào chưa điền link sẽ **tự ẩn**, không hiện link chết   |
| Khó tuỳ biến màu sắc                                   | Toàn bộ màu nằm trong biến CSS ở `src/styles/tokens.css`     |

## 2. Công nghệ

- **React 18** + **Vite 5** (không cần backend, build ra file tĩnh)
- **CSS thuần** chia theo lớp: `tokens.css` (biến thiết kế) → `layout.css` (khung) → `sections.css` (nội dung)
- **Icon SVG** tự viết trong `src/components/Icon.jsx`
- Font **Be Vietnam Pro** + **JetBrains Mono** (Google Fonts)

## 3. Chạy thử trên máy

```bash
npm install       # cài thư viện (chỉ lần đầu)
npm run dev       # mở http://localhost:5173
npm run build     # tạo bản chạy thật trong thư mục dist/
npm run preview   # xem thử bản đã build
```

## 4. Muốn sửa nội dung? Chỉ cần sửa 1 file

Mở [`src/data/config.js`](src/data/config.js):

```js
name: 'Đinh Văn Bính',        // tên hiển thị
email: 'dinhvb162005@gmail.com',
address: 'Thu Cúc — Tân Sơn — Phú Thọ',
roles: ['Lập trình viên Full Stack', 'Game Developer'],  // chữ chạy ở trang chủ
```

| Muốn đổi…               | Sửa ở đâu                                            |
| ----------------------- | ---------------------------------------------------- |
| Tên, email, địa chỉ     | `name`, `email`, `address`, `status`, `specialty`     |
| Chữ chạy ở trang chủ    | `roles` (thêm/bớt bao nhiêu cũng được)                |
| Ảnh đại diện            | `avatar`: đặt `type: 'image'` và điền `imageUrl`      |
| Link Facebook/GitHub…   | `socials`: thay `'#'` bằng link thật, xoá dòng không dùng |
| **Dự án**               | `projects`: thêm một `{ ... }` là có thêm một thẻ     |
| **Kỹ năng**             | `skills`: `level` từ 0–100 để vẽ thanh tiến độ        |
| **Hành trình**          | `timeline`: mốc thời gian + mô tả                     |
| Menu trên cùng          | `nav`: `id` phải trùng với `id` của mục trong trang   |

Mẹo: trong `projects`, đặt `"featured": true` để thẻ đó hiện to hơn;
để `link` / `demo` là `'#'` hoặc `''` thì nút tương ứng sẽ tự ẩn.

## 5. Đổi màu / phong cách

Mở `src/styles/tokens.css`:

```css
--brand: #7c5cf6;                                  /* màu chủ đạo */
--grad-brand: linear-gradient(135deg, ...);          /* dải màu nút, icon */
--canvas: #f5f3fd;                                  /* nền sáng */
[data-theme='dark'] { --canvas: #0a0913; }           /* nền tối */
```

Đổi ở đây là đổi toàn trang, không cần sửa từng chỗ.

## 6. Cấu trúc thư mục

```
index.html               # khung trang + thẻ SEO/OG, nạp font
vite.config.js           # cấu hình Vite
public/                  # favicon, robots.txt (copy nguyên vào bản build)
src/
├── main.jsx             # điểm khởi động React
├── App.jsx              # lắp ghép các mục
├── data/config.js       # ⭐ TOÀN BỘ NỘI DUNG NẰM Ở ĐÂY
├── components/          # Navbar, Footer, Icon, thẻ dự án, nút…
├── sections/            # Hero, About, Projects, Skills, Timeline, Contact
├── hooks/               # useTheme (sáng/tối), useInView (hiệu ứng cuộn)
└── styles/              # tokens.css, layout.css, sections.css
```

## 7. Đưa lên mạng

`vite.config.js` đã đặt `base: './'` nên bản build dùng đường dẫn tương đối,
chạy được ở bất kỳ hosting nào:

- **Netlify / Vercel:** build command `npm run build`, thư mục publish `dist`
- **GitHub Pages:** đẩy thư mục `dist` lên nhánh `gh-pages`
- **Hosting thường:** upload toàn bộ nội dung trong `dist/`

## 8. Ghi chú

- Form liên hệ chưa có máy chủ: khi gửi, trang sẽ mở ứng dụng email của người gửi
  (bật/tắt bằng `contact.useMailtoFallback` trong config). Muốn gửi thật, có thể nối
  vào Formspree / Google Forms / một API nhỏ.
- Nhớ thay các link `'#'` trong `socials` và `projects` bằng link thật của bạn.
- Ảnh trong `public/` sẽ được copy nguyên sang `dist/` khi build.
