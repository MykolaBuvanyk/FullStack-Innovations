"use client";

import { useEffect, useRef } from "react";
import styles from "./WorkWithUs.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import type { Swiper as SwiperType } from "swiper";
const WorkWithUs = () => {
    const swiperRef = useRef<SwiperType | null>(null); // Explicitly type the ref

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.autoplay.start(); // Access the Swiper instance safely
        }
    }, []);

    return (
        <section className={styles.workWithUsWrapper}>
            <div className={styles.tellAboutUsTitle}>
                <div className={styles.tellAboutUsTitleButton}>
                    <h2>З нами<br /> співпрацюють</h2>
                    <button className={styles.submitButton}>
                        Залишити відгук
                        <img src="/images/arrow_top_right.svg" alt="" />
                    </button>
                </div>
                <p>Клієнти довіряють нам свою рекламу із США, Австралії та Європи.</p>
            </div>
            <div className={styles.workWithUsContainer}>
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    modules={[Autoplay]}
                    spaceBetween={90}
                    slidesPerView={6}
                    loop={true}
                    freeMode={true}
                    speed={4000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
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