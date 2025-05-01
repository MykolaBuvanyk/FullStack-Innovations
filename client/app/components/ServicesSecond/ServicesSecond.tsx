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

const ServicesSecond = () => {
  return (
    <section className={styles.servicesSecond}>
      <div className={styles.servicesSecondGrid}>
        <div className={styles.servicesSecondItem}>
          <div className={styles.servicesSecondContent}>
            <div className={styles.servicesSecondSharpNumber}>
              {GradientTextSvg('WEB')}
            </div>
            <h4>Розробка</h4>
            <p>Наші фахівці мають великий досвід у створенні сучасних веб-сайтів, стильних онлайн-магазинів та інноваційних веб-сервісів.</p>
          </div>
        </div>
        <div className={styles.servicesSecondItem}>
          <div className={styles.servicesSecondContent}>
            <div className={styles.servicesSecondSharpNumber}>
              {GradientTextSvg('SEO')}
            </div>
            <h4>Пошукове просування</h4>
            <p>Наші експерти ефективно рекламують сайти в Google. Довірте нам свій бренд, і ми гарантуємо успіх вашого онлайн просування.</p>
          </div>
        </div>
        <div className={styles.servicesSecondItem}>
          <div className={styles.servicesSecondContent}>
            <div className={styles.servicesSecondSharpNumber}>
              {GradientTextSvg('PPC')}
            </div>
            <h4>Контекстна реклама</h4>
            <p>Високопозиційна реклама в Google пошуку для вражаючого успіху вашого бренду! Збільшуйте свою видимість разом з нами.</p>
          </div>
        </div>
        <div className={styles.servicesSecondItem}>
          <div className={styles.servicesSecondContent}>
            <div className={styles.servicesSecondSharpNumber}>
              {GradientTextSvg('BRANDING')}
            </div>
            <h4>Брендинг і дизайн</h4>
            <p>Візуальний досвід народжується в руках наших фахівців, які об'єднують креативність та високу експертну майстерність в процесі дизайну.</p>
          </div>
        </div>
        <div className={styles.servicesSecondItem}>
          <div className={styles.servicesSecondContent}>
            <div className={styles.servicesSecondSharpNumber}>
              {GradientTextSvg('SUPPORT')}
            </div>
            <h4>Підтримка сайтів</h4>
            <p>Забезпечуємо технічну підтримку для надійності та оптимальної продуктивності вашого ресурсу. Ваш успіх - це наша мета.</p>
          </div>
        </div>
        <div className={styles.servicesSecondItem}>
          <div className={styles.servicesSecondContent}>
            <div className={styles.servicesSecondSharpNumber}>
              {GradientTextSvg('SMM')}
            </div>
            <h4>Просування в соцмережах</h4>
            <p>Наша команда має великий досвід у привертанні уваги до відповідного бренду або продукту через різноманітні соціальні платформи.</p>
          </div>
        </div>
        <div className={styles.servicesSecondItem}>
          <div className={styles.servicesSecondContent}>
            <div className={styles.servicesSecondSharpNumber}>
              {GradientTextSvg('Design')}
            </div>
            <h4>2D дизайн</h4>
            <p>Візуальний досвід народжується в руках наших фахівців, які об'єднують креативність та високу експертну майстерність в процесі дизайну.</p>
          </div>
        </div>
        <div className={styles.servicesSecondItem}>
          <div className={styles.servicesSecondContent}>
            <div className={styles.servicesSecondSharpNumber}>
              {GradientTextSvg('Modeling')}
            </div>
            <h4>3D моделювання</h4>
            <p>Забезпечуємо технічну підтримку для надійності та оптимальної продуктивності вашого ресурсу. Ваш успіх - це наша мета.</p>
          </div>
        </div>
        <div className={styles.servicesSecondItem}>
          <div className={styles.servicesSecondContent}>
            <div className={styles.servicesSecondSharpNumber}>
              {GradientTextSvg('App')}
            </div>
            <h4>Мобільні застосунки</h4>
            <p>Наша команда має великий досвід у привертанні уваги до відповідного бренду або продукту через різноманітні соціальні платформи.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSecond;