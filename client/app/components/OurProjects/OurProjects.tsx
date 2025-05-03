'use client';

import styles from './OurProjects.module.css';

type Props = {
  dictionary: any;
};

const OurProjects: React.FC<Props> = ({ dictionary }) => {
  return (
    <section className={styles.ourProjectsWrapper}>
      <h2 className={styles.title}>{dictionary.title}</h2>
      <ul className={styles.ourProjectsList}>
        {dictionary.list.map(
          (
            item: { title: string; para: string; img: string },
            index: number
          ) => (
            <li key={index} className={styles.ourProjectsEl}>
              <img src={item.img} alt="" />
              <div className={styles.ourProjectsElTextWrapper}>
                <h3>{item.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: item.para }} />
                <button className={styles.submitButton}>
                  { dictionary.button }
                  <img src="/images/arrow_top_right.svg" alt="" />
                </button>
              </div>
            </li>
          )
        )}
      </ul>
    </section>
  );
};

export default OurProjects;