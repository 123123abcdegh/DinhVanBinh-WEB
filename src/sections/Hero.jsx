import { useEffect, useState } from 'react';
import CONFIG from '../data/config';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';

const CHIPS = [
  { label: 'React', icon: 'layers', position: 1 },
  { label: 'PHP', icon: 'server', position: 2 },
  { label: 'Unity', icon: 'gamepad', position: 3 },
  { label: 'UI/UX', icon: 'sparkles', position: 4 },
];

/** Hiệu ứng gõ chữ cho danh sách chức danh. */
function useTypewriter(words) {
  const [text, setText] = useState(words[0] ?? '');
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (words.length < 2) return;

    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setText(words[0] ?? '');
      return;
    }

    const word = words[index % words.length] ?? '';
    let timer;

    if (!deleting && text === word) {
      timer = window.setTimeout(() => setDeleting(true), 1700);
    } else if (deleting && text === '') {
      setDeleting(false);
      setIndex((value) => (value + 1) % words.length);
      return undefined;
    } else {
      timer = window.setTimeout(
        () => setText(word.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? 35 : 75
      );
    }

    return () => window.clearTimeout(timer);
  }, [text, deleting, index, words]);

  return text;
}

export default function Hero() {
  const roles = CONFIG.roles?.length ? CONFIG.roles : ['Lập trình viên'];
  const typed = useTypewriter(roles);

  const projectCount = CONFIG.projects?.length ?? 0;
  const skillCount = (CONFIG.skills ?? []).reduce((total, group) => total + group.items.length, 0);
  const startYear = (CONFIG.timeline?.[0]?.year?.match(/\d{4}/) ?? [])[0];

  const stats = [
    { value: `${projectCount}+`, label: 'Dự án' },
    { value: `${skillCount}`, label: 'Kỹ năng' },
    { value: startYear || '2021', label: 'Bắt đầu' },
  ];

  return (
    <section className="hero section" id="home">
      <div className="container hero__inner">
        <div>
          <Reveal className="hero__badge">
            <span className="hero__dot" />
            {CONFIG.hero.badge}
          </Reveal>

          <Reveal delay={80}>
            <p className="hero__greeting">{CONFIG.hero.greeting}</p>
            <h1 className="hero__title">
              <span className="grad-text">{CONFIG.name}</span>
            </h1>
          </Reveal>

          <Reveal delay={140} className="hero__role">
            <span>{typed}</span>
            <span className="hero__caret" />
          </Reveal>

          <Reveal delay={200}>
            <p className="hero__desc">{CONFIG.about.paragraphs[0]}</p>
          </Reveal>

          <Reveal delay={260} className="hero__cta">
            <a className="btn btn--primary" href="#projects">
              <Icon name="sparkles" />
              Xem dự án
            </a>
            <a className="btn btn--ghost" href="#contact">
              <Icon name="send" />
              Liên hệ
            </a>
          </Reveal>

          <Reveal delay={320} className="hero__stats">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="hero__stat-value grad-text">{stat.value}</div>
                <div className="hero__stat-label">{stat.label}</div>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={160} className="hero__visual">
          <div className="hero__ring" />
          <div className="hero__orb">
            <div className="hero__orb-inner">
              <Icon name={CONFIG.avatar.icon || 'code'} />
              <span className="hero__orb-text">{CONFIG.avatar.fallbackText}</span>
            </div>
          </div>

          {CHIPS.map((chip) => (
            <span className={`hero__chip hero__chip--${chip.position}`} key={chip.label}>
              <Icon name={chip.icon} />
              {chip.label}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
