import { useEffect, useState } from 'react';
import Icon from './Icon';

/** Nút nổi đưa người xem về đầu trang. */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      className={`to-top${visible ? ' is-visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Về đầu trang"
      tabIndex={visible ? 0 : -1}
    >
      <Icon name="arrow-up" />
    </button>
  );
}
