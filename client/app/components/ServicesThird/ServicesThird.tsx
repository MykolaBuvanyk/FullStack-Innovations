'use client';
import styles from './ServicesThird.module.css';

type Props = {
    dictionary: any;
};

const ServicesThird: React.FC<Props> = ({ dictionary }) => {
    return (
        <section>
            <div className={styles.servicesThirdWrapper}>
                <h2 className={styles.servicesThirdTitle}>
                    {dictionary.title}
                </h2>
                <div className={styles.servicesThirdImgWrapper}>
                    <img src="/images/people_discussing_office.png" alt="temp" />
                </div>
                <div className={styles.servicesThirdFirstTextWrapper}>
                    <p
                        className={styles.servicesThirdDescription}
                        dangerouslySetInnerHTML={{ __html: dictionary.descriptionFirst }}
                    />
                </div>
                <div className={styles.servicesThirdSecondTextWrapper}>
                    <p
                        className={styles.servicesThirdDescription}
                        dangerouslySetInnerHTML={{ __html: dictionary.descriptionSecond }}
                    />
                </div>
            </div>
        </section>
    );
};

export default ServicesThird;