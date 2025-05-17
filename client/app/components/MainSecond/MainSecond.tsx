"use client";

import styles from "./MainSecond.module.css";

type Props = {
  dictionary: any;
};

const MainSecond: React.FC<Props> = ({ dictionary }) => {
  return (
    <section className={styles.mainSecondSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>{dictionary.title}</h1>
        <div className={styles.btnWrapper}>
          <a href="#" className={styles.btn}>
            {dictionary.buttonText}
            <img src="/images/arrow_top_right.svg" alt="" />
          </a>
        </div>
        <div className={styles.contentRight}>
          <ul className={styles.contentList}>
            {dictionary.listItems.map(
              (item: { title: string; description: string }, index: number) => (
                <li key={index} className={styles.processEl}>
                    <img
                    className={styles.number}    
                    src={`/images/0${index + 1}.svg`}
                    alt={`image ${index + 1}`}
                  />
                  <h3 className={styles.processElTitle}>{item.title}</h3>
                  <p className={styles.processElPara}>{item.description}</p>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MainSecond;