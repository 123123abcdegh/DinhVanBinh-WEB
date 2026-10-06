import { useMemo, useState } from 'react';
import CONFIG from '../data/config';
import ProjectCard from '../components/ProjectCard';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';

const ALL = 'Tất cả';

export default function Projects() {
  const projects = CONFIG.projects ?? [];
  const [filter, setFilter] = useState(ALL);

  /* Gom tất cả công nghệ xuất hiện trong dự án để làm bộ lọc */
  const tags = useMemo(() => {
    const set = new Set();
    projects.forEach((project) => (project.tags ?? []).forEach((tag) => set.add(tag)));
    return Array.from(set).sort((a, b) => a.localeCompare(b, 'vi'));
  }, [projects]);

  const visible = useMemo(
    () => (filter === ALL ? projects : projects.filter((project) => (project.tags ?? []).includes(filter))),
    [projects, filter]
  );

  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHead
          icon="layers"
          eyebrow="Dự án"
          title="Những thứ tôi"
          highlight="đã và đang làm"
          desc="Một vài sản phẩm tôi tâm đắc — từ web bán hàng đến game và ứng dụng nhỏ."
        />

        {tags.length > 1 && (
          <Reveal className="filters">
            {[ALL, ...tags].map((tag) => (
              <button
                type="button"
                key={tag}
                className={`filter${filter === tag ? ' is-active' : ''}`}
                onClick={() => setFilter(tag)}
                aria-pressed={filter === tag}
              >
                {tag}
              </button>
            ))}
          </Reveal>
        )}

        <div className="projects__grid">
          {visible.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {visible.length === 0 && (
          <p className="projects__empty">Chưa có dự án nào với công nghệ này.</p>
        )}
      </div>
    </section>
  );
}
