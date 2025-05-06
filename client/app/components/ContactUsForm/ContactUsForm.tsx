"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./ContactUsForm.module.css";

type Props = {
  dictionary: any;
};

const ContactUsForm: React.FC<Props> = ({ dictionary }) => {
  const [activeIcon, setActiveIcon] = useState<string | null>(null);
  const [showCharLimitNotification, setShowCharLimitNotification] =
    useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    policy: false,
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    policy: "",
    method: "",
  });

  const handleIconClick = (icon: string) => {
    setActiveIcon(icon);
    setErrors((prev) => ({ ...prev, method: "" }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === "checkbox";

    if (name === "message" && value.length === 500) {
      setShowCharLimitNotification(true);
      setTimeout(() => setShowCharLimitNotification(false), 5000);
    }

    if (name === "name") {
      const lettersOnly = value.replace(/[^a-zA-Zа-яА-ЯїЇіІєЄґҐʼ'’\s]/g, "");
      setFormData((prev) => ({
        ...prev,
        [name]: lettersOnly,
      }));
    } else if (name === "phone") {
      let cleanedValue = value.replace(/[^0-9+()-]/g, "");
      if (cleanedValue && !cleanedValue.startsWith("+")) {
        cleanedValue = `+${cleanedValue}`;
      }
      setFormData((prev) => ({
        ...prev,
        [name]: cleanedValue,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: isCheckbox ? (e.target as HTMLInputElement).checked : value,
      }));
    }

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      message: "",
      policy: "",
      method: "",
    };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = dictionary.errors.name;
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = dictionary.errors.email;
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = dictionary.errors.emailInvalid;
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = dictionary.errors.phone;
      isValid = false;
    } else if (!/^\+\d{1,3}[0-9()-]{7,15}$/.test(formData.phone)) {
      newErrors.phone = dictionary.errors.phoneInvalid;
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = dictionary.errors.message || "Message is required";
      isValid = false;
    }

    if (!formData.policy) {
      newErrors.policy = dictionary.errors.policy;
      isValid = false;
    }

    if (!activeIcon) {
      newErrors.method = dictionary.errors.method;
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      policy: false,
    });
    setActiveIcon(null);

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formContainerLeft}>
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <h2>{dictionary.title}</h2>
          <div className={styles.formWrapper}>
            <div className={styles.formGroupWrapper}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder=" "
                  className={`${styles.input} ${
                    errors.name ? styles.inputError : ""
                  }`}
                  value={formData.name}
                  onChange={handleChange}
                />
                <label
                  htmlFor="name"
                  className={`${styles.label} ${
                    errors.name ? styles.labelError : ""
                  }`}
                >
                  {dictionary.fields.name}
                </label>
                {errors.name && (
                  <div className={styles.error}>*{errors.name}</div>
                )}
              </div>
              <div className={styles.formGroup}>
                <div className={styles.inputGroup}>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder=" "
                    className={`${styles.input} ${
                      errors.email ? styles.inputError : ""
                    }`}
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="email"
                    className={`${styles.label} ${
                      errors.email ? styles.labelError : ""
                    }`}
                  >
                    {dictionary.fields.email}
                  </label>
                </div>
                {errors.email && (
                  <div className={styles.error}>*{errors.email}</div>
                )}
              </div>
            </div>
            <div className={styles.formGroup}>
              <div className={styles.inputGroup}>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder=" "
                  className={`${styles.input} ${
                    errors.phone ? styles.inputError : ""
                  }`}
                  value={formData.phone}
                  onChange={handleChange}
                />
                <label
                  htmlFor="phone"
                  className={`${styles.label} ${
                    errors.phone ? styles.labelError : ""
                  }`}
                >
                  {dictionary.fields.phone}
                </label>
              </div>
              {errors.phone && (
                <div className={styles.error}>*{errors.phone}</div>
              )}
            </div>
            <div className={styles.formGroup}>
              <div className={styles.inputGroup}>
                <textarea
                  id="message"
                  name="message"
                  placeholder=" "
                  className={`${styles.input} ${
                    errors.message ? styles.inputError : ""
                  }`}
                  value={formData.message}
                  onChange={handleChange}
                  rows={1}
                  maxLength={500}
                  onInput={(e) => {
                    const textarea = e.target as HTMLTextAreaElement;
                    textarea.style.height = "auto";
                    textarea.style.height = `${textarea.scrollHeight}px`;
                  }}
                />
                <label
                  htmlFor="message"
                  style={{
                    display:
                      formData.message || showCharLimitNotification
                        ? "none"
                        : "block",
                  }}
                  className={`${styles.label} ${
                    errors.message ? styles.labelError : ""
                  }`}
                >
                  {dictionary.fields.message}
                </label>
              </div>
              {errors.message && (
                <div className={styles.error}>*{errors.message}</div>
              )}
            </div>
            <div className={styles.checkboxGroup}>
              <input
                type="checkbox"
                id="policy"
                name="policy"
                className={styles.checkbox}
                checked={formData.policy}
                onChange={handleChange}
              />
              <label htmlFor="policy" className={styles.checkboxLabel}>
                {dictionary.fields.policy}
                <a href="#" className={styles.policyRef}>
                  {dictionary.fields.policyRef}
                </a>
              </label>
            {errors.policy && (
              <div className={styles.error}>*{errors.policy}</div>
            )}
            </div>
            {showCharLimitNotification && (
              <div className={styles.charLimitNotification}>
                <span>
                  {dictionary.charLimitMessage ||
                    "Maximum 500 characters reached"}
                </span>
              </div>
            )}
          </div>
          <p className={styles.iconPara}>{dictionary.methodLabel}</p>
          <div className={styles.messengerIcons}>
            {["telegram", "whatsapp", "viber", "phone", "email"].map((icon) => (
              <div
                key={icon}
                className={`${styles.messengerLink} ${
                  activeIcon === icon ? styles.active : ""
                }`}
                onClick={() => handleIconClick(icon)}
              >
                <img
                  src={`/images/ContactUsForm/${icon}.svg`}
                  alt={icon}
                  className={styles.messengerIcon}
                />
                <span className={styles.messengerLabel}>
                  {dictionary.methods[icon]}
                </span>
              </div>
            ))}
          {errors.method && (
            <div className={styles.error}>*{errors.method}</div>
          )}
          </div>
          <div className={styles.buttonWrapper}>
            <button type="submit" className={styles.submitButton}>
              {dictionary.submitButton}
              <img src="/images/arrow_top_right.svg" alt="" />
            </button>
            {isSubmitted && (
              <div className={styles.submitWrapper}>
                <div className={styles.notification}>
                  <img
                    src="/images/ContactUsForm/bell.svg"
                    alt="Bell"
                    className={styles.notificationIcon}
                  />
                  <span>{dictionary.successMessage}</span>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
      <div className={styles.formContainerRight}>
        <div className={styles.spheraWrapper}>
          <div className={styles.sphereLarge}>
            <img src="/images/green_abstract_shape.png" alt="" />
          </div>
          <div className={styles.sphereMedium}>
            <img src="/images/hero-sphera-2.png" alt="" />
          </div>
          <div className={styles.sphereSmall}>
            <img src="/images/hero-sphera-4.png" alt="" />
          </div>
          <div className={styles.backgroundElipse}></div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
