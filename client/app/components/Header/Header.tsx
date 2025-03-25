'use client';

import styles from './Header.module.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Header = () => {
  const pathname = usePathname();
  const currentLang = pathname.split('/')[1] || 'uk';
  const newLang = currentLang === 'uk' ? 'en' : 'uk';
  const newPath = pathname.replace(`/${currentLang}`, `/${newLang}`);

  const handleLanguageChange = () => {
    // Зберігаємо нову мову в cookies
    document.cookie = `preferred-locale=${newLang}; path=/; max-age=${60 * 60 * 24 * 30}`; // 30 днів
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <ul className={styles.headerWrapper}>
          <li className={styles.headerWrapperEl}>
            <img className={styles.logoImage} src="/images/logo.png" alt="" />
          </li>
          <li className={styles.headerWrapperEl}>
            <ul className={styles.headerList}>
              <li className={styles.headerEl}>
                <Link href={`/${currentLang}`}>Головна</Link>
              </li>
              <li className={[styles.headerEl, styles.headerDropdown].join(' ')}>
                Послуги
                <i className="fa-solid fa-chevron-down"></i>
              </li>
              <li className={styles.headerEl}>
                <Link href={`/${currentLang}/portfolio`}>Портфоліо</Link>
              </li>
              <li className={styles.headerEl}>
                <Link href={`/${currentLang}/about`}>Про нас</Link>
              </li>
              <li className={styles.headerEl}>
                <Link href={`/${currentLang}/partnership`}>Партнерство</Link>
              </li>
              <li className={styles.headerEl}>
                <Link href={`/${currentLang}/blog`}>Блог</Link>
              </li>
              <li className={styles.headerEl}>
                <Link href={`/${currentLang}/contacts`}>Контакти</Link>
              </li>
            </ul>
          </li>
          <li className={styles.headerWrapperEl}>
            <div className={styles.headerTel}>
              <a href="tel:+380636826299">
                <span>🇺🇦</span> +(380) 63 682 6299
              </a>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
            <div className={styles.headerLang}>
              <Link href={newPath} onClick={handleLanguageChange}>
                {newLang.toUpperCase()}
              </Link>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;