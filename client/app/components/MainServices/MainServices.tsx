"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./MainServices.module.css";

// Список усіх послуг з унікальними id та додатковими полями
const allServices = [
    {
        id: 1,
        name: "Лендінг",
        image: "/images/MainServices/landing.png",
        h1: "Лендінг",
        p: "до 20 робочих днів",
        buttonText: "від 1 300$",
        imageClass: "landingImage", // Індивідуальний клас для Лендінгу
    },
    {
        id: 2,
        name: "Багатосторінковий",
        image: "/images/MainServices/multipage.png",
        h1: "Багатосторінковий",
        p: "до 35 робочих днів",
        buttonText: "від 2 000$",
        imageClass: "multipageImage", // Індивідуальний клас для Багатосторінкового
    },
    {
        id: 3,
        name: "Інтернет-магазин",
        image: "/images/MainServices/online-store.png",
        h1: "Інтернет-магазин",
        p: "до 20 робочих днів",
        buttonText: "від 2 000$",
        imageClass: "onlineStoreImage", // Індивідуальний клас для Інтернет-магазину
    },
    {
        id: 4,
        name: "Сайт для доставки",
        image: "/images/MainServices/delivery-site.png",
        h1: "Сайт для доставки",
        p: "до 20 робочих днів",
        buttonText: "від 2 000$",
        imageClass: "deliverySiteImage", // Індивідуальний клас для Сайту для доставки
    },
    {
        id: 5,
        name: "Бізнес сайт",
        image: "/images/MainServices/business-site.png",
        h1: "Бізнес сайт",
        p: "до 20 робочих днів",
        buttonText: "від 1 300$",
        imageClass: "businessSiteImage", // Індивідуальний клас для Бізнес сайту
    },
    {
        id: 6,
        name: "Мобільні застосунки",
        image: "/images/MainServices/mobile-apps.png",
        h1: "Мобільні застосунки",
        p: "до 35 робочих днів",
        buttonText: "від 2 000$",
        imageClass: "mobileAppsImage", // Індивідуальний клас для Мобільних застосунків
    },
    {
        id: 7,
        name: "Google Ads",
        image: "/images/MainServices/google-ads.png",
        h1: "Google Ads",
        p: "до 20 робочих днів",
        buttonText: "від 2 000$",
        imageClass: "googleAdsImage", // Індивідуальний клас для Google Ads
    },
    {
        id: 8,
        name: "SEO-просування",
        image: "/images/MainServices/seo.png",
        h1: "SEO-просування",
        p: "до 20 робочих днів",
        buttonText: "від 1 300$",
        imageClass: "seoImage", // Індивідуальний клас для SEO-просування
    },
    {
        id: 9,
        name: "2D моделювання",
        image: "/images/MainServices/3d-modeling.png",
        h1: "2D моделювання",
        p: "до 20 робочих днів",
        buttonText: "від 1 300$",
        imageClass: "modeling2DImage", // Індивідуальний клас для 2D моделювання
    },
    {
        id: 10,
        name: "3D моделювання",
        image: "/images/MainServices/3d-modeling.png",
        h1: "3D моделювання",
        p: "до 35 робочих днів",
        buttonText: "від 2 000$",
        imageClass: "modeling3DImage", // Індивідуальний клас для 3D моделювання
    },
];

// Вкладки (категорії)
const tabs = [
    { label: "Всі послуги", value: "all" },
    { label: "Веб-розробка", value: "web-development" },
    { label: "SEO просування", value: "seo" },
    { label: "Контекстна реклама", value: "ads" },
    { label: "Мобільні застосунки", value: "mobile-apps" },
    { label: "2D та 3D моделювання", value: "modeling" },
];
type Category = "all" | "web-development" | "seo" | "ads" | "mobile-apps" | "modeling";
// Логіка фільтрації послуг за категоріями
const getServicesByCategory = (category: Category) => {
    switch (category) {
        case "all":
            return allServices;
        case "web-development":
            return allServices.filter((service) =>
                [1, 2, 3, 4, 5].includes(service.id)
            ); // Лендінг, Багатосторінковий, Інтернет-магазин, Сайт для доставки, Бізнес сайт
        case "seo":
            return allServices.filter((service) => service.id === 8); // SEO-просування
        case "ads":
            return allServices.filter((service) => service.id === 7); // Google Ads
        case "mobile-apps":
            return allServices.filter((service) => service.id === 6); // Мобільні застосунки
        case "modeling":
            return allServices.filter((service) =>
                [9, 10].includes(service.id)
            ); // 2D та 3D моделювання
        default:
            return [];
    }
};

const MainServices = () => {
    const [activeTab, setActiveTab] = useState<Category>("all");

    // Отримуємо послуги для активної вкладки
    const currentServices = getServicesByCategory(activeTab);

    return (
        <section className={styles.mainServices}>
            <div className={styles.heroContainer}>
                <div className={styles.heroContent}>
                    <div className={styles.heroText}>
                        <h1 className={styles.heroTitle}>Послуги</h1>
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
                            Fullstack innovations
                        </p>
                    </div>

                    {/* Вкладки */}
                    <div className={styles.tabs}>
                        {tabs.map((tab) => (
                            <button
                                key={tab.value}
                                className={`${styles.tabButton} ${activeTab === tab.value ? styles.active : ""
                                    }`}
                                onClick={() => setActiveTab(tab.value as Category)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Список послуг */}
                    <ul className={styles.servicesList}>
                        {currentServices.map((service) => (
                            <li key={service.id} className={styles.serviceItem}>
                                <div className={styles.serviceCard}>
                                    
                                    <div className={styles.serviceCardText}>
                                        <h2 className={styles.serviceTitle}>{service.h1}</h2>
                                        <p className={styles.serviceDescription}>Термін реалізації: <span>{service.p}</span></p>
                                        <button className={styles.serviceButton}>
                                            Вартість <span>{service.buttonText}</span>
                                        </button>
                                    </div>
                                    <div className={styles.serviceCardImageWrapper}>
                                        <div className={styles.serviceCardImage}>
                                            {/* <Image
                                                src={service.image}
                                                alt={service.name}
                                                layout="fill"
                                                className={`${styles.serviceImage} ${styles[service.imageClass]}`}
                                            /> */}
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
                        {/* {Array.from({ length: Math.max(0, 4 - currentServices.length) }).map(
                            (_, index) => (
                                <li key={`empty-${index}`} className={styles.serviceItem}>
                                    <div className={styles.serviceCard}>
                                        <div className={styles.emptyCard}></div>
                                    </div>
                                </li>
                            )
                        )} */}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default MainServices;