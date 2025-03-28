'use client';

import { useState } from 'react';
import styles from './ContactUsForm.module.css';

const ContactUsForm = () => {
    const [activeIcon, setActiveIcon] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        policy: false,
    });
    const [errors, setErrors] = useState({
        name: "",
        email: '',
        message: '',
        policy: '',
        method: "",
    });

    const handleIconClick = (icon) => {
        setActiveIcon(icon);
        setErrors((prev) => ({ ...prev, method: '' }));
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
        setErrors((prev) => ({ ...prev, [name]: '' }));
    };

    const validateForm = () => {
        const newErrors = {
            name: '',
            email: '',
            message: '',
            policy: '',
            method: '',
        };
        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = "Заповніть ім'я";
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Заповніть пошту';
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Введіть коректний E-mail';
            isValid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Введіть повідомлення';
            isValid = false;
        }

        if (!formData.policy) {
            newErrors.policy = 'Погодьтеся з політикою конфіденційності';
            isValid = false;
        }

        if (!activeIcon) {
            newErrors.method = 'Виберіть спосіб зв’язку';
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

        console.log('Форма відправлена:', { ...formData, method: activeIcon });
        setIsSubmitted(true);

        setFormData({
            name: '',
            email: '',
            message: '',
            policy: false,
        });
        setActiveIcon(null);

        setTimeout(() => {
            setIsSubmitted(false);
        }, 5000);
    };

    const handleResubmit = () => {
        setIsSubmitted(false);
    };

    return (
        <div className={styles.formContainer}>
            <div className={styles.formContainerLeft}>
                <form 
                    className={styles.form} 
                    onSubmit={handleSubmit}
                    noValidate
                >
                    <div className={styles.formWrapper}>
                        <h2>СВЯЖИТЕСЬ С НАМИ ДЛЯ РАСЧЕТА СТОИМОСТИ</h2>
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
                                <label htmlFor="name" className={styles.label}>Ваше имя</label>
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
                                <label htmlFor="email" className={styles.label}>Ваш E-mail</label>
                                {errors.email && <div className={styles.error}>{errors.email}</div>}
                            </div>
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
                            <label htmlFor="message" className={styles.label}>Напишите все что Вам нужно</label>
                            {errors.message && <div className={styles.error}>{errors.message}</div>}
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
                            <label htmlFor="policy" className={styles.checkboxLabel}>Я принимаю Политику конфиденциальности</label>
                        </div>
                        {errors.policy && <div className={styles.error}>{errors.policy}</div>}
                    </div>
                    <p className={styles.iconPara}>Виберіть зручний спосіб зв'язку</p>
                    <div className={styles.messengerIcons}>
                        {["telegram", "whatsapp", "viber", "phone", "email"].map((icon) => (
                            <div
                                key={icon}
                                className={`${styles.messengerLink} ${activeIcon === icon ? styles.active : ""}`}
                                onClick={() => handleIconClick(icon)}
                            >
                                <img src={`/images/ContactUsForm/${icon}.svg`} alt={icon} className={styles.messengerIcon} />
                                <span className={styles.messengerLabel}>{icon.charAt(0).toUpperCase() + icon.slice(1)}</span>
                            </div>
                        ))}
                    </div>
                    {errors.method && <div className={styles.error}>{errors.method}</div>}
                    <div className={styles.buttonWrapper}>
                        <button type="submit" className={styles.submitButton}>Подать заявку<img src="/images/arrow_top_right.svg" alt="" /></button>
                        {isSubmitted && (
                            <div className={styles.submitWrapper}>
                                <div className={styles.notification}>
                                    <img src="/images/ContactUsForm/bell.svg" alt="Bell" className={styles.notificationIcon} />
                                    <span>Ваше повідомлення успішно надіслано. Дякуємо!</span>
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