'use client';

import styles from './PartnershipCards.module.css';
import Image from 'next/image';
import startupIcon from '../../../public/images/icon/chart-pie.png';
import businessIcon from '../../../public/images/icon/employees.png';
import affiliateIcon from '../../../public/images/icon/people-network-partner.png';

type Props = {
  dictionary: any;
};

const PartnershipCards: React.FC<Props> = ({ dictionary }) => {
  return (
    <section className={styles.partnershipCards}>
      <h2>{dictionary.title}</h2>
      <div className={styles.cards}>
        <div className={styles.cardWrapeper}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Image src={startupIcon} alt="Startup Founders Icon" width={24} height={24} />
            </div>
            <h3>{dictionary.cards[0].title}</h3>
            <p>{dictionary.cards[0].description}</p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Image src={businessIcon} alt="Business Owners Icon" width={24} height={24} />
            </div>
            <h3>{dictionary.cards[1].title}</h3>
            <p>{dictionary.cards[1].description}</p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Image src={affiliateIcon} alt="Affiliate Sellers Icon" width={24} height={24} />
            </div>
            <h3>{dictionary.cards[2].title}</h3>
            <p>{dictionary.cards[2].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipCards;