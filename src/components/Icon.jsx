/**
 * Bộ icon SVG nội tuyến.
 * Không cần thư viện ngoài (bỏ được ~1.4MB Font Awesome) nên trang tải nhanh hơn.
 * Dùng: <Icon name="code" />
 */

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

const icons = {
  /* --- Icon nét --- */
  code: (
    <g {...stroke}>
      <path d="m16 18 6-6-6-6" />
      <path d="m8 6-6 6 6 6" />
    </g>
  ),
  terminal: (
    <g {...stroke}>
      <path d="m4 17 6-6-6-6" />
      <path d="M12 19h8" />
    </g>
  ),
  sparkles: (
    <g {...stroke}>
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" />
      <path d="M18.5 15.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z" />
    </g>
  ),
  layout: (
    <g {...stroke}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M3 9h18M9 21V9" />
    </g>
  ),
  server: (
    <g {...stroke}>
      <rect x="3" y="4" width="18" height="7" rx="2" />
      <rect x="3" y="13" width="18" height="7" rx="2" />
      <path d="M7 7.5h.01M7 16.5h.01" />
    </g>
  ),
  gamepad: (
    <g {...stroke}>
      <rect x="2" y="7" width="20" height="10" rx="5" />
      <path d="M7 10v4M5 12h4" />
      <path d="M16 11h.01M18.5 13.5h.01" />
    </g>
  ),
  calendar: (
    <g {...stroke}>
      <rect x="3" y="5" width="18" height="16" rx="3" />
      <path d="M8 3v4M16 3v4M3 10h18" />
    </g>
  ),
  'map-pin': (
    <g {...stroke}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </g>
  ),
  graduation: (
    <g {...stroke}>
      <path d="M22 9 12 4 2 9l10 5z" />
      <path d="M6 11.5V17c0 1.7 2.7 3 6 3s6-1.3 6-3v-5.5" />
    </g>
  ),
  mail: (
    <g {...stroke}>
      <rect x="2" y="4" width="20" height="16" rx="3" />
      <path d="m3 7 9 6 9-6" />
    </g>
  ),
  briefcase: (
    <g {...stroke}>
      <rect x="2" y="7" width="20" height="14" rx="3" />
      <path d="M8 7V5.5A2.5 2.5 0 0 1 10.5 3h3A2.5 2.5 0 0 1 16 5.5V7" />
    </g>
  ),
  wallet: (
    <g {...stroke}>
      <rect x="2" y="6" width="20" height="13" rx="3" />
      <path d="M6 6V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1M16 12.5h2" />
    </g>
  ),
  'shopping-cart': (
    <g {...stroke}>
      <path d="M2 3h2.2l2.5 12.2A2 2 0 0 0 8.7 17h8.6a2 2 0 0 0 2-1.6L21 7H6" />
      <circle cx="9.5" cy="20.5" r="1.5" />
      <circle cx="18" cy="20.5" r="1.5" />
    </g>
  ),
  sun: (
    <g {...stroke}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </g>
  ),
  moon: (
    <g {...stroke}>
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </g>
  ),
  'arrow-up': (
    <g {...stroke}>
      <path d="M12 19V5M5 12l7-7 7 7" />
    </g>
  ),
  'arrow-right': (
    <g {...stroke}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </g>
  ),
  'external-link': (
    <g {...stroke}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M15 3h6v6M10 14 21 3" />
    </g>
  ),
  copy: (
    <g {...stroke}>
      <rect x="9" y="9" width="12" height="12" rx="2.5" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </g>
  ),
  check: (
    <g {...stroke}>
      <path d="m20 6-11 11-5-5" />
    </g>
  ),
  alert: (
    <g {...stroke}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v4.5M12 16h.01" />
    </g>
  ),
  send: (
    <g {...stroke}>
      <path d="M21.5 2.5 2.8 9.3a.6.6 0 0 0 .05 1.13l7.05 2.6 2.6 7.05a.6.6 0 0 0 1.13.05z" />
      <path d="M21.5 2.5 9.9 13.03" />
    </g>
  ),
  layers: (
    <g {...stroke}>
      <path d="m12 2.5 9.5 5-9.5 5-9.5-5z" />
      <path d="m3 12.5 9 4.8 9-4.8M3 16.8l9 4.7 9-4.7" />
    </g>
  ),
  heart: (
    <g {...stroke}>
      <path d="M12 20.3 4.3 12.6a4.9 4.9 0 0 1 7.7-6 4.9 4.9 0 0 1 7.7 6z" />
    </g>
  ),
  zap: (
    <g {...stroke}>
      <path d="M13 2 4.5 13.5H11l-.5 8.5L19.5 10H13z" />
    </g>
  ),

  /* --- Icon thương hiệu (dạng tô đặc) --- */
  github: (
    <path
      fill="currentColor"
      d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2a4.6 4.6 0 0 1 1.2 3.2c0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3z"
    />
  ),
  linkedin: (
    <path
      fill="currentColor"
      d="M20.4 20.5h-3.5v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.3zM5.3 7.4a2.1 2.1 0 1 1 0-4.1 2.1 2.1 0 0 1 0 4.1zm1.8 13.1H3.6V9h3.5v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 1 .8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7c0-1-.8-1.7-1.8-1.7z"
    />
  ),
  facebook: (
    <path
      fill="currentColor"
      d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.3l-.5 3.5h-2.8v8.4A12 12 0 0 0 24 12z"
    />
  ),
  instagram: (
    <path
      fill="currentColor"
      d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2 0 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c0 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.8-.2-2.2-.4a3.8 3.8 0 0 1-1.4-.9c-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c0-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.3-.1 1.7-.1 4.8-.1zm0 3.2a6.6 6.6 0 1 0 0 13.2 6.6 6.6 0 0 0 0-13.2zm0 10.9a4.3 4.3 0 1 1 0-8.6 4.3 4.3 0 0 1 0 8.6zm6.9-11.1a1.5 1.5 0 1 1-3.1 0 1.5 1.5 0 0 1 3.1 0z"
    />
  ),
  youtube: (
    <path
      fill="currentColor"
      d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z"
    />
  ),
};

export default function Icon({ name, className = '', size, ...rest }) {
  const node = icons[name];
  if (!node) return null;

  const style = size ? { width: size, height: size } : undefined;

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      style={style}
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {node}
    </svg>
  );
}

export { icons as iconNames };
