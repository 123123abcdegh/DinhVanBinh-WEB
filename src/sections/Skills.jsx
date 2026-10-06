import CONFIG from '../data/config';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';
import SkillBar from '../components/SkillBar';

const TONES = ['violet', 'pink', 'mint'];

export default function Skills() {
  return (
    <section className="section section--tint" id="skills">
      <div className="container">
        <SectionHead
          icon="zap"
          eyebrow="Kỹ năng"
          title="Công cụ tôi"
          highlight="sử dụng mỗi ngày"
          desc="Những công nghệ tôi dùng để biến ý tưởng thành sản phẩm chạy được."
        />

        <div className="skills__grid">
          {(CONFIG.skills ?? []).map((group, groupIndex) => {
            const tone = TONES[groupIndex % TONES.length];
            return (
              <Reveal
                key={group.group}
                delay={groupIndex * 110}
                className={`card skills__card skill--${tone}`}
              >
                <div className="skills__head">
                  <span className={`icon-tile icon-tile--${tone}`}>
                    <Icon name={group.icon} />
                  </span>
                  <div>
                    <h3>{group.group}</h3>
                    <span>{group.items.length} kỹ năng</span>
                  </div>
                </div>

                <ul className="skills__list">
                  {group.items.map((item, itemIndex) => (
                    <SkillBar
                      key={item.name}
                      name={item.name}
                      level={item.level}
                      tone={tone}
                      delay={itemIndex * 120}
                    />
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
