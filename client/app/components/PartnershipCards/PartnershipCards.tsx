'use client';

import styles from './PartnershipCards.module.css';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useState, useEffect } from 'react';
import startupIcon from '../../../public/images/icon/chart-pie.png';
import businessIcon from '../../../public/images/icon/employees.png';
import affiliateIcon from '../../../public/images/icon/people-network-partner.png';

import 'swiper/css';
import 'swiper/css/pagination';

type Props = {
  dictionary: any;
};

const cards = [
  {
    icon: startupIcon,
    alt: "Startup Founders Icon",
    index: 0
  },
  {
    icon: businessIcon,
    alt: "Business Owners Icon",
    index: 1
  },
  {
    icon: affiliateIcon,
    alt: "Affiliate Sellers Icon",
    index: 2
  }
];

const PartnershipCards: React.FC<Props> = ({ dictionary }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 650);
    };
    
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  return (
    <section className={styles.partnershipCards}>
      <h2>{dictionary.title}</h2>
      <div className={styles.cards}>
        <div className={styles.cardWrapper}>
          {isMobile ? (
            <>
              <Swiper
                modules={[Pagination]}
                spaceBetween={10}
                slidesPerView={1.5}
                autoHeight={false}
                pagination={{
                  clickable: true,
                  el: `.${styles.swiperPagination}`,
                }}
                breakpoints={{
                  0: { slidesPerView: 1.5, spaceBetween: 10 },
                }}
                observer={true}
                observeParents={true}
                className={styles.swiper}
              >
                {cards.map((card, index) => (
                  <SwiperSlide key={index}>
                    <div className={styles.card}>
                      <div className={styles.cardIcon}>
                        <Image src={card.icon} alt={card.alt} width={24} height={24} />
                      </div>
                      <h3>{dictionary.cards[card.index].title}</h3>
                      <p>{dictionary.cards[card.index].description}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className={styles.swiperPagination}></div>
            </>
          ) : (
            cards.map((card, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.cardIcon}>
                  <Image src={card.icon} alt={card.alt} width={24} height={24} />
                </div>
                <h3>{dictionary.cards[card.index].title}</h3>
                <p>{dictionary.cards[card.index].description}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default PartnershipCards;