'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
import styles from './ContactContent.module.css';
import WorldMap from '../WorldMap/WorldMap';

type Props = {
  dictionary: any;
};


const ContactContent: React.FC<Props> = ({ dictionary }) => {
    return (
        <div className={styles.ContactContentWrapper}>
            <div className={styles.container}>
                <div className={styles.mainContent}>
                    <div className={styles.heroSectionLeft}>
                        <h1>{ dictionary.h1 }</h1>
                        <p>{ dictionary.para }</p>
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