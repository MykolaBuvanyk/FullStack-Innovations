'use client';

import styles from './WorldMap.module.css';
import { useState } from 'react';

const countries = [
  { name: 'USA', x: 145, y: 146 },
  { name: 'Canada', x: 123, y: 108 },
  { name: 'Brazil', x: 208, y: 237 },
  { name: 'UK', x: 330, y: 135 },
  { name: 'Germany', x: 349, y: 128 },
  { name: 'France', x: 460, y: 160 },
  { name: 'Italy', x: 490, y: 180 },
  { name: 'Spain', x: 450, y: 200 },
  { name: 'South Africa', x: 500, y: 400 },
  { name: 'Australia', x: 800, y: 450 },
  { name: 'China', x: 700, y: 200 },
  { name: 'Japan', x: 750, y: 180 },
  { name: 'India', x: 650, y: 250 },
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