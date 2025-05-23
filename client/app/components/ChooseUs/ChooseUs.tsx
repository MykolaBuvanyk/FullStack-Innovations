"use client";

import { useState, useEffect } from "react";
import styles from "./ChooseUs.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

type Props = {
  dictionary: any;
};

const ChooseUs: React.FC<Props> = ({ dictionary }) => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const checkIfMobileOrTablet = () => {
      setIsMobileOrTablet(window.innerWidth <= 1150);
    };

    checkIfMobileOrTablet();
    window.addEventListener("resize", checkIfMobileOrTablet);

    return () => {
      window.removeEventListener("resize", checkIfMobileOrTablet);
    };
  }, []);

  return (
    <section className={styles.chooseUs}>
      <div className={styles.chooseUsTitle}>
        <h2 dangerouslySetInnerHTML={{ __html: dictionary.title }}></h2>
      </div>

      {isMobileOrTablet ? (
        <div className={styles.chooseUsSliderContainer}>
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1.7}
            breakpoints={{
              0: {
                slidesPerView: 1.3,
              },
              651: {
                slidesPerView: 2,
              },
            }}
            pagination={{
              clickable: true,
              el: `.${styles.swiperPagination}`,
            }}
            className={styles.chooseUsSwiper}
          >
            {dictionary.items.map(
              (
                item: { number: string; subtitle: string; description: string },
                index: number
              ) => (
                <SwiperSlide key={index}>
                  <div className={styles.chooseUsItem}>
                    <div className={styles.chooseUsContent}>
                      <div className={styles.chooseUsSharpNumber}>
                        <h3>{item.number}</h3>
                      </div>
                      <h4>{item.subtitle}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
          <div className={styles.swiperPagination}></div>
        </div>
      ) : (
        <div className={styles.chooseUsGrid}>
          {dictionary.items.map(
            (
              item: { number: string; subtitle: string; description: string },
              index: number
            ) => (
              <div key={index} className={styles.chooseUsItem}>
                <div className={styles.chooseUsContent}>
                  <div className={styles.chooseUsSharpNumber}>
                    <h3>{item.number}</h3>
                  </div>
                  <h4>{item.subtitle}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </section>
  );
};

export default ChooseUs;
