'use client';

import styles from './OurPortfolioSlider.module.css';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

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

const OurPortfolioSlider = () => {
    return (
        <section className={styles.ourPortfolio}>
            <div className={styles.ourPortfolioTitle}>
                <div className={styles.ourPortfolioTitleButton}>
                    <h2>
                        Наше портфоліо
                    </h2>
                    <button className={styles.submitButton}>Розкажіть про свій проект<img src="/images/arrow_top_right.svg" alt="" /></button>
                </div>
            </div>
            <div className={styles.ourPortfolioSlider}>
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                        el: `.${styles.swiperPagination}`,
                    }}
                    breakpoints={{
                        1100: { slidesPerView: 3 },
                        768: { slidesPerView: 3 },
                        0: { slidesPerView: 1 },
                    }}
                >
                    {reviews.map((review, index) => (
                        <SwiperSlide key={index}>
                            <div className={styles.ourPortfolioSliderItem}>
                                <div className={styles.ourPortfolioSliderItem}>
                                    <div className={styles.ItemLogo}>
                                        <img src={review.logo} alt="Company Logo" />
                                    </div>
                                    
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className={styles.swiperPagination}></div>
            </div>
        </section>
    );
};

export default OurPortfolioSlider;