import { useState } from 'react';
import Icon from './Icon';

/** Nút sao chép (có phương án dự phòng cho trình duyệt cũ / http). */
function copyText(text) {
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(text);
  }

  return new Promise((resolve, reject) => {
    try {
      const area = document.createElement('textarea');
      area.value = text;
      area.setAttribute('readonly', '');
      area.style.position = 'fixed';
      area.style.opacity = '0';
      document.body.appendChild(area);
      area.select();
      document.execCommand('copy');
      document.body.removeChild(area);
      resolve();
    } catch (error) {
      reject(error);
    }
  });
}

export default function CopyButton({ value, label = 'Sao chép' }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await copyText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      className={`contact__copy${copied ? ' is-copied' : ''}`}
      onClick={handleCopy}
      aria-label={copied ? 'Đã sao chép' : label}
      title={copied ? 'Đã sao chép!' : label}
    >
      <Icon name={copied ? 'check' : 'copy'} />
    </button>
  );
}
