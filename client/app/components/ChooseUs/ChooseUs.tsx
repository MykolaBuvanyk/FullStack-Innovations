import styles from './ChooseUs.module.css';
import Image from 'next/image';

type Props = {
  dictionary: any;
};

const ChooseUs: React.FC<Props> = ({ dictionary }) => {
    return (
        <section className={styles.chooseUs}>
            <div className={styles.chooseUsTitle}>
                <h2 dangerouslySetInnerHTML={{ __html: dictionary.title }}></h2>
            </div>

            <div className={styles.chooseUsGrid}>
                {dictionary.items.map((item: { number: string; subtitle: string; description: string }, index: number) => (
                    <div key={index} className={styles.chooseUsItem}>
                        <div className={styles.chooseUsContent}>
                            <div className={styles.chooseUsSharpNumber}>
                                <h3>{item.number}</h3>
                            </div>
                            <h4>{item.subtitle}</h4>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ChooseUs;