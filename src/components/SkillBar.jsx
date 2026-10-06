import useInView from '../hooks/useInView';

/** Một dòng kỹ năng: tên, phần trăm và thanh tiến độ chạy khi cuộn tới. */
export default function SkillBar({ name, level = 0, tone = 'violet', delay = 0 }) {
  const [ref, inView] = useInView({ threshold: 0.35 });
  const percent = Math.max(0, Math.min(100, Number(level) || 0));

  return (
    <li className={`skill skill--${tone}`} ref={ref}>
      <div className="skill__top">
        <span className="skill__name">{name}</span>
        <span className="skill__value">{percent}%</span>
      </div>
      <div
        className="skill__track"
        role="progressbar"
        aria-label={name}
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="skill__fill"
          style={{ width: inView ? `${percent}%` : 0, transitionDelay: `${delay}ms` }}
        />
      </div>
    </li>
  );
}
