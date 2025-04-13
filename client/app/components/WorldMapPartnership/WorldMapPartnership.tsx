'use client';

import styles from './WorldMapPartnership.module.css';
import { useState } from 'react';

type Props = {
  dictionary: any;
};

const countries = [
  { name: 'USA', x: 170, y: 130 },
  { name: 'Canada', x: 130, y: 80 },
  { name: 'Brazil', x: 220, y: 250 },
  { name: 'UK', x: 330, y: 115 },
  { name: 'Poland', x: 360, y: 120 },
  { name: 'Germany', x: 350, y: 125 },
  { name: 'France', x: 330, y: 135 },
  { name: 'Spain', x: 320, y: 145 },
  { name: 'New Zealand', x: 660, y: 320 },
  { name: 'Australia', x: 590, y: 280 },
  { name: 'China', x: 550, y: 160 },
  { name: 'Japan', x: 600, y: 150 },
  { name: 'UAE', x: 430, y: 180 },
  { name: 'Ukraine', x: 370, y: 135 },
  { name: 'Italy', x: 350, y: 145 },
];

const WorldMapPartnership: React.FC<Props> = ({ dictionary }) => {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  return (
    <section className={styles.worldMap}>
      <h2 className={styles.worldMapTitle}>{dictionary.title}</h2>
      <div className={styles.mapContainer}>
        <div className={styles.mapBackground}>
          {countries.map((country, index) => {
            const leftPercent = (country.x / 705) * 100;
            const topPercent = (country.y / 352) * 100;

            return (
              <div
                key={index}
                className={styles.mapPoint}
                style={{
                  left: `${leftPercent}%`,
                  top: `${topPercent}%`,
                }}
                onMouseEnter={() => setHoveredCountry(country.name)}
                onMouseLeave={() => setHoveredCountry(null)}
              >
                {hoveredCountry === country.name && (
                  <div className={styles.tooltip}>{country.name}</div>
                )}
              </div>
            );
          })}
          <div className={styles.getOfferWrapper}>
            <a href="#" className={styles.getOffer}>
              <img src="/images/arrow_top_right.svg" alt="" />
              <p>{dictionary.getOffer}</p>
              <p>{dictionary.offer}</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldMapPartnership;