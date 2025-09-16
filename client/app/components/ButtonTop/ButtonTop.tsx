"use client";

import styles from "./ButtonTop.module.css";

import { useEffect, useState } from "react";

const ButtonTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={
        styles.buttonTopWrapper + (visible ? " " + styles.visible : "")
      }
    >
      <button className={styles.buttonTop} onClick={scrollToTop}>
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </div>
  );
};

export default ButtonTop;
