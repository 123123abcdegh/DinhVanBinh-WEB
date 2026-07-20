/**
 * CONFIG - Thay đổi thông tin cá nhân tại đây
 * Chỉnh sửa file này để cập nhật portfolio
 */

const CONFIG = {
    // ===== THÔNG TIN CÁ NHÂN =====
    name: "Đinh Văn Bính",
    title: "Lập Trình Viên Full Stack",
    email: "dinhvanbinh.dev@gmail.com",
    address: "Việt Nam",
    birthDate: "16/09/2005",
    status: "Đang học",
    specialty: "Web & Game",
    description: `Một lập trình viên đam mê về Full Stack Development và Game Development đến từ Việt Nam. 
                        Tôi yêu thích việc tạo ra những trải nghiệm kỹ thuật số đẹp mắt, chức năng và đầy ấn tượng.`,
    description2: `Với con mắt tinh tế về thiết kế và niềm đam mê với code sạch, tôi luôn cố gắng xây dựng 
                        những ứng dụng không chỉ đẹp về mặt thị giác mà còn hiệu quả cao và thân thiện với người dùng.`,

    // ===== LIÊN KẾT MẠNG XÃ HỘI =====
    socials: {
        github: "#",
        linkedin: "#",
        facebook: "#",
        instagram: "#"
    },

    // ===== AVATAR =====
    // URL ảnh avatar (để trống "" để dùng icon mặc định)
    avatar: {
        type: "icon", // "icon" = dùng icon, "image" = dùng ảnh
        icon: "fa-code", // Font Awesome icon class
        imageUrl: "", // URL ảnh nếu type là "image"
        fallbackText: "DEV"
    },

    // ===== TIMELINE (HÀNH TRÌNH) =====
    timeline: [
        {
            year: "2021 - 2026",
            title: "Bắt đầu hành trình lập trình",
            description: "Học HTML, CSS và JavaScript"
        },
        {
            year: "2021 - 2026",
            title: "Phát triển Web",
            description: "PHP, MySQL và các framework hiện đại"
        },
        {
            year: "2022 - 2026",
            title: "Phát triển Game",
            description: "Tạo game với đam mê"
        },
        {
            year: "2024 - 2026",
            title: "Công nghệ nâng cao",
            description: "Đi sâu vào web hiện đại"
        }
    ],

    // ===== LIÊN HỆ =====
    contact: {
        intro: "Tôi luôn hào hứng khi được làm việc trên các dự án mới và hợp tác với những người sáng tạo. Dù bạn có một dự án trong đầu hay chỉ muốn chào hỏi, đừng ngần ngại liên hệ!",
        projectStatus: "Sẵn sàng cho dự án"
    },

    // ===== SEO =====
    seo: {
        description: "Đinh Văn Bính - Lập trình viên Full Stack & Game Developer Portfolio. Chuyên phát triển web và game với đam mê và kỹ năng.",
        keywords: "portfolio, lập trình viên, web developer, game developer, Việt Nam, full stack, javascript, php"
    }
};

// ===== HÀM ÁP DỤNG CONFIG =====
function applyConfig() {
    // Áp dụng thông tin cá nhân
    document.querySelectorAll('[data-config="name"]').forEach(el => el.textContent = CONFIG.name);
    document.querySelectorAll('[data-config="title"]').forEach(el => el.textContent = CONFIG.title);
    
    // Áp dụng Avatar
    const avatarEl = document.querySelector('.about-avatar');
    if (avatarEl) {
        if (CONFIG.avatar.type === 'image' && CONFIG.avatar.imageUrl) {
            avatarEl.innerHTML = `<img src="${CONFIG.avatar.imageUrl}" alt="${CONFIG.name}">`;
        } else {
            avatarEl.innerHTML = `<i class="fas ${CONFIG.avatar.icon}"></i>`;
        }
    }

    // Áp dụng Social Links
    const githubLink = document.querySelector('a[aria-label="GitHub"]');
    const linkedinLink = document.querySelector('a[aria-label="LinkedIn"]');
    const facebookLink = document.querySelector('a[aria-label="Facebook"]');
    const instagramLink = document.querySelector('a[aria-label="Instagram"]');
    
    if (githubLink) githubLink.href = CONFIG.socials.github || "#";
    if (linkedinLink) linkedinLink.href = CONFIG.socials.linkedin || "#";
    if (facebookLink) facebookLink.href = CONFIG.socials.facebook || "#";
    if (instagramLink) instagramLink.href = CONFIG.socials.instagram || "#";

    // Áp dụng Email
    const emailValue = document.getElementById('emailValue');
    const emailCopy = document.querySelector('[data-copy]');
    if (emailValue) emailValue.textContent = CONFIG.email;
    if (emailCopy) emailCopy.setAttribute('data-copy', CONFIG.email);

    // Áp dụng mô tả About
    const aboutName = document.querySelector('.about-info h3 span');
    if (aboutName) aboutName.textContent = CONFIG.name;

    // Áp dụng Stats
    const stats = document.querySelectorAll('.about-stat-value');
    if (stats[0]) stats[0].textContent = CONFIG.birthDate;
    if (stats[1]) stats[1].textContent = CONFIG.address;
    if (stats[2]) stats[2].textContent = CONFIG.specialty;
    if (stats[3]) stats[3].textContent = CONFIG.status;

    // Áp dụng Timeline
    const timelineItems = document.querySelectorAll('.timeline-item');
    CONFIG.timeline.forEach((item, index) => {
        if (timelineItems[index]) {
            const year = timelineItems[index].querySelector('.timeline-item-year');
            const title = timelineItems[index].querySelector('.timeline-item-title');
            const desc = timelineItems[index].querySelector('.timeline-item-desc');
            if (year) year.textContent = item.year;
            if (title) title.textContent = item.title;
            if (desc) desc.textContent = item.description;
        }
    });
}

// Áp dụng config khi DOM sẵn sàng
document.addEventListener('DOMContentLoaded', applyConfig);
