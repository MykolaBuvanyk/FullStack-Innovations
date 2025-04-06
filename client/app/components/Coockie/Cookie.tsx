'use client';

import { useEffect, useState } from 'react';
import styles from './Cookie.module.css';

type Props = {
  dictionary: any;
};

const Cookie: React.FC<Props> = ({ dictionary }) => {

  const [showCookie, setShowCookie] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookie_accepted');
    if (!accepted) {
      setShowCookie(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_accepted', 'true');
    setShowCookie(false);
  };

  if (!showCookie) return null;

  return (
    <div className={styles.cookieWrapper}>
      <div className={styles.cookieImg}>
        <img src="/images/Cookie.svg" alt="Cookie" />
      </div>
      <div className={styles.cookieText}>
        <p>
          {dictionary.para}
          <a href="#">{dictionary.ref}</a>
        </p>
      </div>
      <div className={styles.cookieButton}>
        <button type="button" onClick={handleAccept}>
          {dictionary.button}
        </button>
      </div>
    </div>
  );
};

export default Cookie;
