"use client";

import styles from "./CommonQuestions.module.css";
import { useState, useEffect } from "react";

type Props = {
  dictionary: any;
};

const CommonQuestions: React.FC<Props> = ({ dictionary }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const wrapper = document.querySelector(`.${styles.commonQuestionsWrapper}`);
    if (wrapper && !wrapper.contains(event.target as Node)) {
      setOpenIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Розподіл питань: непарні індекси в ліву колонку, парні в праву
  const leftColumnQuestions = dictionary.para.filter(
    (_: string, index: number) => index % 2 === 0
  );
  const rightColumnQuestions = dictionary.para.filter(
    (_: string, index: number) => index % 2 !== 0
  );

  return (
    <section className={styles.commonQuestionsWrapper}>
      <h2 className={styles.title}>{dictionary.title}</h2>
      <div className={styles.columnsWrapper}>
        <div className={styles.leftColumn}>
          {leftColumnQuestions.map((para: string, localIndex: number) => {
            const globalIndex = localIndex * 2; // Глобальний індекс для openIndex
            return (
              <div
                key={globalIndex}
                className={`${styles.question} ${
                  openIndex === globalIndex ? styles.active : ""
                }`}
              >
                <div className={styles.questionHeader}>
                  <p className={styles.questionPara}>{para}</p>
                  <i
                    className={`fa-solid fa-plus ${
                      openIndex === globalIndex ? styles.iconActive : ""
                    }`}
                    onClick={() => handleToggle(globalIndex)}
                  ></i>
                </div>
                {openIndex === globalIndex && (
                  <div
                    className={`${styles.dropdownContent} ${
                      openIndex === globalIndex ? styles.visible : ""
                    }`}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className={styles.rightColumn}>
          {rightColumnQuestions.map((para: string, localIndex: number) => {
            const globalIndex = localIndex * 2 + 1; // Глобальний індекс для openIndex
            return (
              <div
                key={globalIndex}
                className={`${styles.question} ${
                  openIndex === globalIndex ? styles.active : ""
                }`}
              >
                <div className={styles.questionHeader}>
                  <p className={styles.questionPara}>{para}</p>
                  <i
                    className={`fa-solid fa-plus ${
                      openIndex === globalIndex ? styles.iconActive : ""
                    }`}
                    onClick={() => handleToggle(globalIndex)}
                  ></i>
                </div>
                {openIndex === globalIndex && (
                  <div
                    className={`${styles.dropdownContent} ${
                      openIndex === globalIndex ? styles.visible : ""
                    }`}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CommonQuestions;
