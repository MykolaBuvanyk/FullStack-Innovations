"use client";

import styles from "./MainHeroSection.module.css";
import Marquee from "../Marquee/Marquee";
import { useEffect, useState } from "react";

type Props = {
  dictionary: any;
};

const MainHeroSection: React.FC<Props> = ({ dictionary }) => {
  // Анімований лічильник сайтів
  const [count, setCount] = useState(1);
  const [isDone, setIsDone] = useState(false);
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    let timeoutId: NodeJS.Timeout;
    const start = 1;
    const end = 200;
    const duration = 3000; // 3 секунди на анімацію
    const pauseAfter = 5000; // 5 секунд пауза після анімації
    const stepTime = Math.max(Math.floor(duration / (end - start)), 5);

    function startAnimation() {
      let current = start;
      setCount(start);
      setIsDone(false);
      intervalId = setInterval(() => {
        current++;
        setCount(current);
        if (current >= end) {
          clearInterval(intervalId);
          setIsDone(true);
          timeoutId = setTimeout(() => {
            startAnimation();
          }, pauseAfter);
        }
      }, stepTime);
    }

    startAnimation();

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.blurCircles}>
        <div className={styles.circle + " " + styles.circle1}></div>
        <div className={styles.circle + " " + styles.circle2}></div>
        <div className={styles.circle + " " + styles.circle3}></div>
        <div className={styles.circle + " " + styles.circle4}></div>
      </div>
      <div className={styles.heroContent}>
        <div className={styles.contentLeft}>
          <h1 className={styles.heroHeaderText}>{dictionary.header}</h1>
          <p dangerouslySetInnerHTML={{ __html: dictionary.description }}></p>
          <a href="#" className={styles.btn}>
            {dictionary.contactButton}
            <img src="/images/arrow_top_right.svg" alt="" />
          </a>
        </div>
        <div className={styles.contentRight}>
          <div className={styles.getOfferWrapper}>
            <a href="/contacts" className={styles.getOffer}>
              <img src="/images/arrow_top_right.svg" alt="" />
              <p>{dictionary.getOffer}</p>
              <p>{dictionary.offer}</p>
            </a>
          </div>

          <div className={styles.spheraWrapper}>
            <img
              className={styles.spheraFirst}
              src="/images/hero-sphera-1.png"
              alt=""
            />
            <img
              className={styles.spheraSecond}
              src="/images/hero-sphera-2.png"
              alt=""
            />
            <img
              className={styles.spheraThird}
              src="/images/hero-sphera-3.png"
              alt=""
            />
            <img
              className={styles.spheraFourth}
              src="/images/hero-sphera-4.png"
              alt=""
            />
            <div className={styles.iconProgramming}>
              <img
                className={styles.backgroundImage}
                src="/images/code-wrapper.svg"
                alt=""
              />
              {/* <img src="/images/icon-programming.png" alt="" /> */}
            </div>
            <div className={styles.iconSettings}>
              <img
                className={styles.backgroundImage}
                src="/images/settings-wrapper.svg"
                alt=""
              />
              {/* <img src="/images/icon-settings.png" alt="" /> */}
            </div>
            <div className={styles.iconOther}>
              <img
                className={styles.backgroundImage}
                src="/images/other-wrapper.svg"
                alt=""
              />
              {/* <img src="/images/icon-other.png" alt="" /> */}
            </div>
          </div>
          <div className={styles.developCount}>
            <p>{dictionary.developedSitesLabel}</p>
            <h1>{isDone ? "200+" : count}</h1>
          </div>
        </div>
      </div>
      <Marquee dictionary={dictionary.marquee} />
    </section>
  );
};

export default MainHeroSection;
