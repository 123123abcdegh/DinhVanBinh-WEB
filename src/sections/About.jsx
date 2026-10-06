import CONFIG from '../data/config';
import Avatar from '../components/Avatar';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';

const TONES = ['violet', 'pink', 'mint', 'sky'];
const SOCIAL_ICONS = { github: 'github', linkedin: 'linkedin', facebook: 'facebook', instagram: 'instagram' };

export default function About() {
  const socials = Object.entries(CONFIG.socials ?? {}).filter(([, url]) => url && url !== '#');

  return (
    <section className="section section--tint" id="about">
      <div className="container">
        <SectionHead
          icon="heart"
          eyebrow="Giới thiệu"
          title="Tìm hiểu"
          highlight="thêm về tôi"
          desc="Một chút về con người, đam mê và cách tôi làm việc."
        />

        <div className="about__grid">
          <Reveal className="about__portrait">
            <div className="about__avatar">
              <Avatar />
            </div>
            <p className="about__name">{CONFIG.name}</p>
            <p className="about__role">{CONFIG.specialty}</p>

            {socials.length > 0 && (
              <div className="about__socials">
                {socials.map(([key, url]) => (
                  <a
                    key={key}
                    className="icon-btn"
                    href={url}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={key}
                  >
                    <Icon name={SOCIAL_ICONS[key] ?? key} />
                  </a>
                ))}
              </div>
            )}
          </Reveal>

          <Reveal delay={120} className="about__body">
            <h3>
              {CONFIG.about.heading} <span className="grad-text">{CONFIG.name}</span>
            </h3>

            {CONFIG.about.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <div className="about__facts">
              {CONFIG.about.facts.map((fact, index) => (
                <div className="about__fact" key={fact.label}>
                  <span className={`icon-tile icon-tile--${TONES[index % TONES.length]}`}>
                    <Icon name={fact.icon} />
                  </span>
                  <div>
                    <div className="about__fact-label">{fact.label}</div>
                    <div className="about__fact-value">{fact.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
