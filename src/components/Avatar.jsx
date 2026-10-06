import CONFIG from '../data/config';
import Icon from './Icon';

/**
 * Ảnh đại diện.
 * Đặt CONFIG.avatar.type = "image" và điền imageUrl để dùng ảnh thật,
 * mặc định sẽ dùng icon.
 */
export default function Avatar({ className = '' }) {
  const { avatar, name } = CONFIG;

  if (avatar.type === 'image' && avatar.imageUrl) {
    return <img className={className} src={avatar.imageUrl} alt={name} loading="lazy" />;
  }

  return <Icon name={avatar.icon || 'code'} className={className} />;
}
