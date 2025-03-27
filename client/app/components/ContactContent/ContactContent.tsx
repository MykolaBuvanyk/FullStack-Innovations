'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
import styles from './ContactContent.module.css';
import WorldMap from '../WorldMap/WorldMap';




const ContactContent = () => {
return (
<div className={styles.ContactContentWrapper}>
    <div className={styles.container}>
        <p className={styles.navPath}>Головна - Контакти</p>
        <div className={styles.mainContent}>
            <div className={styles.heroSectionLeft}>
                <h1>Contact Us</h1>
                <p>Founded in July 2007, SEVEN is a full-cycle software development company that has served over 180 clients and remains a 360º technological partner for our clients from the USA, Canada, the EU, UAE, Singapore, Australia, and others</p>
            </div>
            <div className={styles.heroSectionRight}>
                <WorldMap/>
            </div>
        </div>
    </div>
</div>
)
};

export default ContactContent;