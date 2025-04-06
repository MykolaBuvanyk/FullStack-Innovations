'use client';

import { useState } from 'react';
import styles from './PortfolioTabs.module.css'; // Використовуємо ваші стилі

// Дані для портфоліо (замініть на ваші дані)
const portfolioData = [
    {
        id: 1,
        category: 'Веб-дизайн',
        title: 'ВЕБ-ДИЗАЙН ДЛЯ КОМПАНІЇ - ELITY+',
        image: '/images/blog/1.png',
    },
    {
        id: 2,
        category: 'Веб-розробка',
        title: 'ВЕБ-ДИЗАЙН ДЛЯ КОМПАНІЇ - PRESSWAVE+',
        image: '/images/blog/2.png',
    },
    {
        id: 3,
        category: 'Лого',
        title: 'ВЕБ-ДИЗАЙН ДЛЯ КОМПАНІЇ - ALLEVA+',
        image: '/images/blog/3.png',
    },
    {
        id: 4,
        category: 'Веб-розробка',
        title: 'ВЕБ-ДИЗАЙН ДЛЯ КОМПАНІЇ - PRESSWAVE+',
        image: '/images/blog/4.png',
    },
    {
        id: 5,
        category: 'Веб-дизайн',
        title: 'ВЕБ-ДИЗАЙН ДЛЯ КОМПАНІЇ - ELITY+',
        image: '/images/blog/5.png',
    },
    {
        id: 6,
        category: 'Лого',
        title: 'ВЕБ-ДИЗАЙН ДЛЯ КОМПАНІЇ - ALLEVA+',
        image: '/images/blog/6.png',
    },
];

interface PortfolioItem {
    id: number;
    category: string;
    title: string;
    image: string;
}

const POSTS_PER_PAGE = 6;

const PortfolioTabs = () => {
    const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>(portfolioData);
    const [currentPage, setCurrentPage] = useState(1);
    const [activeTab, setActiveTab] = useState('Усе');
    const tabs = ['Усе', 'Веб-дизайн', 'Веб-розробка', 'Лого', 'Бізнес-картки'];
    const filteredItems = activeTab === 'Усе'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === activeTab);
    const totalPages = Math.ceil(filteredItems.length / POSTS_PER_PAGE);
    const paginatedItems = filteredItems.slice(
        (currentPage - 1) * POSTS_PER_PAGE,
        currentPage * POSTS_PER_PAGE
    );

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        setCurrentPage(1);
    };
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className={styles.blogContentWrapper}>
            <div className={styles.container}>
                <div className={styles.tabsWrapper}>
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ''}`}
                            onClick={() => handleTabChange(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className={styles.contentWrapper}>
                    <ul className={styles.blogList}>
                        {paginatedItems.map((item) => (
                            <li key={item.id} className={styles.blogItem}>
                                <img src={item.image} alt={item.title} />
                                <div className={styles.blogItemTextWrapper}>
                                    <h2>{item.title}</h2>
                                    <p>{item.category}</p>
                                    <div className={styles.blogItemMeta}>
                                        <a href={"#"} className={styles.readMore}>
                                            Перейти на сайт
                                            <img src="/images/arrow_top_right.svg" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className={styles.pagination}>
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`${styles.paginationButton} ${styles.prevButton} ${currentPage === 1 ? styles.disabled : styles.active
                                }`}
                        >
                            <i className="fa-solid fa-arrow-left"></i>
                            <span>Попередня сторінка</span>
                        </button>
                        <ul className={styles.pageNumbers}>
                            {pageNumbers.map((page) => (
                                <li
                                    key={page}
                                    className={`${styles.pageItem} ${currentPage === page ? styles.active : ''
                                        }`}
                                    onClick={() => handlePageChange(page)}
                                >
                                    {page}
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={`${styles.paginationButton} ${styles.nextButton} ${currentPage === totalPages ? styles.disabled : styles.active
                                }`}
                        >
                            <span>Наступна сторінка</span>
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioTabs;