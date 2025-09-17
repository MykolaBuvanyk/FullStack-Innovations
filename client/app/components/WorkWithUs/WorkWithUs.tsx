"use client";

import { useEffect, useRef } from "react";
import styles from "./WorkWithUs.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import type { Swiper as SwiperType } from "swiper";

type Props = {
    dictionary: any;
};

const WorkWithUs: React.FC<Props> = ({ dictionary }) => {
    const swiperRef = useRef<SwiperType | null>(null);

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.autoplay.start();
        }
    }, []);

    return (
        <section className={styles.workWithUsWrapper}>
            <div className={styles.tellAboutUsTitle}>
                <h2 dangerouslySetInnerHTML={{ __html: dictionary.title }}></h2>
            </div>
            <div className={styles.tellAboutUsTitleButton}>
                <button className={styles.submitButton}>
                    {dictionary.buttonText}
                    <img src="/images/arrow_top_right.svg" alt="" />
                </button>
            </div>
            <div className={styles.workWithUsContainer}>
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    modules={[Autoplay]}
                    spaceBetween={10}
                    slidesPerView={6}
                    loop={true}
                    freeMode={true}
                    speed={4000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        650: {
                            slidesPerView: 6,
                            spaceBetween: 10
                        },
                        0: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        },
                    }}
                    className={styles.workWithUsList}
                >
                    <SwiperSlide className={styles.workWithUsEl}>
                        <img src="/images/WorkWithUs/1.svg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className={styles.workWithUsEl}>
                        <img src="/images/WorkWithUs/2.svg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className={styles.workWithUsEl}>
                        <img src="/images/WorkWithUs/3.svg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className={styles.workWithUsEl}>
                        <img src="/images/WorkWithUs/4.svg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className={styles.workWithUsEl}>
                        <img src="/images/WorkWithUs/5.svg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className={styles.workWithUsEl}>
                        <img src="/images/WorkWithUs/6.svg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className={styles.workWithUsEl}>
                        <img src="/images/WorkWithUs/1.svg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className={styles.workWithUsEl}>
                        <img src="/images/WorkWithUs/2.svg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className={styles.workWithUsEl}>
                        <img src="/images/WorkWithUs/3.svg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className={styles.workWithUsEl}>
                        <img src="/images/WorkWithUs/4.svg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className={styles.workWithUsEl}>
                        <img src="/images/WorkWithUs/5.svg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide className={styles.workWithUsEl}>
                        <img src="/images/WorkWithUs/6.svg" alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default WorkWithUs;