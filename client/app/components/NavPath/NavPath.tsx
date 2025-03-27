'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './NavPath.module.css';

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

  const pathSegments = pathname
    .split('/')
    .filter((segment) => segment && !['ru', 'uk'].includes(segment));

  return (
    <nav className={styles.navPath}>
      <Link href="/" className={styles.navpathLink}>
        Головна
      </Link>
      {pathSegments.map((segment, index) => {
        const translatedName = NavPathMap[segment] || segment;
        const href = '/' + pathSegments.slice(0, index + 1).join('/');

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