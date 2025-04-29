'use client';
import styles from './ServicesThird.module.css';

type Props = {
    dictionary: any;
};

const ServicesThird: React.FC<Props> = ({ dictionary }) => {
    return (
        <section >
            <div className={styles.servicesThirdWrapper}>
                <div className={styles.servicesThirdTextWrapper}>
                    <h2 className={styles.servicesThirdTitle}>
                        {dictionary.title}
                    </h2>
                    <p
                        className={styles.servicesThirdDescription}
                        dangerouslySetInnerHTML={{ __html: dictionary.description }}
                    />
                </div>
                <div className={styles.servicesThirdImgWrapper}>
                    <img src="/images/people_discussing_office.png" alt="temp" />
                </div>
            </div>
        </section>
    );
};

export default ServicesThird;