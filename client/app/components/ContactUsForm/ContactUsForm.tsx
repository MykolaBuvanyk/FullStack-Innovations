"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./ContactUsForm.module.css";

type Props = {
  dictionary: any;
};

const ContactUsForm: React.FC<Props> = ({ dictionary }) => {
  const [activeIcon, setActiveIcon] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    policy: false,
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
    policy: "",
    method: "",
  });

  const handleIconClick = (iicon: string) => {
    setActiveIcon(iicon);
    setErrors((prev) => ({ ...prev, method: "" }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === "checkbox";
  
    if (name === "name") {
      const lettersOnly = value.replace(/[^a-zA-Zа-яА-ЯїЇіІєЄґҐʼ'’\s]/g, "");
      setFormData((prev) => ({
        ...prev,
        [name]: lettersOnly,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: isCheckbox ? (e.target as HTMLInputElement).checked : value,
      }));
    }
  
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };
  
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      const textarea = textareaRef.current;
      textarea.style.height = "4vw"; 
    }
  }, [formData.message]);


  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
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

    if (!formData.message.trim()) {
      newErrors.message = dictionary.errors.message;
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

    console.log("Форма відправлена:", { ...formData, method: activeIcon });
    setIsSubmitted(true);

    setFormData({
      name: "",
      email: "",
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
                  className={styles.input}
                  value={formData.name}
                  onChange={handleChange}
                />
                <label htmlFor="name" className={styles.label}>
                  {dictionary.fields.name}
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
                  {dictionary.fields.email}
                </label>
                {errors.email && (
                  <div className={styles.error}>{errors.email}</div>
                )}
              </div>
            </div>
            <div className={styles.formGroup}>
            <textarea
              id="message"
              name="message"
              placeholder=" "
              ref={textareaRef}
              className={`${styles.input} ${
                formData.message.includes("\n") || formData.message.length > 40 ? styles.multiline : ""
              }`}
              value={formData.message}
              onChange={handleChange}
            />

              <label htmlFor="message" className={styles.label}>
                {dictionary.fields.message}
              </label>
              {errors.message && (
                <div className={styles.error}>{errors.message}</div>
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
                <a href="#" className={styles.policyRef}>{dictionary.fields.policyRef}</a>
              </label>
            </div>
            {errors.policy && (
              <div className={styles.error}>{errors.policy}</div>
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
          </div>
          {errors.method && <div className={styles.error}>{errors.method}</div>}
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