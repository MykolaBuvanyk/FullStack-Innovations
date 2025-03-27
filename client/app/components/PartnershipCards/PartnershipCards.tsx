import styles from './PartnershipCards.module.css';
import Image from 'next/image';

// Іконки (замініть на ваші реальні шляхи до зображень)
import startupIcon from '../../../public/images/icon/chart-pie.png';
import businessIcon from '../../../public/images/icon/employees.png';
import affiliateIcon from '../../../public/images/icon/people-network-partner.png';

const PartnershipCards = () => {
    return (
        <section className={styles.partnershipCards}>
            <h2>
            We are open to partnership opportunities with like-minded companies or individuals. So, as we see, partnering with us can be interesting for:
            </h2>
            <div className={styles.cards}>
                <div className={styles.cardWrapeper}>
                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <Image src={startupIcon} alt="Startup Founders Icon" width={24} height={24} />
                        </div>
                        <h3>Startup Founders</h3>
                        <p>
                            When it is beneficial to leverage our resources and expertise in exchange for shares to grow a joint business
                        </p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <Image src={businessIcon} alt="Business Owners Icon" width={24} height={24} />
                        </div>
                        <h3>Business Owners</h3>
                        <p>
                            Whom our expertise is profitable for and who can provide us with a range of benefits in selling our services
                        </p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <Image src={affiliateIcon} alt="Affiliate Sellers Icon" width={24} height={24} />
                        </div>
                        <h3>Affiliate Sellers</h3>
                        <p>
                            Who is interested in selling our software solutions and services and receiving a commission on sales made
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnershipCards;