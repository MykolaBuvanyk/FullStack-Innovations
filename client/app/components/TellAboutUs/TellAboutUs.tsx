// import styles from './TellAboutUs.module.css';
// import Image from 'next/image';


// const TellAboutUs = () => {
//     return (
//         <section className={styles.tellAboutUs}>
//             <div className={styles.tellAboutUsTitle}>
//                 <h2>Що кажуть<br />клієнти про нас</h2>
//                 <p>
//                     Ми розробляємо, створюємо та супроводжуємо it-продукти з початку 2012 року. Ми можемо скористатися послугами нового циклу - від планування та ідей до запуску продукту.
//                 </p>
//             </div>
//             <div className={styles.tellAboutUsSlider}>
//                 <div className={styles.tellAboutUsSliderItem}>
//                     <div className={styles.tellAboutUsSliderItemFirst}>
//                         <div className={styles.ItemLogo}>
//                             <img src="/images/logo.png" alt="" />
//                         </div>
//                         <div className={styles.ItemPoint}>
//                             <p>Оцінка:</p>
//                             <div className={styles.ItemPointStar}>
//                                 <div className={styles.ItemPointStarSolid}>
//                                     <i className="fa-solid fa-star"></i>
//                                 </div>
//                                 <div className={styles.ItemPointStarRegular}>
//                                     <i className="fa-regular fa-star"></i>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className={styles.tellAboutUsSliderItemSecond}>
//                         <p>With Codeks support, the client's website was functioning perfectly, and customers could easily place orders on the platform. Codeks effectively and promptly corrected the mistakes of previous developers. The service provider's professionalism and client-oriented approach were exemplary.</p>
//                     </div>
//                     <div className={styles.tellAboutUsSliderItemThird}>
//                         <div className={styles.ItemPersonName}>
//                             <h4>Діана Кравець</h4>
//                             <p>CEO</p>
//                         </div>
//                         <div className={styles.ItemDate}>
//                             <p>15.08.2023</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };
// export default TellAboutUs;
'use client';

import styles from './TellAboutUs.module.css';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const reviews = [
    {
        logo: '/images/logo.png',
        rating: 4,
        text: 'With Codeks support, the client\'s website was functioning perfectly, and customers could easily place orders on the platform. Codeks effectively and promptly corrected the mistakes of previous developers. The service provider\'s professionalism and client-oriented approach were exemplary.',
        name: 'Діана Кравець',
        position: 'CEO',
        date: '15.08.2023',
    },
    {
        logo: '/images/logo.png',
        rating: 5,
        text: 'Codeks delivered an outstanding product that exceeded our expectations. Their attention to detail and commitment to quality made the entire process smooth and efficient. We highly recommend their services!',
        name: 'Олег Павленко',
        position: 'CTO',
        date: '20.09.2023',
    },
    {
        logo: '/images/logo.png',
        rating: 3,
        text: 'Working with Codeks was a game-changer for our business. They provided innovative solutions and excellent support throughout the project. We look forward to collaborating with them again!',
        name: 'Аліна Мельник',
        position: 'Project Manager',
        date: '10.10.2023',
    },
    {
        logo: '/images/logo.png',
        rating: 3,
        text: 'Working with Codeks was a game-changer for our business. They provided innovative solutions and excellent support throughout the project. We look forward to collaborating with them again!',
        name: 'Аліна Мельник',
        position: 'Project Manager',
        date: '10.10.2023',
    },
];

const TellAboutUs = () => {
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
                    <h2>
                        Що кажуть<br />клієнти про нас
                    </h2>
                    <button className={styles.submitButton}>Залишити відгук<img src="/images/arrow_top_right.svg" alt="" /></button>
                </div>

                <p>
                    Ми розробляємо, створюємо та супроводжуємо it-продукти з початку 2012 року. Ми можемо скористатися послугами нового циклу - від планування та ідей до запуску продукту.
                </p>
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
                                        {renderStars(review.rating)}
                                    </div>
                                </div>
                                <div className={styles.tellAboutUsSliderItemSecond}>
                                    <p>{review.text}</p>
                                </div>
                                <div className={styles.tellAboutUsSliderItemThird}>
                                    <div className={styles.ItemPersonName}>
                                        <h4>{review.name}</h4>
                                        <p>{review.position}</p>
                                    </div>
                                    <div className={styles.ItemDate}>
                                        <p>{review.date}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className={styles.swiperPagination}></div>
            </div>
        </section>
    );
};

export default TellAboutUs;