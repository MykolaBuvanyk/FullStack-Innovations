"use client";

import { useState } from "react";
import styles from "./ModalFeedback.module.css";

<<<<<<< HEAD
const ModalFeedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedbackType: "1", // Default to first option
=======
const ModalFeedback: React.FC<ModalFeedbackProps> = ({
  isOpen,
  closeModal,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    feedbackType: "1",
>>>>>>> b60723971ff622d21e0372d65d9055b21554c989
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
<<<<<<< HEAD
    feedbackType: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
=======
    message: "",
    feedbackType: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focused, setFocused] = useState({ feedbackType: true });
>>>>>>> b60723971ff622d21e0372d65d9055b21554c989

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
<<<<<<< HEAD
=======
      message: "",
>>>>>>> b60723971ff622d21e0372d65d9055b21554c989
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

<<<<<<< HEAD
=======
    if (!formData.message.trim()) {
      newErrors.message = "Заповніть відгук або пропозицію";
      isValid = false;
    }
    
>>>>>>> b60723971ff622d21e0372d65d9055b21554c989
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
<<<<<<< HEAD
=======
      message: "",
>>>>>>> b60723971ff622d21e0372d65d9055b21554c989
      feedbackType: "1",
    });

    setTimeout(() => {
      setIsSubmitted(false);
<<<<<<< HEAD
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
=======
      closeModal();
    }, 5000);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalFeedbackWrapper}>
        <button className={styles.backButton} onClick={closeModal}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>Відгук або пропозиція щодо роботи</h2>
          <p className={styles.titlePara}>Нам важлива, ваша думка</p>
        </div>
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.formGroupWrapper}>
            <div className={styles.formGroup}>
              <input
                type="text"
                id="name"
                name="name"
                placeholder=" "
                className={styles.input}
                value={formData.name}
                onChange={handleChange}
              />
              <label htmlFor="name" className={styles.label}>
                {/* {dictionary.fields.name} */}
                Імя
              </label>
              {errors.name && (
                <div className={styles.error}>{errors.name}</div>
              )}
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                id="email"
                name="email"
                placeholder=" "
                className={styles.input}
                value={formData.email}
                onChange={handleChange}
              />
              <label htmlFor="email" className={styles.label}>
                {/* {dictionary.fields.email} */}
                Емейл
              </label>
              {errors.email && (
                <div className={styles.error}>{errors.email}</div>
              )}
            </div>
            <div className={styles.formGroup}>
              <input
                type="text"
                id="message"
                name="message"
                placeholder=" "
                className={styles.input}
                value={formData.message}
                onChange={handleChange}
              />
              <label htmlFor="message" className={styles.label}>
                Відгук або пропозиція
              </label>
              {errors.message && (
                <div className={styles.error}>{errors.message}</div>
              )}
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <p
              className={`${styles.dropDownPara} ${
                focused.feedbackType
                  ? styles.dropDownOpenPara
                  : styles.dropDownClosedPara
              }`}
              onClick={() =>
                setFocused((prev) => ({
                  ...prev,
                  feedbackType: !prev.feedbackType,
                }))
              }
            >
              Ваша оцінка
              <i className="fa-solid fa-chevron-down"></i>
            </p>

            <div
              className={`${styles.customSelect} ${
                focused.feedbackType ? styles.selectFocused : ""
              } ${
                focused.feedbackType
                  ? styles.dropdownOpen
                  : styles.dropdownClosed
              }`}
            >
              {focused.feedbackType && (
                <div className={styles.options}>
                  {["1", "2", "3", "4", "5"].map((val, idx) => {
                    const labels = [
                      "1 — Погано",
                      "2 — Можливо краще",
                      "3 — Терпимо",
                      "4 — Добре",
                      "5 — Відмінно",
                    ];
                    return (
                      <div
                        key={val}
                        className={`${styles.option} ${
                          formData.feedbackType === val ? styles.active : ""
                        }`}
                        onClick={() => {
                          setFormData((prev) => ({
                            ...prev,
                            feedbackType: val,
                          }));
                          setErrors((prev) => ({ ...prev, feedbackType: "" }));
                        }}
                      >
                        {labels[idx]}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {errors.feedbackType && (
              <div className={styles.error}>{errors.feedbackType}</div>
            )}
          </div>
          <button type="submit" className={styles.submitBtn}>
            Відправити
            <img src="/images/arrow_top_right.svg" alt="" />
          </button>
        </form>
      </div>
>>>>>>> b60723971ff622d21e0372d65d9055b21554c989
    </div>
  );
};

<<<<<<< HEAD
export default ModalFeedback;
=======
export default ModalFeedback;
>>>>>>> b60723971ff622d21e0372d65d9055b21554c989
