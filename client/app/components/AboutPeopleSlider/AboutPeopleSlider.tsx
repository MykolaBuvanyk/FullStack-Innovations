'use client'

import styles from './AboutPeopleSlider.module.css';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Імпортуємо стилі Swiper
import 'swiper/css';
import 'swiper/css/pagination';

import person1 from '../../../public/images/first-person.png';
import person2 from '../../../public/images/second-person.png';
import person3 from '../../../public/images/third-person.png';
import person4 from '../../../public/images/fourth-person.png';
import person5 from '../../../public/images/fifth-person.png';

type Props = {
  dictionary: any;
};

const AboutPeopleSlider: React.FC<Props> = ({ dictionary }) => {
  return (
    <section className={styles.aboutPeopleSlider}>
      <div className={styles.aboutPeopleSliderTitle}>
        <h2>{dictionary.title}</h2>
      </div>

      <div className={styles.sliderContainer}>
        <Swiper
          modules={[Pagination]}
          spaceBetween={0}
          slidesPerView={4}
          pagination={{
            clickable: true,
            el: `.${styles.swiperPagination}`, 
          }}
          breakpoints={{
            1100: {
              slidesPerView: 4,
              spaceBetween: 0
             },
            768: {
              slidesPerView: 2.45,
              spaceBetween: 10
             },
            0: {
              slidesPerView: 1.4,
              spaceBetween: 10
             },
          }}
        >
          {dictionary.people.map((person: { name: string; position: string; image: any }, index: number) => (
            <SwiperSlide className={styles.swiperSlide} key={index}>
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
        <div className={styles.swiperPagination}></div>
      </div>
    </section>
  );
};

export default AboutPeopleSlider;