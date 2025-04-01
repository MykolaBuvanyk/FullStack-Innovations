'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './ServicesHero.module.css';

// Зображення робочого місця (замініть на ваш шлях)
import workspaceImage from '../../../public/images/workspace.png';

const tabs = [
    { label: 'Веб-сайти', value: 'websites' },
    { label: 'Дизайн', value: 'design' },
    { label: 'Розробка', value: 'development' },
    { label: 'Маркетинг', value: 'marketing' },
];

// Список послуг для кожної вкладки (можна розширити)
const services = {
    websites: [
        'UI/UX дизайн',
        '2D дизайн',
    ],
    design: [
        'UI/UX дизайн',
        '3D моделювання',
        '2D дизайн',
        'Маркетинг',
    ],
    development: [
        'Розробка логіки',
    ],
    marketing: [
        'Маркетинг',
    ],
};

const ServicesHero = () => {
    const [activeTab, setActiveTab] = useState<keyof typeof services>('websites');
    const currentServices = [...services[activeTab]];
    while (currentServices.length < 4) {
      currentServices.push('');
    }
    return (
        <section className={styles.servicesHero}>
            <div className={styles.heroContainer}>
                {/* Зображення робочого місця */}
                <div className={styles.heroImage}>
                    <img src='/images/workspace.png'/>
                </div>

                {/* Контент */}
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        Послуги<br />Fullstack innovations
                    </h1>

                    {/* Вкладки */}
                    <div className={styles.tabs}>
                        {tabs.map((tab) => (
                            <button
                                key={tab.value}
                                className={`${styles.tabButton} ${activeTab === tab.value ? styles.active : ''
                                    }`}
                                onClick={() => setActiveTab(tab.value as keyof typeof services)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Список послуг */}
                    <ul className={styles.servicesList}>
                        {services[activeTab].map((service, index) => (
                            <li key={index} className={styles.serviceItem}>
                                {service || <span>&nbsp;</span>}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ServicesHero;