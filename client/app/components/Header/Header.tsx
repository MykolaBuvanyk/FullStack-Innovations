'use client';

// import { useState, useTransition, useEffect } from 'react';
// import { useRouter, usePathname } from 'next/navigation';
import styles from './Header.module.css';


const Header = () => {
  
  return (
    <header className={styles.header}>
        <div className={styles.container}>
            <ul className={styles.headerWrapper}>
                <li className={styles.headerWrapperEl}>
                    <img className={styles.logoImage} src="/images/logo.png" alt="" />
                </li>
                <li className={styles.headerWrapperEl}>
                    <ul className={styles.headerList}>
                        <li className={styles.headerEl}>Головна</li>
                        <li className={[styles.headerEl,styles.headerDropdown].join(' ')}>
                            Послуги
                            <i className="fa-solid fa-chevron-down"></i>
                        </li>
                        <li className={styles.headerEl}>Портфоліо</li>
                        <li className={styles.headerEl}>Про нас</li>
                        <li className={styles.headerEl}>Партнерство</li>
                        <li className={styles.headerEl}>Блог</li>
                        <li className={styles.headerEl}>Контакти</li>
                    </ul>
                </li>
                <li className={styles.headerWrapperEl}>
                    <div className={styles.headerTel}>
                        <a href='tel:+380636826299'><span>🇺🇦</span> +(380) 63 682 6299</a>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                    <div className={styles.headerLang}>
                        <p>UA</p>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                </li>
            </ul>
        </div>
    </header>
  )
};

export default Header;