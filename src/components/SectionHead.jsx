import Icon from './Icon';
import Reveal from './Reveal';

/** Khối tiêu đề dùng chung cho các mục (nhãn nhỏ + tiêu đề + mô tả). */
export default function SectionHead({ icon, eyebrow, title, highlight, desc, align = 'center' }) {
  return (
    <Reveal className={`section-head${align === 'left' ? ' section-head--left' : ''}`}>
      {eyebrow && (
        <span className="eyebrow">
          {icon && <Icon name={icon} />}
          {eyebrow}
        </span>
      )}
      <h2>
        {title} {highlight && <span className="grad-text">{highlight}</span>}
      </h2>
      {desc && <p>{desc}</p>}
    </Reveal>
  );
}
