'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'; // Хук для відстеження змін маршруту
import styles from './SocialLinks.module.css';

export default function SocialLinks() {
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname(); // Отримуємо поточний шлях

  useEffect(() => {
    setIsVisible(true); // При зміні маршруту компонент знову відображається
  }, [pathname]); // Запускається при зміні сторінки

  const handleClose = () => {
    setIsVisible(false); // Ховаємо компонент
  };

  return (
    <div
      className={styles.socialLinksWrapper}
      style={{ display: isVisible ? 'flex' : 'none' }}
    >
      <div className={styles.xmarkWrapper} onClick={handleClose}>
        <i className="fa-solid fa-xmark"></i>
      </div>
      <ul className={styles.socialLinksList}>
        <li className={styles.socialLinksEl}>
          <a target='_blank' href="https://t.me/fullstack_innovations"><img src="/images/SocialLinks/telegram.png" alt="Telegram" /></a>
        </li>
        <li className={styles.socialLinksEl}>
          <a target='_blank' href="https://www.instagram.com/fullstack.innovations/"><img src="/images/SocialLinks/instagram.png" alt="Instagram" /></a>
        </li>
        <li className={styles.socialLinksEl}>
          <a target='_blank' href="viber://chat?number=%2B380636826299"><img src="/images/SocialLinks/viber.png" alt="Viber" /></a>
        </li>
        <li className={styles.socialLinksEl}>
          <a target='_blank' href="https://wa.me/380636826299"><img src="/images/SocialLinks/whatsapp.png" alt="WhatsApp" /></a>
        </li>
        <li className={styles.socialLinksEl}>
          <a target='_blank' href="https://www.facebook.com/profile.php?id=61566304770393"><img src="/images/SocialLinks/facebook.png" alt="Facebook" /></a>
        </li>
      </ul>
    </div>
  );
}
