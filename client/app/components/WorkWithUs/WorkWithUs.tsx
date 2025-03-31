"use client";

import { useEffect, useRef } from "react";
import styles from "./WorkWithUs.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const WorkWithUs = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.autoplay.start();
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
                    ref={swiperRef}
                    modules={[Autoplay]}
                    spaceBetween={20}
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