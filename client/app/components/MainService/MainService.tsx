import styles from './MainService.module.css';
const MainService = () => {

    return (
        <section className={styles.mainServiceSection}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.contentText}>
                        <h1 className={styles.title}>Послуги</h1>
                        <p>Fullstack innovations</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainService;