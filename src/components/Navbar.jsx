import { useEffect, useState } from 'react';
import CONFIG from '../data/config';
import Icon from './Icon';
import ThemeToggle from './ThemeToggle';

/** Thanh điều hướng: dính trên đầu trang, tự làm nổi bật mục đang xem. */
export default function Navbar({ theme, onToggleTheme }) {
  const links = CONFIG.nav ?? [];
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(links[0]?.id ?? '');

  /* Đổi nền khi đã cuộn */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Biết đang ở mục nào */
  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    if (!sections.length || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [links]);

  /* Khoá cuộn nền khi mở menu điện thoại + đóng bằng phím Esc */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';

    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  /* Xoay ngang / phóng to lên màn hình lớn thì đóng menu lại */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 860) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const close = () => setOpen(false);

  return (
    <nav className={`nav${scrolled ? ' is-scrolled' : ''}`} aria-label="Điều hướng chính">
      <div className="container nav__inner">
        <a className="brand" href="#home" onClick={close} aria-label={`${CONFIG.name} — về đầu trang`}>
          <span className="brand__mark">{CONFIG.shortName}</span>
          <span className="brand__text">
            <span className="brand__name">{CONFIG.name}</span>
            <span className="brand__role">{CONFIG.specialty}</span>
          </span>
        </a>

        <div className="nav__links">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav__link${active === link.id ? ' is-active' : ''}`}
              aria-current={active === link.id ? 'true' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav__actions">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a className="btn btn--primary btn--sm" href="#contact">
            <Icon name="send" />
            Liên hệ
          </a>
          <button
            type="button"
            className={`nav__burger${open ? ' is-open' : ''}`}
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Đóng menu' : 'Mở menu'}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`nav__drawer${open ? ' is-open' : ''}`}>
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={active === link.id ? 'is-active' : ''}
            onClick={close}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
