'use client';

import ScrollDown from '../ScrollDown/ScrollDown';
import styles from './PortfolioHero.module.css';

type Props = {
  dictionary: any;
};

const PortfolioHero: React.FC<Props> = ({ dictionary }) => {
  return (
    <section >
      <div className={styles.portfolioHeroWrapper}>
        <div className={styles.portfolioHeroTextWrapper}>
          <h2 className={styles.portfolioHeroTitle}>
            {dictionary.title}
          </h2>
          <p className={styles.portfolioHeroDescription}>
            {dictionary.description}
          </p>
          <div className={styles.btnWrapper}>
            <a href="/contacts" className={styles.btn}>
              {dictionary.buttonText}
              <img src="/images/arrow_top_right.svg" alt="" />
            </a>
            <ScrollDown />
          </div>
        </div>
        <div className={styles.portfolioHeroSphereWrapper}>
          <div className={styles.spheraWrapper}>
            <div className={styles.sphereLarge}>
              <img src="/images/PortfolioHeroSphere/2.svg" alt="" />
            </div>
            <div className={styles.sphereMedium}>
              <img src="/images/PortfolioHeroSphere/1.svg" alt="" />
            </div>
            <div className={styles.sphereSmall}>
              <img src="/images/PortfolioHeroSphere/3.svg" alt="" />
            </div>
            <div className={styles.backgroundElipse}></div>
          </div>
        </div>
      </div>
      <div className={styles.scrollDownWrapper}>
        <ScrollDown />
      </div>

    </section>
  );
};

export default PortfolioHero;