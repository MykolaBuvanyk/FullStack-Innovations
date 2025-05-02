"use client";

import styles from "./SpecificServiceProcess.module.css";

type Props = {
  dictionary: any;
};

const SpecificServiceProcess: React.FC<Props> = ({ dictionary }) => {
  return (
    <section className={styles.processWrapper}>
      <div className={styles.leftSideWrapper}>
        <img src="/images/Services/servicesProcess1.png" alt="" />
        <img src="/images/Services/servicesProcess2.png" alt="" />
      </div>
      <div className={styles.rightSideWrapper}>
        <h2 className={styles.processTitle}>{dictionary.title}</h2>
        <ul className={styles.processList}>
          {dictionary.processEl.map(
            (item: { title: string; para: string }, index: number) => (
              <li key={index} className={styles.processEl}>
                <span className={styles.numberPrefix}>
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <div className={styles.processElTextWrapper}>
                  <h3>{item.title}</h3>
                  <p>{item.para}</p>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
};

export default SpecificServiceProcess;
