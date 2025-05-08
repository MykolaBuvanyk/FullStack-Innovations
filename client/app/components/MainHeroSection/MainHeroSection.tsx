'use client';

import styles from './MainHeroSection.module.css';
import Marquee from "../Marquee/Marquee";

type Props = {
  dictionary: any;
};

const MainHeroSection: React.FC<Props> = ({ dictionary }) => {
    return (
        <section className={styles.hero}>
            <div className={styles.blurCircles}>
                <div className={styles.circle + ' ' + styles.circle1}></div>
                <div className={styles.circle + ' ' + styles.circle2}></div>
                <div className={styles.circle + ' ' + styles.circle3}></div>
                <div className={styles.circle + ' ' + styles.circle4}></div>
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
                        <a href="#" className={styles.getOffer}>
                            <img src="/images/arrow_top_right.svg" alt="" />
                            <p>{dictionary.getOffer}</p>
                            <p>{dictionary.offer}</p>
                        </a>
                    </div>

                    <div className={styles.spheraWrapper}>
                        <img className={styles.spheraFirst} src="/images/hero-sphera-1.png" alt="" />
                        <img className={styles.spheraSecond} src="/images/hero-sphera-2.png" alt="" />
                        <img className={styles.spheraThird} src="/images/hero-sphera-3.png" alt="" />
                        <img className={styles.spheraFourth} src="/images/hero-sphera-4.png" alt="" />
                        <div className={styles.iconProgramming}>
                            <img className={styles.backgroundImage} src="/images/code-wrapper.png" alt="" />
                            <img src="/images/icon-programming.png" alt="" />
                        </div>
                        <div className={styles.iconSettings}>
                            <img className={styles.backgroundImage} src="/images/settings-wrapper.png" alt="" />
                            <img src="/images/icon-settings.png" alt="" />
                        </div>
                        <div className={styles.iconOther}>
                            <img className={styles.backgroundImage} src="/images/other-wrapper.png" alt="" />
                            <img src="/images/icon-other.png" alt="" />
                        </div>
                    </div>
                    <div className={styles.developCount}>
                        <p>{dictionary.developedSitesLabel}</p>
                        <h1>{dictionary.developedSitesCount}</h1>
                    </div>
                </div>
            </div>
            <Marquee dictionary={dictionary.marquee}/>
        </section>
    );
};

export default MainHeroSection;