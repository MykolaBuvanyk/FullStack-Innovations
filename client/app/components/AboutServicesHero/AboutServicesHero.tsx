'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './AboutServicesHero.module.css';

// Зображення робочого місця (замініть на ваш шлях)
import workspaceImage from '../../../public/images/workspace.png';

type Props = {
  dictionary: any;
};

const AboutServicesHero: React.FC<Props> = ({ dictionary }) => {
    const [activeTab, setActiveTab] = useState<string>(dictionary.tabs[0].value);
    const currentServices = [...dictionary.services[activeTab]];
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
                    <h1 className={styles.heroTitle} dangerouslySetInnerHTML={{ __html: dictionary.title }}></h1>

                    {/* Вкладки */}
                    <div className={styles.tabs}>
                        {dictionary.tabs.map((tab: { label: string; value: string }) => (
                            <button
                                key={tab.value}
                                className={`${styles.tabButton} ${activeTab === tab.value ? styles.active : ''}`}
                                onClick={() => setActiveTab(tab.value)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Список послуг */}
                    <ul className={styles.servicesList}>
                        {currentServices.map((service: string, index: number) => (
                            <li key={index} className={styles.serviceItem}>
                                {service || <span> </span>}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default AboutServicesHero;