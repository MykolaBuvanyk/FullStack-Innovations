import ScrollDown from '../ScrollDown/ScrollDown';
import styles from './PartnershipHero.module.css';

type Props = {
  dictionary: any;
};
const PartnershipHero: React.FC<Props> = ({ dictionary }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.contentLeft}>
                  <h1 className={styles.heroHeaderText}>{ dictionary.h1 }</h1>
          <p>
            { dictionary.para }
          </p>
          <a href="#" className={styles.btn}>
            { dictionary.button }
            <img src="/images/arrow_top_right.svg" alt="" />
          </a>
        </div>
        <div className={styles.contentRight}>
          <div className={styles.spheraWrapper}>
            {/* Велика сфера в центрі */}
            <div className={styles.sphereLarge}>
              <img src="/images/abstract_blue.png" alt="" />
            </div>
            {/* Менша сфера зверху праворуч */}
            <div className={styles.sphereMedium}>
              <img src="/images/hero-sphera-2.png" alt="" />
            </div>
            {/* Найменша сфера знизу ліворуч */}
            <div className={styles.sphereSmall}>
              <img src="/images/hero-sphera-4.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.scrollDown}>
        <ScrollDown />
      </div>
    </section>
  );
};

export default PartnershipHero;