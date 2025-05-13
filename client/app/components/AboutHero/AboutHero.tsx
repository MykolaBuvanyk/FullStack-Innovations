'use client';

import styles from './AboutHero.module.css';

type Props = {
  dictionary: any;
};

const AboutHero: React.FC<Props> = ({ dictionary }) => {
  return (
    <section className={styles.aboutHeroWrapper}>
      <div className={styles.aboutHeroTopWrapper}>
        <h2
          className={styles.aboutHeroTitle}
          dangerouslySetInnerHTML={{ __html: dictionary.title }}
        ></h2>
      </div>
      <div className={styles.aboutHeroBottomWrapper}>
        <div className={styles.aboutHeroTextWrapper}>
          <div className={styles.aboutHeroParaWrapper}>
            {dictionary.paragraphs.map((para: string, index: number) => (
              <p key={index} className={styles.aboutHeroPara}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
      <ul className={styles.aboutHeroList}>
        {dictionary.stats.map(
          (stat: { value: string; label: string }, index: number) => (
            <li key={index} className={styles.aboutHeroEl}>
              <span>{stat.value}</span>
              {stat.label}
            </li>
          )
        )}
      </ul>
      <div className={styles.aboutHeroSphereWrapper}>
        <div className={styles.spheraWrapper}>
          <div className={styles.sphereLarge}>
            <img src="/images/AboutHeroSphere/2.png" alt="" />
          </div>
          <div className={styles.sphereMedium}>
            <img src="/images/AboutHeroSphere/1.png" alt="" />
          </div>
          <div className={styles.sphereSmall}>
            <img src="/images/AboutHeroSphere/3.png" alt="" />
          </div>
          <div className={styles.backgroundElipse}></div>
        </div>
      </div>
      <button className={styles.btn}>
        {dictionary.buttonText}
        <img src="/images/arrow_top_right.svg" alt="" />
      </button>
    </section>
  );
};

export default AboutHero;