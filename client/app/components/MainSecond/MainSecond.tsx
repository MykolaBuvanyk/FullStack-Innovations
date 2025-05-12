'use client';

import styles from './MainSecond.module.css';
import images01 from '@/public/images/01.svg';
import images02 from '@/public/images/02.svg';
import images03 from '@/public/images/03.svg';
import images04 from '@/public/images/04.svg';

type Props = {
    dictionary: any;
};

const MainSecond: React.FC<Props> = ({ dictionary }) => {
    return (
        <section className={styles.mainSecondSection}>
            <div className={styles.container}>
                {/* <div className={styles.contentLeft}>
                </div> */}
                <h1 className={styles.title}>{dictionary.title}</h1>
                <div className={styles.btnWrapper}>
                    <a href="#" className={styles.btn}>
                        {dictionary.buttonText}
                        <img src="/images/arrow_top_right.svg" alt="" />
                    </a>
                </div>
                <div className={styles.contentRight}>
                    <ul className={styles.contentList}>
                        <li>
                            <img src="/images/01.svg" alt="images 01" />
                            <div className={styles.textContent}>
                                <h3>{dictionary.listItems[0].title}</h3>
                                <p>{dictionary.listItems[0].description}</p>
                            </div>
                        </li>
                        <li>
                            <img src="/images/02.svg" alt="images 02" />
                            <div className={styles.textContent}>
                                <h3>{dictionary.listItems[1].title}</h3>
                                <p>{dictionary.listItems[1].description}</p>
                            </div>
                        </li>
                        <li>
                            <img src="/images/03.svg" alt="images 03" />
                            <div className={styles.textContent}>
                                <h3>{dictionary.listItems[2].title}</h3>
                                <p>{dictionary.listItems[2].description}</p>
                            </div>
                        </li>
                        <li>
                            <img src="/images/04.svg" alt="images 04" />
                            <div className={styles.textContent}>
                                <h3>{dictionary.listItems[3].title}</h3>
                                <p>{dictionary.listItems[3].description}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default MainSecond;