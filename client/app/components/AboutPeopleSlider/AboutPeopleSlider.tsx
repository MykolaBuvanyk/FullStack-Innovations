'use client'

import styles from './AboutPeopleSlider.module.css';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Імпортуємо стилі Swiper
import 'swiper/css';
import 'swiper/css/pagination';

// Зображення людей (замініть на ваші реальні шляхи)
import person1 from '../../../public/images/first-person.png';
import person2 from '../../../public/images/second-person.png';
import person3 from '../../../public/images/third-person.png';
import person4 from '../../../public/images/fourth-person.png';
import person5 from '../../../public/images/fifth-person.png';

const people = [
  { name: 'Діана Кравець', position: 'Team manager', image: person1 },
  { name: 'Дарья Клименко', position: 'Sales Manager', image: person2 },
  { name: 'Bладислав Кириленко', position: 'Senior HR Generalist', image: person3 },
  { name: 'Аліна Маренюк', position: 'Project manager', image: person4 },
    { name: 'Кирилл Павленко', position: 'Business Analyst', image: person5 },
];

const AboutPeopleSlider = () => {
  return (
    <section className={styles.aboutPeopleSlider}>
      <div className={styles.aboutPeopleSliderTitle}>
        <h2>Обличчя компанії Fullstack innovations</h2>
      </div>

      <div className={styles.sliderContainer}>
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={4}
          pagination={{
            clickable: true,
            el: `.${styles.swiperPagination}`, // Прив’язуємо пагінацію до кастомного елемента
          }}
          breakpoints={{
            1100: { slidesPerView: 4 },
            768: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          {people.map((person, index) => (
            <SwiperSlide key={index}>
              <div className={styles.personCard}>
                <div className={styles.personImage}>
                  <Image
                    src={person.image}
                    alt={person.name}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
                <h3>{person.name}</h3>
                <p>{person.position}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Додаємо елемент для пагінації */}
        <div className={styles.swiperPagination}></div>
      </div>
    </section>
  );
};

export default AboutPeopleSlider;