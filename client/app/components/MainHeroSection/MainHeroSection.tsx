import styles from './MainHeroSection.module.css';

const MainHeroSection = () => {
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
                    <h1 className={styles.heroHeaderText}>Fullstack innovations</h1>
                    <p>Розробка сайтів <span>та комплексне</span> просування вашого бізнесу <span>в лідери</span></p>
                    <a href="#" className={styles.btn}>Зв’язатися з нами<img src="/icon/arrow_top_right.svg" alt="" /></a>
                </div>
                <div className={styles.contentRight}>
                    <div className={styles.getOfferWrapper}>
                        <a href="#" className={styles.getOffer}>
                            <img src="/icon/arrow_top_right.svg" alt="" />
                            <p>
                                отримати
                            </p>
                            <p>
                                пропозицію
                            </p>
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
                        <p>Кількість розроблених сайтів</p>
                        <h1>200 +</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainHeroSection;