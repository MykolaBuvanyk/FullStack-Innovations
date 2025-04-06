"use client";

import styles from "./Footer.module.css";

type Props = {
  dictionary: any;
};

const languages = [
  { code: "uk", name: "Українська", flag: "🇺🇦" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "hi", name: "हिंदी", flag: "🇮🇳" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
  { code: "bg", name: "Български", flag: "🇧🇬" },
  { code: "el", name: "Ελληνικά", flag: "🇬🇷" },
  { code: "pl", name: "Polski", flag: "🇵🇱" },
  { code: "cs", name: "Čeština", flag: "🇨🇿" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "sv", name: "Svenska", flag: "🇸🇪" },
  { code: "nl", name: "Nederlands", flag: "🇳🇱" },
  { code: "lb", name: "Lëtzebuergesch", flag: "🇱🇺" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "ga", name: "Gaeilge", flag: "🇮🇪" },
  { code: "no", name: "Norsk", flag: "🇳🇴" },
];

const Footer: React.FC<Props> = ({ dictionary }) => {
  return (
    <section className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerLogoAndSocials}>
          <div className={styles.footerLogo}>
            <a href="/">
              <img src="/images/logo.svg" alt="Logo" />
            </a>
          </div>
          <div className={styles.footerText}>
            <p>© 2017–2025 «FullStack-Innovations»</p>
          </div>
          <div className={styles.footerSocials}>
            <ul className={styles.socialsList}>
              <li className={styles.socialsItem}>
                <a href="">
                  <svg
                    width="27"
                    height="18"
                    viewBox="0 0 27 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.977 8.19916C11.5307 7.92065 11.9493 7.61045 12.2361 7.27524C12.7465 6.67152 12.9983 5.87101 12.9983 4.8787C12.9983 3.91309 12.7465 3.08756 12.2428 2.39545C11.4023 1.26807 9.97971 0.69103 7.96842 0.661011H0V16.9264H7.42974C8.26695 16.9264 9.04244 16.8547 9.75957 16.7079C10.4767 16.5595 11.0971 16.2877 11.6224 15.8907C12.0894 15.5455 12.4796 15.1169 12.7898 14.6116C13.2801 13.8478 13.5253 12.9822 13.5253 12.0183C13.5253 11.0843 13.3102 10.2888 12.8832 9.63507C12.4513 8.98132 11.8175 8.50269 10.977 8.19916ZM3.2871 3.48615H6.87606C7.6649 3.48615 8.31531 3.5712 8.82564 3.73964C9.41601 3.9848 9.7112 4.48345 9.7112 5.24394C9.7112 5.92604 9.48606 6.40301 9.04077 6.67152C8.59215 6.94002 8.01011 7.07511 7.29633 7.07511H3.2871V3.48615ZM8.96239 13.8177C8.56547 14.0095 8.00678 14.1046 7.29132 14.1046H3.2871V9.76683H7.34636C8.05348 9.77183 8.60383 9.86522 8.99741 10.0403C9.69786 10.3572 10.0464 10.9376 10.0464 11.7864C10.0464 12.7871 9.68619 13.4609 8.96239 13.8177Z"
                      fill="url(#shared-gradient)"
                    />
                    <path
                      d="M24.1174 1.42001H17.0513V3.44554H24.1174V1.42001Z"
                      fill="url(#shared-gradient)"
                    />
                    <path
                      d="M26.5724 9.41051C26.4257 8.46824 26.1021 7.63938 25.5985 6.92392C25.0464 6.11341 24.346 5.51969 23.4938 5.14445C22.6449 4.76755 21.6893 4.57909 20.6253 4.58076C18.8391 4.58076 17.3882 5.13945 16.2658 6.24849C15.1468 7.36087 14.5864 8.96022 14.5864 11.0449C14.5864 13.268 15.2052 14.874 16.4493 15.8596C17.6884 16.8469 19.1193 17.3389 20.7437 17.3389C22.7099 17.3389 24.2393 16.7535 25.3316 15.5861C26.0304 14.849 26.4257 14.1235 26.5124 13.4114H23.257C23.0685 13.7633 22.85 14.0385 22.5999 14.2386C22.1463 14.6055 21.5559 14.7889 20.8321 14.7889C20.1433 14.7889 19.5596 14.6372 19.0726 14.3353C18.2688 13.8517 17.8485 13.0045 17.7951 11.7987H26.6791C26.6925 10.7597 26.6591 9.96086 26.5724 9.41051ZM17.8752 9.72238C17.9919 8.94021 18.2754 8.31981 18.7257 7.86119C19.176 7.40423 19.8131 7.17408 20.6286 7.17242C21.3808 7.17242 22.0095 7.38755 22.5215 7.81949C23.0268 8.25477 23.312 8.88684 23.3704 9.72238H17.8752Z"
                      fill="url(#shared-gradient)"
                    />
                    <defs>
                      <linearGradient
                        id="shared-gradient"
                        x1="6.76265"
                        y1="0.661011"
                        x2="6.76265"
                        y2="16.9264"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#C300B9" />
                        <stop offset="1" stopColor="#5D0058" />
                      </linearGradient>
                      <linearGradient
                        id="shared-gradient"
                        x1="20.5844"
                        y1="1.42001"
                        x2="20.5844"
                        y2="3.44554"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#C300B9" />
                        <stop offset="1" stopColor="#5D0058" />
                      </linearGradient>
                      <linearGradient
                        id="shared-gradient"
                        x1="20.6342"
                        y1="4.58075"
                        x2="20.6342"
                        y2="17.3389"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#C300B9" />
                        <stop offset="1" stopColor="#5D0058" />
                      </linearGradient>
                    </defs>
                  </svg>
                </a>
              </li>
              <li className={styles.socialsItem}>
                <a href="">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_70_325)">
                      <path
                        d="M5.01264 6.81152H0.917969V19.1079H5.01264V6.81152Z"
                        fill="url(#shared-gradient)"
                      />
                      <path
                        d="M18.451 7.93459C17.5909 6.99567 16.4532 6.52612 15.0388 6.52612C14.5177 6.52612 14.044 6.59023 13.6179 6.71852C13.1919 6.84673 12.8322 7.02661 12.5384 7.25826C12.2448 7.4899 12.011 7.70495 11.8374 7.90339C11.6724 8.09188 11.511 8.31144 11.3535 8.55981V6.81131H7.271L7.28351 7.40698C7.2919 7.80417 7.29603 9.02836 7.29603 11.0797C7.29603 13.1313 7.28777 15.8072 7.27117 19.1079H11.3535V12.246C11.3535 11.8242 11.3987 11.4893 11.4899 11.2409C11.6637 10.8188 11.9261 10.4654 12.2779 10.1802C12.6296 9.89453 13.0658 9.75185 13.5871 9.75185C14.2983 9.75185 14.8217 9.99792 15.1568 10.4901C15.4917 10.9823 15.6592 11.6627 15.6592 12.5313V19.1075H19.7415V12.0601C19.7412 10.2483 19.3114 8.87321 18.451 7.93459Z"
                        fill="url(#shared-gradient)"
                      />
                      <path
                        d="M2.99001 0.892303C2.30351 0.892303 1.74726 1.09305 1.32113 1.49414C0.895042 1.89533 0.682129 2.40182 0.682129 3.01409C0.682129 3.6178 0.888914 4.12255 1.30253 4.52778C1.71601 4.93304 2.26205 5.13579 2.94034 5.13579H2.96515C3.66009 5.13579 4.2206 4.93322 4.64655 4.52778C5.07251 4.12255 5.28134 3.61797 5.27312 3.01409C5.26487 2.40186 5.05378 1.89533 4.6403 1.49414C4.22686 1.09287 3.67656 0.892303 2.99001 0.892303Z"
                        fill="url(#shared-gradient)"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="shared-gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#C300B9" />
                        <stop offset="100%" stopColor="#5D0058" />
                      </linearGradient>
                      <clipPath id="clip0_70_325">
                        <rect
                          width="19.059"
                          height="19.059"
                          fill="white"
                          transform="translate(0.682129 0.47052)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </li>
              <li className={styles.socialsItem}>
                <a href="">
                  <svg
                    width="27"
                    height="20"
                    viewBox="0 0 27 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.7714 2.14425C17.985 2.14425 15.8821 4.03395 15.041 7.00348C13.7266 4.89781 12.6752 2.52219 12.0969 0.47052H9.15283V8.40725C9.15283 9.973 7.89109 11.2688 6.36648 11.2688C4.84188 11.2688 3.58013 9.973 3.58013 8.40725V0.524511H0.741211V8.46124C0.741211 11.7547 3.31727 14.4003 6.47163 14.4003C9.62598 14.4003 12.202 11.7547 12.202 8.46124V7.11146C12.7803 8.29927 13.5164 9.59506 14.3049 10.7289L12.4649 19.5295H15.4615L16.7233 13.1045C17.8799 13.8604 19.1942 14.2923 20.7714 14.2923C23.9783 14.2923 26.6069 11.5927 26.6069 8.1373C26.6069 4.84382 23.9783 2.14425 20.7714 2.14425ZM20.7714 11.2688C19.6148 11.2688 18.4056 10.7289 17.4593 9.91901L17.7747 8.7312V8.67721C17.985 7.38142 18.6685 5.22176 20.824 5.22176C22.4537 5.22176 23.768 6.57155 23.768 8.24528C23.7154 9.91901 22.296 11.2688 20.7714 11.2688Z"
                      fill="url(#shared-gradient)"
                    />
                    <defs>
                      <linearGradient
                        id="shared-gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#C300B9" />
                        <stop offset="100%" stopColor="#5D0058" />
                      </linearGradient>
                    </defs>
                  </svg>
                </a>
              </li>
              <li className={styles.socialsItem}>
                <a href="">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.3461 9.49784C12.1529 9.05115 11.9515 8.6052 11.7367 8.16409C13.5707 7.36971 15.0448 6.29095 16.143 4.92295C17.2143 6.18895 17.8869 7.79668 17.986 9.55628C15.9412 9.22163 14.0606 9.20302 12.3461 9.49784ZM14.5058 16.5433C14.1582 14.6754 13.6478 12.8488 12.9815 11.0669C14.4708 10.8562 16.1106 10.9109 17.9037 11.2228C17.5568 13.4351 16.2941 15.3462 14.5058 16.5433ZM5.30541 16.2024C6.86884 13.7496 8.8652 12.1531 11.3388 11.416C12.0747 13.3383 12.6167 15.3149 12.9614 17.3399C10.3847 18.3357 7.48938 17.908 5.30541 16.2024ZM2.27496 9.79713C5.33073 9.79266 7.96697 9.44163 10.1759 8.74665C10.3609 9.12373 10.5381 9.50268 10.7074 9.88423C8.02467 10.7225 5.81278 12.4419 4.0878 15.0302C2.84599 13.5397 2.22769 11.7321 2.27496 9.79713ZM6.58482 2.98392C7.64237 4.36756 8.57857 5.794 9.39341 7.25767C7.46332 7.82572 5.16024 8.11756 2.49682 8.1358C3.047 5.88446 4.56278 4.01206 6.58482 2.98392ZM14.9354 3.77382C13.9787 5.00745 12.658 5.9831 10.9751 6.69558C10.1688 5.21814 9.24712 3.7768 8.20595 2.37791C10.563 1.77673 13.0012 2.28 14.9354 3.77382ZM10.136 0.47052C4.87324 0.47052 0.606934 4.7372 0.606934 10C0.606934 15.2628 4.87324 19.5295 10.136 19.5295C15.3996 19.5295 19.6659 15.2628 19.6659 10C19.6659 4.7372 15.3992 0.47052 10.136 0.47052Z"
                      fill="url(#shared-gradient)"
                    />
                    <defs>
                      <linearGradient
                        id="shared-gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#C300B9" />
                        <stop offset="100%" stopColor="#5D0058" />
                      </linearGradient>
                    </defs>
                  </svg>
                </a>
              </li>
              <li className={styles.socialsItem}>
                <a href="">
                  <svg
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.8397 13.9781C12.8767 14.8438 11.6052 15.3236 10.2099 15.3236C7.134 15.3236 4.87517 13.0648 4.87517 9.96351C4.87517 6.8622 7.06213 4.69847 10.2099 4.69847C11.5809 4.69847 12.8767 5.1551 13.864 6.02081L14.5351 6.59796L17.517 3.61716L16.7707 2.94383C15.0161 1.35945 12.6865 0.47052 10.2088 0.47052C4.68059 0.47052 0.666016 4.45966 0.666016 9.94029C0.666016 15.3977 4.77678 19.5295 10.2088 19.5295C12.7329 19.5295 15.0868 18.6405 16.8194 17.0307L17.5402 16.3574L14.5119 13.3788L13.8397 13.9781Z"
                      fill="url(#shared-gradient)"
                    />
                    <path
                      d="M10.0637 6.81506C10.9117 6.81506 11.725 7.15194 12.3247 7.75159C12.9243 8.35124 13.2612 9.16453 13.2612 10.0126C13.2612 10.8606 12.9243 11.6739 12.3247 12.2735C11.725 12.8732 10.9117 13.2101 10.0637 13.2101C9.21568 13.2101 8.40238 12.8732 7.80274 12.2735C7.20309 11.6739 6.86621 10.8606 6.86621 10.0126C6.86621 9.16453 7.20309 8.35124 7.80274 7.75159C8.40238 7.15194 9.21568 6.81506 10.0637 6.81506Z"
                      fill="url(#shared-gradient)"
                    />
                    <defs>
                      <linearGradient
                        id="shared-gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#C300B9" />
                        <stop offset="100%" stopColor="#5D0058" />
                      </linearGradient>
                    </defs>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerLinks}>
          <ul className={styles.linksList}>
            <li className={styles.linksItem}>
              <a href="">{dictionary.links.sitemap}</a>
            </li>
            <li className={styles.linksItem}>
              <a href="">{dictionary.links.terms}</a>
            </li>
            <li className={styles.linksItem}>
              <a href="">{dictionary.links.privacy}</a>
            </li>
            <li className={styles.linksItem}>
              <a href="">{dictionary.links.cookies}</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerLanguages}>
          <div className={styles.languagesWrapper}>
            <ul className={styles.languagesList}>
              {languages
                .slice(0, Math.ceil(languages.length / 2))
                .map((language) => (
                  <li key={language.code}>
                    <a href={`/${language.code}`}>{language.name}</a>
                  </li>
                ))}
            </ul>
            <ul className={styles.languagesList}>
              {languages.slice(Math.ceil(languages.length / 2)).map((language) => (
                <li key={language.code}>
                  <a href={`/${language.code}`}>{language.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;