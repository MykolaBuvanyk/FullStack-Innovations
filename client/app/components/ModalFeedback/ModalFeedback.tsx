"use client";

import { useState } from "react";
import styles from "./ModalFeedback.module.css";

interface ModalFeedbackProps {
  isOpen: boolean;
  closeModal: () => void;
  dictionary: any;
}

const ModalFeedback: React.FC<ModalFeedbackProps> = ({
  isOpen,
  closeModal,
  dictionary,
}) => {
  console.log("DICTIONARY");
  console.log(dictionary);
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
  const [showErrors, setShowErrors] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for the field being edited
    if (showErrors) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
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
      newErrors.name = dictionary.errors.nameRequired;
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = dictionary.errors.emailRequired;
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = dictionary.errors.emailInvalid;
      isValid = false;
    }

    if (!formData.feedbackType) {
      newErrors.feedbackType = dictionary.errors.feedbackTypeRequired;
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = dictionary.errors.messageRequired;
      isValid = false;
    }

    return { isValid, newErrors };
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { isValid, newErrors } = validateForm();
    setShowErrors(true); // Enable error display on submit
    setErrors(newErrors);

    if (!isValid) {
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
    setShowErrors(false); // Reset error display after successful submission

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
          <h2 className={styles.title}>{dictionary.title}</h2>
          <p className={styles.titlePara}>{dictionary.subtitle}</p>
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
                {dictionary.labels.name}
              </label>
              {showErrors && errors.name && (
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
                {dictionary.labels.email}
              </label>
              {showErrors && errors.email && (
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
                {dictionary.labels.message}
              </label>
              {showErrors && errors.message && (
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
              {dictionary.labels.feedbackType}
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
                  {["1", "2", "3", "4", "5"].map((val, idx) => (
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
                        if (showErrors) {
                          setErrors((prev) => ({ ...prev, feedbackType: "" }));
                        }
                      }}
                    >
                      {dictionary.feedbackOptions[idx]}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {showErrors && errors.feedbackType && (
              <div className={styles.error}>{errors.feedbackType}</div>
            )}
          </div>
          <button
            type="submit"
            className={`${styles.submitBtn} ${
              !showErrors || Object.values(errors).every((e) => !e)
                ? styles.active
                : styles.inactive
            }`}
          >
            {dictionary.submitButton}
            <img src="/images/arrow_top_right.svg" alt="" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalFeedback;
