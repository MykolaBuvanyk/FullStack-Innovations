'use client';

import styles from './WorldMap.module.css';
import { useState } from 'react';

const countries = [
  { name: 'USA', x: 170, y: 130 },
  { name: 'Canada', x: 130, y: 80 },
  { name: 'Brazil', x: 220, y: 250 },
  { name: 'UK', x: 330, y: 115 },
  { name: 'Germany', x: 350, y: 125 },
  { name: 'France', x: 330, y: 135 },
  { name: 'Italy', x: 350, y: 145 },
  { name: 'Spain', x: 320, y: 145 },
  { name: 'South Africa', x: 375, y: 280 },
  { name: 'Australia', x: 590, y: 280 },
  { name: 'China', x: 550, y: 160 },
  { name: 'Japan', x: 600, y: 150 },
  { name: 'India', x: 480, y: 190 },
  { name : 'Poland', x: 360, y: 120},
  { name : 'Ukraine', x: 370, y: 135}
];

const WorldMap = () => {
  const [hoveredCountry, setHoveredCountry] = useState(null);

  return (
    <section className={styles.worldMap}>
      <div className={styles.mapContainer}>
        {/* Зображення мапи */}
        <div className={styles.mapBackground}>

          {/* Точки для країн */}
          {countries.map((country, index) => {
            // Переводимо координати в пікселях у відсотки
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
        </div>
      </div>
    </section>
  );
};

export default WorldMap;