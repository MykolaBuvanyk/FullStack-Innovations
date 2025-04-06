"use client";

import { useState } from "react";
import styles from "./ModalFeedback.module.css";

const ModalFeedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedbackType: "1", // Default to first option
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    feedbackType: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      feedbackType: "",
    };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Заповніть ім'я";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Заповніть пошту";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Введіть коректний E-mail";
      isValid = false;
    }

    if (!formData.feedbackType) {
      newErrors.feedbackType = "Виберіть оцінку";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    console.log("Форма відправлена:", formData);
    setIsSubmitted(true);

    setFormData({
      name: "",
      email: "",
      feedbackType: "1",
    });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className={styles.modalFeedbackWrapper}>
      <button className={styles.backButton}>
        <img src="/images/arrow-left.svg" alt="Back" />
      </button>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>Відгук або пропозиція щодо роботи</h2>
        <p className={styles.titlePara}>Нам важлива, ваша думка</p>
      </div>
      <form className={styles.feedbackForm} onSubmit={handleSubmit} noValidate>
        <div className={styles.inputWrapper}>
          <label htmlFor="name" className={styles.label}>
            Ваше ім'я
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={styles.input}
            placeholder=" "
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div className={styles.error}>{errors.name}</div>}
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="email" className={styles.label}>
            Ваш e-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
            placeholder=" "
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className={styles.error}>{errors.email}</div>}
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="feedbackType" className={styles.label}>
            Відгук або пропозиція
          </label>
          <select
            id="feedbackType"
            name="feedbackType"
            className={styles.select}
            value={formData.feedbackType}
            onChange={handleChange}
          >
            <option value="1">1 — Погано</option>
            <option value="2">2 — Можливо краще</option>
            <option value="3">3 — Терпимо</option>
            <option value="4">4 — Добре</option>
            <option value="5">5 — Відмінно</option>
          </select>
          {errors.feedbackType && (
            <div className={styles.error}>{errors.feedbackType}</div>
          )}
        </div>
        <div className={styles.buttonWrapper}>
          <button type="submit" className={styles.submitButton}>
            Відправити
            <img src="/images/arrow-right.svg" alt="Arrow" />
          </button>
          {isSubmitted && (
            <div className={styles.notification}>
              <img
                src="/images/bell.svg"
                alt="Bell"
                className={styles.notificationIcon}
              />
              <span>Ваше повідомлення успішно надіслано. Дякуємо!</span>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default ModalFeedback;