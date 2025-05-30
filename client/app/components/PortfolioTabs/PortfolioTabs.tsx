"use client";

import { useState, useRef } from "react";
import styles from "./PortfolioTabs.module.css";

interface PortfolioItem {
  id: number;
  category: string;
  title: string;
  image: string;
}

type Props = {
  dictionary: any;
};

const POSTS_PER_PAGE = 6;

const PortfolioTabs: React.FC<Props> = ({ dictionary }) => {
  const [portfolioItems] = useState<PortfolioItem[]>(dictionary.portfolioData);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState(dictionary.tabs[0]);
  const tabsWrapperRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const scrollStart = useRef<number | null>(null);

  const filteredItems =
    activeTab === dictionary.tabs[0]
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeTab);
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

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
    scrollStart.current = tabsWrapperRef.current?.scrollLeft || 0;
    e.preventDefault();
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current !== null && scrollStart.current !== null) {
      const touchCurrentX = e.touches[0].clientX;
      const deltaX = touchStartX.current - touchCurrentX;
      if (tabsWrapperRef.current) {
        tabsWrapperRef.current.scrollLeft = scrollStart.current + deltaX;
      }
    }
    e.preventDefault();
  };

  const handleTouchEnd = () => {
    touchStartX.current = null;
    scrollStart.current = null;
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={styles.blogContentWrapper}>
      <div className={styles.container}>
        <div
          className={styles.tabsWrapper}
          ref={tabsWrapperRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {dictionary.tabs.map((tab: string) => (
            <button
              key={tab}
              className={`${styles.tab} ${
                activeTab === tab ? styles.activeTab : ""
              }`}
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
                      {dictionary.readMore}
                      <img src="/images/arrow_top_right.svg" alt="" />
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.pagination}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`${styles.paginationButton} ${styles.prevButton} ${
            currentPage === 1 ? styles.disabled : styles.active
          }`}
        >
          <i className="fa-solid fa-arrow-left"></i>
          {/* <span>{dictionary.prevButton}</span> */}
        </button>
        <ul className={styles.pageNumbers}>
          {pageNumbers.map((page) => (
            <li
              key={page}
              className={`${styles.pageItem} ${
                currentPage === page ? styles.active : ""
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
          className={`${styles.paginationButton} ${styles.nextButton} ${
            currentPage === totalPages ? styles.disabled : styles.active
          }`}
        >
          {/* <span>{dictionary.nextButton}</span> */}
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default PortfolioTabs;
