'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './NavPath.module.css';
import { i18n } from '@/i18n.config'; // Шлях до вашого конфігу i18n

const NavPathMap: Record<string, string> = {
  about: 'Про нас',
  blog: 'Блог',
  catalog: 'Каталог',
  delivery: 'Оплата і доставка',
  guarantees: 'Гарантія',
  news: 'Новини',
  partnership: 'Партнерство',
  contacts: 'Контакти',
  cart: 'Оформлення замовлення',
  privacy_policy: 'Політика конфіденційності',
  offer_agreement: 'Договір Оферти',
};

export default function NavPath() {
  const pathname = usePathname();
  const currentLang = pathname.split('/')[1] || i18n.defaultLocale;

  // Перевіряємо, чи є перший сегмент шляху кодом мови
  const isFirstSegmentLocale = i18n.locales.includes(pathname.split('/')[1] as any);
  
  // Отримуємо сегменти шляху, виключаючи коди мов
  const pathSegments = pathname
    .split('/')
    .filter((segment, index) => {
      // Залишаємо сегмент, якщо він не порожній і 
      // (не є першим сегментом, або якщо перший, то не є кодом мови)
      return segment && !(index === 1 && isFirstSegmentLocale);
    });

  return (
    <nav className={styles.navPath}>
      <Link href={`/${currentLang}`} className={styles.navpathLink}>
        Головна
      </Link>
      {pathSegments.map((segment, index) => {
        const translatedName = NavPathMap[segment] || segment;
        
        // Будуємо href з врахуванням поточної мови
        const href = isFirstSegmentLocale
          ? `/${currentLang}/${pathSegments.slice(1, index + 1).join('/')}`
          : `/${pathSegments.slice(0, index + 1).join('/')}`;

        return (
          <span key={index} className={styles.navpathItem}>
            <span className={styles.navpathSeparator}> » </span>
            <Link href={href} className={styles.navpathActive}>
              {translatedName}
            </Link>
          </span>
        );
      })}
    </nav>
  );
}