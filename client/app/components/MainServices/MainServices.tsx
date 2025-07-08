"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./MainServices.module.css";

type Props = {
  dictionary: any;
};

type Category =
  | "all"
  | "web-development"
  | "seo"
  | "ads"
  | "mobile-apps"
  | "design"
  | "modeling";

// Filter services by category
const getServicesByCategory = (category: Category, services: any[]) => {
  switch (category) {
    case "all":
      return services;
    case "web-development":
      return services.filter((service) => [1, 2, 3, 4, 5].includes(service.id));
    case "seo":
      return services.filter((service) => service.id === 8);
    case "ads":
      return services.filter((service) => service.id === 7);
    case "mobile-apps":
      return services.filter((service) => service.id === 6);
    case "design":
      return services.filter((service) => service.id === 9);
    case "modeling":
      return services.filter((service) => service.id === 10);
    default:
      return [];
  }
};

const MainServices: React.FC<Props> = ({ dictionary }) => {
  const [activeTab, setActiveTab] = useState<Category>("all");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const currentServices = getServicesByCategory(activeTab, dictionary.services);

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

  // Log Swiper initialization for debugging
  useEffect(() => {
    console.log(
      "Swiper initialized - Tabs count:",
      dictionary.tabs.length,
      "Services count:",
      currentServices.length
    );
  }, [dictionary.tabs, currentServices]);

  return (
    <section className={styles.mainServices}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>{dictionary.title}</h1>
            <p>
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="11.5"
                  cy="11.5"
                  r="11.5"
                  fill="#E81EDD"
                  fillOpacity="0.2"
                />
                <circle
                  cx="11.5"
                  cy="11.5"
                  r="7.5"
                  fill="#E81EDD"
                  fillOpacity="0.2"
                />
                <circle cx="11.5" cy="11.5" r="3.5" fill="#E81EDD" />
              </svg>
              {dictionary.subtitle}
            </p>
          </div>

          {isMobile ? (
            <Swiper
              modules={[Autoplay]}
              slidesPerView="auto"
              spaceBetween={5}
              direction="horizontal" // Explicitly set horizontal direction
              autoplay={{
                delay: 3000, // 3 seconds
                reverseDirection: false, // Use default direction (expected to be right-to-left)
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              loop={dictionary.tabs.length > 1}
              className={styles.tabsSwiper}
              onSwiper={(swiper) =>
                console.log("Tabs Swiper initialized:", swiper)
              }
            >
              {dictionary.tabs.map((tab: { label: string; value: string }) => (
                <SwiperSlide key={tab.value} className={styles.tabSlide}>
                  <button
                    className={`${styles.tabButton} ${
                      activeTab === tab.value ? styles.active : ""
                    }`}
                    onClick={() => {
                      setActiveTab(tab.value as Category);
                      console.log("Tab clicked:", tab.value);
                    }}
                  >
                    {tab.label}
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className={styles.tabs}>
              {dictionary.tabs.map((tab: { label: string; value: string }) => (
                <button
                  key={tab.value}
                  className={`${styles.tabButton} ${
                    activeTab === tab.value ? styles.active : ""
                  }`}
                  onClick={() => setActiveTab(tab.value as Category)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}

          <div className={styles.servicesSliderContainer}>
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={isMobile ? 1 : 3}
              direction="horizontal" // Explicitly set horizontal direction
              pagination={{
                clickable: true,
                el: `.${styles.swiperPagination}`,
              }}
              autoplay={{
                delay: 3000, // 3 seconds
                reverseDirection: false, // Use default direction (expected to be right-to-left)
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              loop={currentServices.length > (isMobile ? 1 : 3)}
              className={styles.servicesSwiper}
              onSwiper={(swiper) =>
                console.log("Services Swiper initialized:", swiper)
              }
            >
              {currentServices.map((service: any) => (
                <SwiperSlide key={service.id}>
                  <div
                    className={styles.serviceCard}
                    onMouseEnter={() => setHoveredCard(service.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className={styles.serviceCardText}>
                      <h2 className={styles.serviceTitle}>{service.h1}</h2>
                      <p className={styles.serviceDescription}>
                        {dictionary.deadlineLabel}: <span>{service.p}</span>
                      </p>
                      <button className={styles.serviceButton}>
                        {hoveredCard === service.id
                          ? dictionary.detailsButton
                          : `${dictionary.costLabel} ${service.buttonText}`}
                      </button>
                    </div>
                    <div className={styles.serviceCardImageWrapper}>
                      <div className={styles.serviceCardImage}>
                        <img
                          src={service.image}
                          alt={service.name}
                          className={`${styles.serviceImage} ${
                            styles[service.imageClass]
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className={styles.swiperPagination}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainServices;
