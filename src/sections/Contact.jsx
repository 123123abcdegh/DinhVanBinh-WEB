import { useState } from 'react';
import CONFIG from '../data/config';
import CopyButton from '../components/CopyButton';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';

const SOCIAL_ICONS = { github: 'github', linkedin: 'linkedin', facebook: 'facebook', instagram: 'instagram' };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values) {
  const errors = {};

  if (values.name.trim().length < 2) errors.name = 'Vui lòng nhập tên của bạn.';
  if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'Email chưa đúng định dạng.';
  if (values.subject.trim().length < 2) errors.subject = 'Vui lòng nhập chủ đề.';
  if (values.message.trim().length < 10) errors.message = 'Nội dung cần ít nhất 10 ký tự.';

  return errors;
}

function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (field) => (event) => {
    setValues((current) => ({ ...current, [field]: event.target.value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const found = validate(values);

    if (Object.keys(found).length > 0) {
      setErrors(found);
      return;
    }

    // Chưa có máy chủ: mở sẵn ứng dụng email của người gửi
    if (CONFIG.contact.useMailtoFallback) {
      const body = `Tên: ${values.name}\nEmail: ${values.email}\n\n${values.message}`;
      const mailto = `mailto:${CONFIG.email}?subject=${encodeURIComponent(
        values.subject
      )}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
    }

    setSent(true);
  };

  if (sent) {
    return (
      <div className="form__success" role="status">
        <span className="form__success-icon">
          <Icon name="check" />
        </span>
        <h4>Đã gửi tin nhắn!</h4>
        <p>Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi sớm nhất có thể.</p>
        <button
          type="button"
          className="btn btn--ghost btn--sm"
          onClick={() => {
            setValues({ name: '', email: '', subject: '', message: '' });
            setSent(false);
          }}
        >
          Gửi tin nhắn khác
        </button>
      </div>
    );
  }

  const fields = [
    { id: 'name', label: 'Tên của bạn', placeholder: 'Nguyễn Văn A', type: 'text', half: true },
    { id: 'email', label: 'Địa chỉ email', placeholder: 'email@example.com', type: 'email', half: true },
    { id: 'subject', label: 'Chủ đề', placeholder: 'Yêu cầu dự án', type: 'text' },
  ];

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form__row">
        {fields.map((field) => (
          <div
            key={field.id}
            className={`form__group${errors[field.id] ? ' has-error' : ''}`}
            style={field.half ? undefined : { gridColumn: '1 / -1' }}
          >
            <label htmlFor={field.id}>{field.label}</label>
            <input
              id={field.id}
              name={field.id}
              type={field.type}
              placeholder={field.placeholder}
              value={values[field.id]}
              onChange={update(field.id)}
              aria-invalid={Boolean(errors[field.id])}
              aria-describedby={errors[field.id] ? `${field.id}-error` : undefined}
              required
            />
            {errors[field.id] && (
              <span className="form__error" id={`${field.id}-error`}>
                <Icon name="alert" />
                {errors[field.id]}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className={`form__group${errors.message ? ' has-error' : ''}`}>
        <label htmlFor="message">Nội dung</label>
        <textarea
          id="message"
          name="message"
          placeholder="Kể tôi nghe về dự án của bạn..."
          value={values.message}
          onChange={update('message')}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          required
        />
        {errors.message && (
          <span className="form__error" id="message-error">
            <Icon name="alert" />
            {errors.message}
          </span>
        )}
      </div>

      <div className="form__foot">
        <button type="submit" className="btn btn--primary">
          <Icon name="send" />
          Gửi tin nhắn
        </button>
        <span className="form__note">{CONFIG.contact.formNote}</span>
      </div>
    </form>
  );
}

export default function Contact() {
  const socials = Object.entries(CONFIG.socials ?? {}).filter(([, url]) => url && url !== '#');

  const rows = [
    { icon: 'mail', label: 'Email', value: CONFIG.email, copy: CONFIG.email, tone: 'violet' },
    { icon: 'map-pin', label: 'Địa chỉ', value: CONFIG.address, tone: 'pink' },
    { icon: 'briefcase', label: 'Trạng thái', value: CONFIG.contact.projectStatus, tone: 'mint' },
  ];

  return (
    <section className="section section--tint" id="contact">
      <div className="container">
        <SectionHead
          icon="mail"
          eyebrow="Liên hệ"
          title="Kết nối"
          highlight="với tôi"
          desc="Hãy cùng nhau tạo ra điều gì đó tuyệt vời."
        />

        <div className="contact__grid">
          <Reveal className="card contact__info">
            <h3>{CONFIG.contact.heading}</h3>
            <p>{CONFIG.contact.intro}</p>

            <div className="contact__list">
              {rows.map((row) => (
                <div className="contact__row" key={row.label}>
                  <span className={`icon-tile icon-tile--${row.tone}`}>
                    <Icon name={row.icon} />
                  </span>
                  <div>
                    <div className="contact__row-label">{row.label}</div>
                    <div className="contact__row-value">{row.value}</div>
                  </div>
                  {row.copy && <CopyButton value={row.copy} label={`Sao chép ${row.label}`} />}
                </div>
              ))}
            </div>

            {socials.length > 0 && (
              <div className="contact__socials">
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

          <Reveal delay={120} className="card contact__form">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
