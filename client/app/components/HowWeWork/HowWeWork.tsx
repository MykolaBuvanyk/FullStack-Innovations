"use client";

import styles from "./HowWeWork.module.css";

type Props = {
  dictionary: any;
};

const HowWeWork: React.FC<Props> = ({ dictionary }) => {

  return (
    <div className={styles.howWeWorkWrapper}>
      <div className={styles.firstPart}>
        <h2 className={styles.title}>{dictionary.title}</h2>
        <p className={styles.para}>{dictionary.para}</p>
      </div>
      <div className={styles.secondPart}>
        <ul className={styles.howWeWorkList}>
          {dictionary.howWeWorkEl.map((item: string, index: number) => (
            <li key={index} className={styles.howWeWorkEl}>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HowWeWork;