'use client';

import styles from './TellAboutUs.module.css';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import ModalFeedback from '../ModalFeedback/ModalFeedback';
import { useState } from 'react';

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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
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

  return (
    <section className={styles.tellAboutUs}>
      <div className={styles.tellAboutUsTitle}>
        <div className={styles.tellAboutUsTitleButton}>
          <h2 dangerouslySetInnerHTML={{ __html: dictionary.title }}></h2>
          <button className={styles.submitButton} onClick={openModal}>
            {dictionary.buttonText}
            <img src="/images/arrow_top_right.svg" alt="" />
          </button>
        </div>
        <p>{dictionary.description}</p>
      </div>
      <div className={styles.tellAboutUsSlider}>
        <Swiper
          modules={[Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: `.${styles.swiperPagination}`,
          }}
          breakpoints={{
            1100: { slidesPerView: 3 },
            768: { slidesPerView: 3 },
            0: { slidesPerView: 1 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className={styles.tellAboutUsSliderItem}>
                <div className={styles.tellAboutUsSliderItemFirst}>
                  <div className={styles.ItemLogo}>
                    <img src={review.logo} alt="Company Logo" />
                  </div>
                  <div className={styles.ItemPoint}>
                    <p>Оцінка:</p>
                    {renderStars(dictionary.reviews[index].rating)}
                  </div>
                </div>
                <div className={styles.tellAboutUsSliderItemSecond}>
                  <p>{dictionary.reviews[index].text}</p>
                </div>
                <div className={styles.tellAboutUsSliderItemThird}>
                  <div className={styles.ItemPersonName}>
                    <h4>{dictionary.reviews[index].name}</h4>
                    <p>{dictionary.reviews[index].position}</p>
                  </div>
                  <div className={styles.ItemDate}>
                    <p>{dictionary.reviews[index].date}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.swiperPagination}></div>
      </div>
      <ModalFeedback isOpen={isModalOpen} closeModal={closeModal} dictionary={dictionary.modalFeedback}/>
    </section>
  );
};

export default TellAboutUs;