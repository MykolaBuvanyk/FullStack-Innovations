'use client'

import styles from './AboutHero.module.css';

const AboutHero = () => {
  return (
    <section className={styles.aboutHeroWrapper}>
      <div className={styles.aboutHeroTopWrapper}>
        <h2 className={styles.aboutHeroTitle}>Fullstack innovations<br/>— це унікальна агенція</h2>
        <button className={styles.btn}>
            Розкажіть про свій проект
            <img src="/images/arrow_top_right.svg" alt="" />
        </button>
      </div>
      <div className={styles.aboutHeroBottomWrapper}>
        <div className={styles.aboutHeroTextWrapper}>
            <div className={styles.aboutHeroParaWrapper}>
                <p className={styles.aboutHeroPara}>Ми - команда професіоналів у галузі веб-розробки та інновацій, яка готова перетворити ваші концепції в успішні та прибуткові проєкти. З кінця 2021 року ми вже реалізували понад 75 успішних веб-сайтів, що свідчить про наш високий рівень експертизи та професіоналізму.</p>
                <p className={styles.aboutHeroPara}>Наш підхід базується на індивідуальному відношенні до кожного клієнта, забезпечуючи розробку сучасних, продуктивних та унікальних веб-рішень. Ми однозначно враховуємо останні тренди та вимоги галузі, щоб надати вашому проєкту конкурентні переваги.</p>
            </div>
            <ul className={styles.aboutHeroList}>
                <li className={styles.aboutHeroEl}>
                    <span>75</span>
                    Виконаних проектів
                </li>
                <li className={styles.aboutHeroEl}>
                    <span>25</span>
                    Досвідчених спеціалістів
                </li>
                <li className={styles.aboutHeroEl}>
                    <span>2</span>
                    Роки досвіду
                </li>
                <li className={styles.aboutHeroEl}>
                    <span>99%</span>
                    Задоволених клієнтів
                </li>
            </ul>
        </div>
        <div className={styles.aboutHeroSphereWrapper}>
            <div className={styles.spheraAdditionalWrapper}>
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
        </div>
      </div>
    </section>
  );
};

export default AboutHero;