import styles from './MainSecond.module.css';
import Icon01 from '@/public/icon/01.svg';
import Icon02 from '@/public/icon/02.svg';
import Icon03 from '@/public/icon/03.svg';
import Icon04 from '@/public/icon/04.svg';
const MainSecond = () => {

    return (
        <section className={styles.mainSecondSection}>
            {/* <div className={styles.blurCircles}>
                <div className={styles.circle + ' ' + styles.circle1}></div>
                <div className={styles.circle + ' ' + styles.circle2}></div>
                <div className={styles.circle + ' ' + styles.circle3}></div>
                <div className={styles.circle + ' ' + styles.circle4}></div>
            </div> */}
            <div className={styles.container}>
                <div className={styles.contentLeft}>
                    <h1 className={styles.title}>Ми вам потрібні якщо</h1>
                    <a href="#" className={styles.btn}>Розкажіть про свій проєкт<img src="/icon/arrow_top_right.svg" alt="" /></a>
                </div>
                <div className={styles.contentRight}>
                <ul className={styles.contentList}>
                        <li>
                            <img src="/icon/01.svg" alt="Icon 01" />
                            <div className={styles.textContent}>
                                <h3>Немає сайту або думаєте над його створенням</h3>
                                <p>
                                    Ви відкрили новий бізнес або напрямок і не готові інвестувати в перший сайт десятки тисяч доларів, краще цю суму вкласти в розвиток бізнесу, але і зробити сайт за 300$ не є рішенням, розумієте яка буде якість. Ми якраз золота середина і не використовуємо дорогі технології, нам вдається дати якість топових сайтів за адекватні гроші.
                                </p>
                            </div>
                        </li>
                        <li>
                            <img src="/icon/02.svg" alt="Icon 02" />
                            <div className={styles.textContent}>
                                <h3>Застарілий дизайн та функціонал сайту</h3>
                                <p>
                                    Ви відкрили новий бізнес або напрямок і не готові інвестувати в перший сайт десятки тисяч доларів, краще цю суму вкласти в розвиток бізнесу, але і зробити сайт за 300$ не є рішенням, розумієте яка буде якість. Ми якраз золота середина і не використовуємо дорогі технології, нам вдається дати якість топових сайтів за адекватні гроші.
                                </p>
                            </div>
                        </li>
                        <li>
                            <img src="/icon/03.svg" alt="Icon 03" />
                            <div className={styles.textContent}>
                                <h3>Змінити платформу</h3>
                                <p>
                                    Ви відкрили новий бізнес або напрямок і не готові інвестувати в перший сайт десятки тисяч доларів, краще цю суму вкласти в розвиток бізнесу, але і зробити сайт за 300$ не є рішенням, розумієте яка буде якість. Ми якраз золота середина і не використовуємо дорогі технології, нам вдається дати якість топових сайтів за адекватні гроші.
                                </p>
                            </div>
                        </li>
                        <li>
                            <img src="/icon/04.svg" alt="Icon 04" />
                            <div className={styles.textContent}>
                                <h3>Створення дизайн-упаковки для бізнесу</h3>
                                <p>
                                    Ви відкрили новий бізнес або напрямок і не готові інвестувати в перший сайт десятки тисяч доларів, краще цю суму вкласти в розвиток бізнесу, але і зробити сайт за 300$ не є рішенням, розумієте яка буде якість. Ми якраз золота середина і не використовуємо дорогі технології, нам вдається дати якість топових сайтів за адекватні гроші.
                                </p>
                            </div>
                        </li>
                    </ul>

                    {/* <div className={styles.spheraWrapper}>
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
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default MainSecond;