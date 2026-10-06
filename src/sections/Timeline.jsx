import CONFIG from '../data/config';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';

export default function Timeline() {
  const items = CONFIG.timeline ?? [];

  return (
    <section className="section" id="timeline">
      <div className="container">
        <SectionHead
          icon="calendar"
          eyebrow="Hành trình"
          title="Chặng đường"
          highlight="đã qua"
          desc="Từ những dòng code đầu tiên đến các dự án hiện tại."
        />

        <div className="timeline">
          <span className="timeline__line" aria-hidden="true" />

          {items.map((item, index) => (
            <Reveal
              key={`${item.year}-${item.title}`}
              delay={index * 90}
              className={`timeline__item ${index % 2 === 0 ? 'is-left' : 'is-right'}`}
            >
              <div className="timeline__card">
                <span className="timeline__year">{item.year}</span>
                <h3 className="timeline__title">{item.title}</h3>
                <p className="timeline__desc">{item.description}</p>
              </div>
              <span className="timeline__dot" aria-hidden="true" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
