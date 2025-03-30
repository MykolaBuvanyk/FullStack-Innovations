'use client';

import styles from './SocialLinks.module.css';

export default function SocialLinks() {
  return (
    <div className={styles.socialLinksWrapper}>
        <ul className={styles.socialLinksList}>
            <li className={styles.socialLinksEl}></li>
            <li className={styles.socialLinksEl}></li>
            <li className={styles.socialLinksEl}></li>
            <li className={styles.socialLinksEl}></li>
            <li className={styles.socialLinksEl}></li>
        </ul>
    </div>
  );
}