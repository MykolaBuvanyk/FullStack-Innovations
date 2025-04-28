import styles from './PartnershipBenefits.module.css';
import Image from 'next/image';

type Props = {
  dictionary: any;
};

const PartnershipBenefits: React.FC<Props> = ({ dictionary }) => {
  return (
    <section className={styles.partnershipBenefits}>
      <div className={styles.partnershipBenefitsTitle}>
        <h2>{dictionary.title}</h2>
        <p>{dictionary.para}</p>
      </div>
      <div className={styles.benefitsGrid}>
        <div className={styles.benefitItem}>
          <div className={styles.benefitIcon}>
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="17" cy="17" r="17" fill="#E81EDD" fillOpacity="0.3" />
              <g clipPath="url(#clip0_87_8277)">
                <circle cx="17.5" cy="17.5" r="6.5" fill="white" />
                <path
                  d="M17 7C11.4858 7 7 11.4858 7 17C7 22.5142 11.4858 27 17 27C22.5142 27 27 22.5142 27 17C27 11.4858 22.5142 7 17 7ZM22.1667 15.76L18.4783 19.3808C17.8258 20.0208 16.9858 20.34 16.145 20.34C15.3133 20.34 14.4817 20.0267 13.8317 19.3992L12.2492 17.8433C11.9208 17.5208 11.9167 16.9933 12.2392 16.665C12.5608 16.3358 13.09 16.3317 13.4175 16.655L14.995 18.2058C15.6417 18.8308 16.6625 18.8275 17.3125 18.1908L21 14.5708C21.3275 14.2475 21.8533 14.2533 22.1783 14.5817C22.5008 14.91 22.4958 15.4375 22.1667 15.76Z"
                  fill="#E81EDD"
                />
              </g>
              <defs>
                <clipPath id="clip0_87_8277">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(7 7)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className={styles.benefitContent}>
            <h3>{dictionary.benefits[0].title}</h3>
            <p>{dictionary.benefits[0].para}</p>
          </div>
        </div>
        <div className={styles.benefitItem}>
          <div className={styles.benefitIcon}>
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="17" cy="17" r="17" fill="#E81EDD" fillOpacity="0.3" />
              <g clipPath="url(#clip0_87_8277)">
                <circle cx="17.5" cy="17.5" r="6.5" fill="white" />
                <path
                  d="M17 7C11.4858 7 7 11.4858 7 17C7 22.5142 11.4858 27 17 27C22.5142 27 27 22.5142 27 17C27 11.4858 22.5142 7 17 7ZM22.1667 15.76L18.4783 19.3808C17.8258 20.0208 16.9858 20.34 16.145 20.34C15.3133 20.34 14.4817 20.0267 13.8317 19.3992L12.2492 17.8433C11.9208 17.5208 11.9167 16.9933 12.2392 16.665C12.5608 16.3358 13.09 16.3317 13.4175 16.655L14.995 18.2058C15.6417 18.8308 16.6625 18.8275 17.3125 18.1908L21 14.5708C21.3275 14.2475 21.8533 14.2533 22.1783 14.5817C22.5008 14.91 22.4958 15.4375 22.1667 15.76Z"
                  fill="#E81EDD"
                />
              </g>
              <defs>
                <clipPath id="clip0_87_8277">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(7 7)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className={styles.benefitContent}>
            <h3>{dictionary.benefits[1].title}</h3>
            <p>{dictionary.benefits[1].para}</p>
          </div>
        </div>
        <div className={styles.benefitItem}>
          <div className={styles.benefitIcon}>
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="17" cy="17" r="17" fill="#E81EDD" fillOpacity="0.3" />
              <g clipPath="url(#clip0_87_8277)">
                <circle cx="17.5" cy="17.5" r="6.5" fill="white" />
                <path
                  d="M17 7C11.4858 7 7 11.4858 7 17C7 22.5142 11.4858 27 17 27C22.5142 27 27 22.5142 27 17C27 11.4858 22.5142 7 17 7ZM22.1667 15.76L18.4783 19.3808C17.8258 20.0208 16.9858 20.34 16.145 20.34C15.3133 20.34 14.4817 20.0267 13.8317 19.3992L12.2492 17.8433C11.9208 17.5208 11.9167 16.9933 12.2392 16.665C12.5608 16.3358 13.09 16.3317 13.4175 16.655L14.995 18.2058C15.6417 18.8308 16.6625 18.8275 17.3125 18.1908L21 14.5708C21.3275 14.2475 21.8533 14.2533 22.1783 14.5817C22.5008 14.91 22.4958 15.4375 22.1667 15.76Z"
                  fill="#E81EDD"
                />
              </g>
              <defs>
                <clipPath id="clip0_87_8277">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(7 7)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className={styles.benefitContent}>
            <h3>{dictionary.benefits[2].title}</h3>
            <p>{dictionary.benefits[2].para}</p>
          </div>
        </div>
        <div className={styles.benefitItem}>
          <div className={styles.benefitIcon}>
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="17" cy="17" r="17" fill="#E81EDD" fillOpacity="0.3" />
              <g clipPath="url(#clip0_87_8277)">
                <circle cx="17.5" cy="17.5" r="6.5" fill="white" />
                <path
                  d="M17 7C11.4858 7 7 11.4858 7 17C7 22.5142 11.4858 27 17 27C22.5142 27 27 22.5142 27 17C27 11.4858 22.5142 7 17 7ZM22.1667 15.76L18.4783 19.3808C17.8258 20.0208 16.9858 20.34 16.145 20.34C15.3133 20.34 14.4817 20.0267 13.8317 19.3992L12.2492 17.8433C11.9208 17.5208 11.9167 16.9933 12.2392 16.665C12.5608 16.3358 13.09 16.3317 13.4175 16.655L14.995 18.2058C15.6417 18.8308 16.6625 18.8275 17.3125 18.1908L21 14.5708C21.3275 14.2475 21.8533 14.2533 22.1783 14.5817C22.5008 14.91 22.4958 15.4375 22.1667 15.76Z"
                  fill="#E81EDD"
                />
              </g>
              <defs>
                <clipPath id="clip0_87_8277">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(7 7)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className={styles.benefitContent}>
            <h3>{dictionary.benefits[3].title}</h3>
            <p>{dictionary.benefits[3].para}</p>
          </div>
        </div>
        <div className={styles.benefitItem}>
          <div className={styles.benefitIcon}>
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="17" cy="17" r="17" fill="#E81EDD" fillOpacity="0.3" />
              <g clipPath="url(#clip0_87_8277)">
                <circle cx="17.5" cy="17.5" r="6.5" fill="white" />
                <path
                  d="M17 7C11.4858 7 7 11.4858 7 17C7 22.5142 11.4858 27 17 27C22.5142 27 27 22.5142 27 17C27 11.4858 22.5142 7 17 7ZM22.1667 15.76L18.4783 19.3808C17.8258 20.0208 16.9858 20.34 16.145 20.34C15.3133 20.34 14.4817 20.0267 13.8317 19.3992L12.2492 17.8433C11.9208 17.5208 11.9167 16.9933 12.2392 16.665C12.5608 16.3358 13.09 16.3317 13.4175 16.655L14.995 18.2058C15.6417 18.8308 16.6625 18.8275 17.3125 18.1908L21 14.5708C21.3275 14.2475 21.8533 14.2533 22.1783 14.5817C22.5008 14.91 22.4958 15.4375 22.1667 15.76Z"
                  fill="#E81EDD"
                />
              </g>
              <defs>
                <clipPath id="clip0_87_8277">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(7 7)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className={styles.benefitContent}>
            <h3>{dictionary.benefits[4].title}</h3>
            <p>{dictionary.benefits[4].para}</p>
          </div>
        </div>
        <div className={styles.benefitItem}>
          <div className={styles.benefitIcon}>
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="17" cy="17" r="17" fill="#E81EDD" fillOpacity="0.3" />
              <g clipPath="url(#clip0_87_8277)">
                <circle cx="17.5" cy="17.5" r="6.5" fill="white" />
                <path
                  d="M17 7C11.4858 7 7 11.4858 7 17C7 22.5142 11.4858 27 17 27C22.5142 27 27 22.5142 27 17C27 11.4858 22.5142 7 17 7ZM22.1667 15.76L18.4783 19.3808C17.8258 20.0208 16.9858 20.34 16.145 20.34C15.3133 20.34 14.4817 20.0267 13.8317 19.3992L12.2492 17.8433C11.9208 17.5208 11.9167 16.9933 12.2392 16.665C12.5608 16.3358 13.09 16.3317 13.4175 16.655L14.995 18.2058C15.6417 18.8308 16.6625 18.8275 17.3125 18.1908L21 14.5708C21.3275 14.2475 21.8533 14.2533 22.1783 14.5817C22.5008 14.91 22.4958 15.4375 22.1667 15.76Z"
                  fill="#E81EDD"
                />
              </g>
              <defs>
                <clipPath id="clip0_87_8277">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(7 7)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className={styles.benefitContent}>
            <h3>{dictionary.benefits[5].title}</h3>
            <p>{dictionary.benefits[5].para}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PartnershipBenefits;