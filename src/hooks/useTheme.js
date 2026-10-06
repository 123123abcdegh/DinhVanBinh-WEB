import { useEffect, useRef, useState } from 'react';

const STORAGE_KEY = 'dvb-theme';
const THEME_COLORS = { light: '#f5f3fd', dark: '#0a0913' };

/** Lấy theme đã lưu (được set sớm trong index.html để tránh nháy trắng). */
function getInitialTheme() {
  if (typeof window === 'undefined') return 'light';
  const saved = window.localStorage?.getItem(STORAGE_KEY);
  return saved === 'dark' ? 'dark' : 'light';
}

/**
 * Quản lý chế độ Sáng / Tối, ghi nhớ lựa chọn của người dùng.
 * Trả về { theme, toggle, isDark }.
 */
export default function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);
  const first = useRef(true);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', THEME_COLORS[theme]);

    // Bỏ qua lần chạy đầu để không ghi đè lựa chọn đã lưu
    if (first.current) {
      first.current = false;
      return;
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* chế độ riêng tư có thể chặn localStorage — bỏ qua */
    }
  }, [theme]);

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return { theme, toggle, isDark: theme === 'dark' };
}
