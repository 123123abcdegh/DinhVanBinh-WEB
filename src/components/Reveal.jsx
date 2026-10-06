import useInView from '../hooks/useInView';

/**
 * Bọc nội dung để tạo hiệu ứng xuất hiện khi cuộn tới.
 * delay: độ trễ (ms) — dùng để các thẻ hiện lần lượt.
 */
export default function Reveal({
  as: Tag = 'div',
  delay = 0,
  className = '',
  children,
  ...rest
}) {
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      className={`reveal${inView ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
      style={{ '--reveal-delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
