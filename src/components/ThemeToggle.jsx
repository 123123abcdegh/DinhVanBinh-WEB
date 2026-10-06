import Icon from './Icon';

/** Nút gạt đổi giữa chế độ Sáng và Tối. */
export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      className="theme-toggle"
      data-theme={theme}
      onClick={onToggle}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Chuyển sang chế độ sáng' : 'Chuyển sang chế độ tối'}
      title={isDark ? 'Chế độ sáng' : 'Chế độ tối'}
    >
      <span className="theme-toggle__thumb">
        <Icon name={isDark ? 'moon' : 'sun'} />
      </span>
      <span className="theme-toggle__label">Chế độ sáng / tối</span>
    </button>
  );
}
