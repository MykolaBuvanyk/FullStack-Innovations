"use client";

import { useState, useEffect } from "react";
import styles from "./ModalFeedback.module.css";

interface ModalFeedbackProps {
  isOpen: boolean;
  closeModal: () => void;
}

const ModalFeedback: React.FC<ModalFeedbackProps> = ({
  isOpen,
  closeModal,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    feedbackType: "1",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
    feedbackType: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focused, setFocused] = useState({ feedbackType: true });
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      message: "",
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

    if (!formData.message.trim()) {
      newErrors.message = "Заповніть відгук або пропозицію";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  useEffect(() => {
    setIsFormValid(validateForm());
  }, [formData]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid) {
      validateForm();
      return;
    }

    console.log("Форма відправлена:", formData);
    setIsSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: "",
      feedbackType: "1",
    });

    setTimeout(() => {
      setIsSubmitted(false);
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
                Імя
              </label>
              {errors.name && <div className={styles.error}>{errors.name}</div>}
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
          <button
            type="submit"
            className={`${styles.submitBtn} ${
              isFormValid ? styles.active : styles.inactive
            }`}
            disabled={!isFormValid}
          >
            Відправити
            <img src="/images/arrow_top_right.svg" alt="" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalFeedback;
