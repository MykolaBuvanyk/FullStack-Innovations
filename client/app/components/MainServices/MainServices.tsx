"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./MainServices.module.css";

type Props = {
  dictionary: any;
};

type Category = "all" | "web-development" | "seo" | "ads" | "mobile-apps" | "design" | "modeling";

// Логіка фільтрації послуг за категоріями
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
  const currentServices = getServicesByCategory(activeTab, dictionary.services);

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
                <circle cx="11.5" cy="11.5" r="11.5" fill="#E81EDD" fillOpacity="0.2" />
                <circle cx="11.5" cy="11.5" r="7.5" fill="#E81EDD" fillOpacity="0.2" />
                <circle cx="11.5" cy="11.5" r="3.5" fill="#E81EDD" />
              </svg>
              {dictionary.subtitle}
            </p>
          </div>

          <div className={styles.tabs}>
            {dictionary.tabs.map((tab: { label: string; value: string }) => (
              <button
                key={tab.value}
                className={`${styles.tabButton} ${activeTab === tab.value ? styles.active : ""}`}
                onClick={() => setActiveTab(tab.value as Category)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <ul className={styles.servicesList}>
            {currentServices.map((service: any) => (
              <li
                key={service.id}
                className={styles.serviceItem}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={styles.serviceCard}>
                  <div className={styles.serviceCardText}>
                    <h2 className={styles.serviceTitle}>{service.h1}</h2>
                    <p className={styles.serviceDescription}>
                      {dictionary.deadlineLabel}: <span>{service.p}</span>
                    </p>
                    <button className={styles.serviceButton}>
                      {hoveredCard === service.id
                        ? dictionary.detailsButton
                        : `${dictionary.costLabel} ${service.buttonText}`}
                      {/* <span>{service.buttonText}</span> */}
                    </button>
                  </div>
                  <div className={styles.serviceCardImageWrapper}>
                    <div className={styles.serviceCardImage}>
                      <img
                        src={service.image}
                        alt={service.name}
                        className={`${styles.serviceImage} ${styles[service.imageClass]}`}
                      />
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MainServices;