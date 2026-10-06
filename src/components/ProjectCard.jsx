import Icon from './Icon';

/** Thẻ hiển thị một dự án. Chỉ hiện nút khi có link thật (khác "#"). */
export default function ProjectCard({ project, index = 0 }) {
  const { title, description, tags = [], link, demo, icon = 'code', gradient = 'violet', featured } = project;
  const hasLink = Boolean(link) && link !== '#';
  const hasDemo = Boolean(demo) && demo !== '#';

  return (
    <article
      className={`card card--hover project${featured ? ' project--featured' : ''}`}
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <div className="project__head">
        <span className={`icon-tile icon-tile--${gradient}`}>
          <Icon name={icon} />
        </span>
        {featured && <span className="project__badge">Nổi bật</span>}
      </div>

      <h3 className="project__title">{title}</h3>
      <p className="project__desc">{description}</p>

      <div className="project__foot">
        {tags.length > 0 && (
          <ul className="project__tags">
            {tags.map((tag) => (
              <li className="tag" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        )}

        {(hasLink || hasDemo) && (
          <div className="project__links">
            {hasLink && (
              <a className="project__link" href={link} target="_blank" rel="noreferrer noopener">
                <Icon name="github" />
                Mã nguồn
                <Icon name="arrow-right" />
              </a>
            )}
            {hasDemo && (
              <a className="project__link" href={demo} target="_blank" rel="noreferrer noopener">
                <Icon name="external-link" />
                Xem thử
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
