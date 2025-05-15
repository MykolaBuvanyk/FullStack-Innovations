'use client';

import styles from './TellAboutUs.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import ModalFeedback from '../ModalFeedback/ModalFeedback';
import { useState, useEffect, useRef } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';

type Props = {
  dictionary: any;
};

const reviews = [
  {
    logo: '/images/logo.svg',
  },
  {
    logo: '/images/logo.svg',
  },
  {
    logo: '/images/logo.svg',
  },
  {
    logo: '/images/logo.svg',
  },
];

const TellAboutUs: React.FC<Props> = ({ dictionary }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const swiperRef = useRef<any>(null);
  const [maxSlideHeight, setMaxSlideHeight] = useState('auto');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const updateSlideHeight = () => {
      if (swiperRef.current) {
        const slides = Array.from(swiperRef.current.swiper.slides) as HTMLElement[];
        let maxHeight = 0;

        // Обчислюємо максимальну висоту всіх reviewCard
        slides.forEach((slide) => {
          const reviewCard = slide.querySelector(`.${styles.reviewCard}`) as HTMLElement;
          if (reviewCard) {
            reviewCard.style.height = 'auto'; // Скидаємо висоту для вимірювання
            const height = reviewCard.getBoundingClientRect().height;
            if (height > maxHeight) {
              maxHeight = height;
            }
          }
        });

        // Встановлюємо максимальну висоту для всіх reviewCard
        setMaxSlideHeight(`${maxHeight}px`);

        // Оновлюємо Swiper
        swiperRef.current.swiper.update();
        swiperRef.current.swiper.updateSize();
        swiperRef.current.swiper.updateSlides();
      }
    };

    // Викликаємо після рендерингу та при зміні словника
    updateSlideHeight();

    // Оновлюємо при зміні розміру вікна
    window.addEventListener('resize', updateSlideHeight);
    return () => window.removeEventListener('resize', updateSlideHeight);
  }, [dictionary]);

  const renderStars = (rating: number) => {
    const fullStars = rating;
    const emptyStars = 5 - fullStars;
    return (
      <div className={styles.ItemPointStar}>
        {[...Array(fullStars)].map((_, index) => (
          <div key={`full-${index}`} className={styles.ItemPointStarSolid}>
            <i className="fa-solid fa-star"></i>
          </div>
        ))}
        {[...Array(emptyStars)].map((_, index) => (
          <div key={`empty-${index}`} className={styles.ItemPointStarRegular}>
            <i className="fa-regular fa-star"></i>
          </div>
        ))}
      </div>
    );
  };

  const renderReviewCard = (review: any, index: number) => (
    <div className={styles.reviewCard} style={{ height: maxSlideHeight }}>
      <div className={styles.reviewCardHeader}>
        <div className={styles.ItemLogo}>
          <img src={review.logo} alt="Company Logo" />
        </div>
        <div className={styles.ItemPoint}>
          <p>Оцінка:</p>
          {renderStars(dictionary.reviews[index].rating)}
        </div>
      </div>
      <div className={styles.reviewCardContent}>
        <p>{dictionary.reviews[index].text}</p>
      </div>
      <div className={styles.reviewCardFooter}>
        <div className={styles.ItemPersonName}>
          <h4>{dictionary.reviews[index].name}</h4>
          <p>{dictionary.reviews[index].position}</p>
        </div>
        <div className={styles.ItemDate}>
          <p>{dictionary.reviews[index].date}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className={styles.tellAboutUs}>
      <div className={styles.container}>
        <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: dictionary.title }}></h2>
        <div className={styles.btnWrapper}>
          <button className={styles.btn} onClick={openModal}>
            {dictionary.buttonText}
            <img src="/images/arrow_top_right.svg" alt="" />
          </button>
        </div>
        <p className={styles.description}>{dictionary.description}</p>
        <div className={styles.reviewsContainer}>
          <Swiper
            ref={swiperRef}
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: `.${styles.swiperPagination}`,
            }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 10 },
              650: { slidesPerView: 1.5, spaceBetween: 15 },
              1100: { slidesPerView: 3 },
            }}
            observer={true}
            observeParents={true}
            className={styles.swiper}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                {renderReviewCard(review, index)}
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.swiperPagination}></div>
        </div>
      </div>
      <ModalFeedback isOpen={isModalOpen} closeModal={closeModal} dictionary={dictionary.modalFeedback} />
    </section>
  );
};

export default TellAboutUs;