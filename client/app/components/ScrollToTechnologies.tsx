"use client";
import { useEffect } from "react";

const ScrollToTechnologies: React.FC = () => {
  useEffect(() => {
    if (
      window.location.hash === "#technologies" &&
      window.history.state?.scrollByTechnologiesButton
    ) {
      const el = document.getElementById("technologies");
      if (el) {
        setTimeout(() => {
          const y = el.getBoundingClientRect().top + window.scrollY - 0;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 100);
      }
      // Скидаємо прапорець, щоб не скролити при наступних переходах
      window.history.replaceState(
        { ...window.history.state, scrollByTechnologiesButton: false },
        ""
      );
    }
  }, []);
  return null;
};

export default ScrollToTechnologies;
