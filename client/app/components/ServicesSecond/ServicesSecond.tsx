import styles from './ServicesSecond.module.css';
import Image from 'next/image';

// Лічильник для унікальних ідентифікаторів градієнта
let gradientCounter = 0;

// Функція для створення SVG з текстом
const GradientTextSvg = (text: string) => {
  const gradientId = `gradient${++gradientCounter}`;
  return (
    <svg style={{ width: '100%' }} height="50">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#E81EDD', stopOpacity: 1 }} />
          <stop offset="68.37%" style={{ stopColor: 'rgba(232, 30, 221, 0)', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <text
        x="0%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="left"
        fontSize="50px"
        fontFamily="Arial Black"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="1"
      >
        {text}
      </text>
    </svg>
  );
};

type Props = {
  dictionary: any;
};

const ServicesSecond: React.FC<Props> = ({ dictionary }) => {
  return (
    <section className={styles.servicesSecond}>
      <div className={styles.servicesSecondGrid}>
        {dictionary.items.map((item: { svgText: string; subtitle: string; description: string }, index: number) => (
          <div key={index} className={styles.servicesSecondItem}>
            <div className={styles.servicesSecondContent}>
              <div className={styles.servicesSecondSharpNumber}>
                {GradientTextSvg(item.svgText)}
              </div>
              <h4>{item.subtitle}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSecond;