'use client';

import styles from './ButtonTop.module.css';

  
  const ButtonTop = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Плавна прокрутка
        });
    };
  return (
    <div className={styles.buttonTopWrapper}>
        <button 
            className={styles.buttonTop}
            onClick={scrollToTop}
        >
            <i className="fa-solid fa-arrow-up"></i>
        </button>
    </div>
  )
};

export default ButtonTop;