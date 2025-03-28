"use client";

import { useEffect, useRef } from "react";
import styles from "./WorkWithUs.module.css";

const WorkWithUs = () => {
    const listRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const list = listRef.current;
        const container = containerRef.current;
        if (!list || !container) return;

        let animationFrame;
        let scrollAmount = 0;
        const speed = 0.5; // Швидкість прокрутки

        // Клонуємо елементи для безперервного циклу
        const originalChildren = Array.from(list.children);
        originalChildren.forEach(child => {
            list.appendChild(child.cloneNode(true));
        });

        const updateOpacity = () => {
            const containerWidth = container.offsetWidth;
            Array.from(list.children).forEach((child) => {
                const childRect = child.getBoundingClientRect();
                const containerRect = container.getBoundingClientRect();
                const childLeft = childRect.left - containerRect.left;
                const childRight = childRect.right - containerRect.left;

                // Визначаємо прозорість залежно від позиції
                let opacity = 1;
                const fadeWidth = 100; // Ширина зони затемнення (пікселі)

                // Зникає зліва
                if (childLeft < fadeWidth && childLeft > -childRect.width) {
                    opacity = Math.max(0, (childLeft + childRect.width) / (fadeWidth + childRect.width));
                }
                // З’являється справа
                else if (childRight > containerWidth - fadeWidth && childRight <= containerWidth + childRect.width) {
                    opacity = Math.min(1, (childRight - (containerWidth - fadeWidth)) / (fadeWidth + childRect.width));
                }

                child.style.opacity = opacity;
            });
        };

        const moveList = () => {
            scrollAmount -= speed;
            list.style.transform = `translateX(${scrollAmount}px)`;

            const itemWidth = list.children[0].offsetWidth;

            // Якщо елемент повністю зник зліва, переміщуємо його в кінець
            if (Math.abs(scrollAmount) >= itemWidth) {
                scrollAmount += itemWidth; // Скидаємо позицію
                list.appendChild(list.children[0]); // Переміщуємо перший елемент
                list.style.transform = `translateX(${scrollAmount}px)`;
            }

            updateOpacity(); // Оновлюємо прозорість
            animationFrame = requestAnimationFrame(moveList);
        };

        animationFrame = requestAnimationFrame(moveList);

        return () => cancelAnimationFrame(animationFrame);
    }, []);

    return (
        <section className={styles.workWithUsWrapper}>
            <div className={styles.tellAboutUsTitle}>
                <div className={styles.tellAboutUsTitleButton}>
                    <h2>З нами<br /> співпрацюють</h2>
                    <button className={styles.submitButton}>
                        Залишити відгук
                        <img src="/images/arrow_top_right.svg" alt="" />
                    </button>
                </div>
                <p>Клієнти довіряють нам свою рекламу із США, Австралії та Європи.</p>
            </div>
            <div ref={containerRef} className={styles.workWithUsContainer}>
                <ul className={styles.workWithUsList} ref={listRef}>
                    <li className={styles.workWithUsEl}>
                        <img src="/images/WorkWithUs/1.png" alt="" />
                    </li>
                    <li className={styles.workWithUsEl}>
                        <img src="/images/WorkWithUs/2.png" alt="" />
                    </li>
                    <li className={styles.workWithUsEl}>
                        <img src="/images/WorkWithUs/3.png" alt="" />
                    </li>
                    <li className={styles.workWithUsEl}>
                        <img src="/images/WorkWithUs/4.png" alt="" />
                    </li>
                    <li className={styles.workWithUsEl}>
                        <img src="/images/WorkWithUs/5.png" alt="" />
                    </li>
                    <li className={styles.workWithUsEl}>
                        <img src="/images/WorkWithUs/6.png" alt="" />
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default WorkWithUs;