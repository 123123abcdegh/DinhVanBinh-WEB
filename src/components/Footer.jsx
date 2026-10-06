import CONFIG from '../data/config';
import Icon from './Icon';

const SOCIAL_ICONS = {
  github: 'github',
  linkedin: 'linkedin',
  facebook: 'facebook',
  instagram: 'instagram',
};

/** Chân trang: giới thiệu ngắn, liên kết nhanh và thông tin liên hệ. */
export default function Footer() {
  const socials = Object.entries(CONFIG.socials ?? {}).filter(([, url]) => url && url !== '#');
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__about">
            <a className="brand" href="#home">
              <span className="brand__mark">{CONFIG.shortName}</span>
              <span className="brand__text">
                <span className="brand__name">{CONFIG.name}</span>
                <span className="brand__role">{CONFIG.specialty}</span>
              </span>
            </a>
            <p>
              {CONFIG.hero.badge} — {CONFIG.address}.
            </p>
            {socials.length > 0 && (
              <div className="footer__socials">
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
          </div>

          <div>
            <h4>Liên kết</h4>
            <nav className="footer__list" aria-label="Liên kết chân trang">
              {(CONFIG.nav ?? []).map((link) => (
                <a key={link.id} href={`#${link.id}`}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4>Liên hệ</h4>
            <div className="footer__list">
              <a href={`mailto:${CONFIG.email}`}>
                <Icon name="mail" size="0.95rem" style={{ display: 'inline-block', marginRight: 6 }} />
                {CONFIG.email}
              </a>
              <span>{CONFIG.address}</span>
              <span>{CONFIG.contact.projectStatus}</span>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            &copy; {year} {CONFIG.name}. Mọi quyền được bảo lưu.
          </p>
          <p>
            Xây dựng bằng <span className="grad-text">React + Vite</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
