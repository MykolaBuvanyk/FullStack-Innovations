'use client';

import styles from './OurPortfolioSlider.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

type Props = {
  dictionary: any;
};

const reviews = [
  {
    logo: '/images/portfolio1.png',
  },
  {
    logo: '/images/portfolio2.png',
  },
  {
    logo: '/images/portfolio3.png',
  },
  {
    logo: '/images/portfolio1.png',
  },
];

const OurPortfolioSlider: React.FC<Props> = ({ dictionary }) => {
  return (
    <section className={styles.ourPortfolio}>
      <div className={styles.container}>
        <h2 className={styles.title}>{dictionary.title}</h2>
        <div className={styles.btnWrapper}>
          <button className={styles.btn}>
            {dictionary.buttonText}
            <img src="/images/arrow_top_right.svg" alt="" />
          </button>
        </div>
        <div className={styles.sliderContainer}>
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            autoHeight={true}
            pagination={{
              clickable: true,
              el: `.${styles.swiperPagination}`,
            }}
            breakpoints={{
              0: { slidesPerView: 1.5, spaceBetween: 10 },
              650: { slidesPerView: 3, spaceBetween: 20 },
              1100: { slidesPerView: 3 },
            }}
            observer={true} // Додаємо observer
            observeParents={true} // Спостерігати за батьківськими елементами
            className={styles.swiper}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className={styles.sliderItem}>
                  <div className={styles.itemLogo}>
                    <img src={review.logo} alt="Company Logo" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.swiperPagination}></div>
        </div>
      </div>
    </section>
  );
};

export default OurPortfolioSlider;