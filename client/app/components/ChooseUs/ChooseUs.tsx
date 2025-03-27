import styles from './ChooseUs.module.css';
import Image from 'next/image';


const ChooseUs = () => {
    return (
        <section className={styles.chooseUs}>
            <div className={styles.chooseUsTitle}>
                <h2>Чому<br />обирають нас?</h2>
            </div>

            <div className={styles.chooseUsGrid}>
                <div className={styles.chooseUsItem}>
                    <div className={styles.chooseUsContent}>
                        <div className={styles.chooseUsSharpNumber}>
                            <h3>#1</h3>
                        </div>
                        <h4>Клієнтоорієнтованість</h4>
                        <p>Глибоке розуміння бізнесу – це наша перевага. Ми спеціалізуємося на створенні веб-сайтів, з важелем на конверсії та продажі.</p>
                    </div>
                </div>
                <div className={styles.chooseUsItem}>
                    <div className={styles.chooseUsContent}>
                        <div className={styles.chooseUsSharpNumber}>
                            <h3>#2</h3>
                        </div>
                        <h4>Передові підходи і технології</h4>
                        <p>Наша команда впроваджуємо передові технології для перетворення Вашого веб-сайту в сучасну та інноваційну цифрову платформу.</p>
                    </div>
                </div>
                <div className={styles.chooseUsItem}>
                    <div className={styles.chooseUsContent}>
                        <div className={styles.chooseUsSharpNumber}>
                            <h3>#3</h3>
                        </div>
                        <h4>Якісне та швидке виконання</h4>
                        <p>Висока ефективність та швидкість – це основа успіху у співпраці з нами. Індивідуальний підхід до кожного проєкту гарантований!</p>
                    </div>
                </div>
                <div className={styles.chooseUsItem}>
                    <div className={styles.chooseUsContent}>
                        <div className={styles.chooseUsSharpNumber}>
                            <h3>#4</h3>
                        </div>
                        <h4>Креативність</h4>
                        <p>Кожен сайт - це унікальний шедевр мистецтва. Наш креативний дизайн привертає увагу і вражає своїми унікальними інноваціями.</p>
                    </div>
                </div>
                <div className={styles.chooseUsItem}>
                    <div className={styles.chooseUsContent}>
                        <div className={styles.chooseUsSharpNumber}>
                            <h3>#5</h3>
                        </div>
                        <h4>Готовність до викликів</h4>
                        <p>Ми гарантуємо результативні рішення завдань та індивідуальний дизайн для Вашого сайту. Сучасні технології у кожному проєкті!</p>
                    </div>
                </div>
                <div className={styles.chooseUsItem}>
                    <div className={styles.chooseUsContent}>
                        <div className={styles.chooseUsSharpNumber}>
                            <h3>#6</h3>
                        </div>
                        <h4>Ретельне тестування рішень</h4>
                        <p>Ваш успіх полягає в наших надійних технологіях. Ми тестуємо кожен блок сайту, щоб гарантувати Вам безперебійну роботу сайту.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default ChooseUs;