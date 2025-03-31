// components/Marquee.js
import ScrollDown from '../ScrollDown/ScrollDown';
import styles from './Marquee.module.css';

const Marquee = () => {
  const textItems2 = [
    "FULLSTACK-INNOVATIONS",
    "FULLSTACK-INNOVATIONS",
    "FULLSTACK-INNOVATIONS",
    "FULLSTACK-INNOVATIONS",
    "FULLSTACK-INNOVATIONS",
    "FULLSTACK-INNOVATIONS",
    "FULLSTACK-INNOVATIONS",
    "FULLSTACK-INNOVATIONS",
    "FULLSTACK-INNOVATIONS",
    "FULLSTACK-INNOVATIONS",
    "FULLSTACK-INNOVATIONS",

  ];

  const textItems1 = [
    "Лендінг",
    "Багатосторінковий",
    "Інтернет-магазин",
    "2D дизайн",
    "3D моделювання",
    "Розробка логотипів",
    "Google Ads",
    "SEO-просування",
    "UI/UX дизайн",
    "Сайт для доставки",
    "Бізнес сайт",
    "Мобільні застосунки",
    "Лендінг",
    "Багатосторінковий",
    "Інтернет-магазин",
  ];

  return (
    <div className={styles.marqueeWithScroll}>
      <div className={styles.marqueeWrapper}>
        {/* Перша стрічка (зліва направо, нахил вниз) */}
        <div className={`${styles.marqueeContainer} ${styles.marquee1}`}>
          <div className={styles.marquee}>
            <div className={styles.marqueeContent}>
              {textItems1.map((item, index) => (
                <p key={index} className={styles.textItem}>
                  {item}
                </p>
              ))}
              {textItems1.map((item, index) => (
                <p key={`copy-${index}`} className={styles.textItem}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Друга стрічка (справа наліво, нахил вгору) */}
        <div className={`${styles.marqueeContainer} ${styles.marquee2}`}>
          <div className={styles.marquee}>
            <div className={styles.marqueeContent}>
              {textItems2.map((item, index) => (
                <p key={index} className={styles.textItem}>
                  {item}
                </p>
              ))}
              {textItems2.map((item, index) => (
                <p key={`copy-${index}`} className={styles.textItem}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>

      </div>
      <div className={styles.scrollDownWrapper}>
        <ScrollDown />
      </div>

    </div>
  );
};

export default Marquee;