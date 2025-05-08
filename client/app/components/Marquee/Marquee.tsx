import ScrollDown from '../ScrollDown/ScrollDown';
import styles from './Marquee.module.css';

type Props = {
  dictionary: any;
};

const Marquee: React.FC<Props> = ({ dictionary }) => {
  return (
    <div className={styles.marqueeWithScroll}>
      <div className={styles.marqueeWrapper}>
        {/* Перша стрічка (зліва направо, нахил вниз) */}
        <div className={`${styles.marqueeContainer} ${styles.marquee1}`}>
          <div className={styles.marquee}>
            <div className={styles.marqueeContent}>
              {dictionary.textItems1.map((item: string, index: number) => (
                <p key={index} className={styles.textItem}>
                  {item}
                </p>
              ))}
              {dictionary.textItems1.map((item: string, index: number) => (
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
              {dictionary.textItems2.map((item: string, index: number) => (
                <p key={index} className={styles.textItem}>
                  {item}
                </p>
              ))}
              {dictionary.textItems2.map((item: string, index: number) => (
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