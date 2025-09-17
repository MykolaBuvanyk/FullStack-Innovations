"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./Header.module.css";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Flag from "react-world-flags";

type Props = {
  dictionary: any;
};

const Header: React.FC<Props> = ({ dictionary }) => {
  const pathname = usePathname();
  const router = useRouter();
  const currentLang = pathname.split("/")[1] || "uk";
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isTelDropdownOpen, setIsTelDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement | null>(null);

  const languages = [
    { code: "uk", name: "Українська", countryCode: "UA" },
    { code: "ru", name: "Русский", countryCode: "RU" },
    { code: "en", name: "English", countryCode: "GB" },
    { code: "ja", name: "日本語", countryCode: "JP" },
    { code: "hi", name: "हिंदी", countryCode: "IN" },
    { code: "zh", name: "中文", countryCode: "CN" },
    { code: "pt", name: "Português", countryCode: "PT" },
    { code: "bg", name: "Български", countryCode: "BG" },
    { code: "el", name: "Ελληνικά", countryCode: "GR" },
    { code: "pl", name: "Polski", countryCode: "PL" },
    { code: "cs", name: "Čeština", countryCode: "CZ" },
    { code: "de", name: "Deutsch", countryCode: "DE" },
    { code: "it", name: "Italiano", countryCode: "IT" },
    { code: "sv", name: "Svenska", countryCode: "SE" },
    { code: "nl", name: "Nederlands", countryCode: "NL" },
    { code: "lb", name: "Lëtzebuergesch", countryCode: "LU" },
    { code: "fr", name: "Français", countryCode: "FR" },
    { code: "es", name: "Español", countryCode: "ES" },
    { code: "ga", name: "Gaeilge", countryCode: "IE" },
    { code: "no", name: "Norsk", countryCode: "NO" },
  ];

  const isValidLanguageCode = (code: string) => {
    return languages.some((lang) => lang.code === code);
  };

  const getNewPath = (langCode: string) => {
    const pathWithoutLeadingSlash = pathname.startsWith("/")
      ? pathname.slice(1)
      : pathname;
    const pathParts = pathWithoutLeadingSlash.split("/");

    if (pathParts.length > 0 && isValidLanguageCode(pathParts[0])) {
      pathParts[0] = langCode;
    } else {
      pathParts.unshift(langCode);
    }

    return "/" + pathParts.join("/");
  };

  const handleLanguageChange = (langCode: string) => {
    document.cookie = `preferred-locale=${langCode}; path=/; max-age=${
      60 * 60 * 24 * 30
    }`;
    const newPath = getNewPath(langCode);
    router.push(newPath);
    setIsLangDropdownOpen(false);
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target as Node)
      ) {
        setIsLangDropdownOpen(false);
      }
    };

    // Додаємо невелику затримку, щоб уникнути конфлікту з onClick
    const timeoutId = setTimeout(() => {
      document.addEventListener("mousedown", handleClickOutside);
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const icons = Array.from(
    { length: 10 },
    (_, i) => `/images/HeaderIcons/${i + 1}.svg`
  );

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <ul className={styles.headerWrapper}>
          <li className={styles.headerWrapperEl}>
            <Link href={`/${currentLang}`}>
              <img className={styles.logoImage} src="/images/logo.svg" alt="" />
            </Link>
          </li>
          <li className={styles.headerWrapperEl}>
            <ul className={styles.headerList}>
              <li
                className={[styles.headerEl, styles.headerDropdown].join(" ")}
              >
                <Link href={`/${currentLang}/services`}>
                  {dictionary.nav.services}
                </Link>
                <i className="fa-solid fa-chevron-down"></i>
              </li>
              <li className={styles.headerEl}>
                <Link href={`/${currentLang}/portfolio`}>
                  {dictionary.nav.portfolio}
                </Link>
              </li>
              <li className={styles.headerEl}>
                <Link href={`/${currentLang}/about`}>
                  {dictionary.nav.about}
                </Link>
              </li>
              <li className={styles.headerEl}>
                <Link href={`/partnership`}>{dictionary.nav.partnership}</Link>
              </li>
              <li className={styles.headerEl}>
                <Link href={`/${currentLang}/blog`}>{dictionary.nav.blog}</Link>
              </li>
              <li className={styles.headerEl}>
                <Link href={`/${currentLang}/contacts`}>
                  {dictionary.nav.contacts}
                </Link>
              </li>
            </ul>
          </li>
          <li className={styles.headerWrapperEl}>
            <div className={styles.headerTel}>
              <a href="tel:+380636826299">
                <Flag code="UA" height="14" width="21" /> +(380) 63 682 6299
              </a>
              <i
                className={`fa-solid fa-chevron-${
                  isTelDropdownOpen ? "up" : "down"
                }`}
                onClick={() => setIsTelDropdownOpen(!isTelDropdownOpen)}
              ></i>
            </div>
            <div className={styles.headerLang} ref={langDropdownRef}>
              <div
                className={styles.langSelector}
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              >
                <span>{currentLang.toUpperCase()}</span>
                <i
                  className={`fa-solid fa-chevron-${isLangDropdownOpen ? "up" : "down"
                    }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsLangDropdownOpen(!isLangDropdownOpen);
                  }}
                ></i>
              </div>
              {isLangDropdownOpen && (
                <div className={styles.langDropdown}>
                  {languages.map((lang) => (
                    <div
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={styles.langOption}
                    >
                      <Flag code={lang.countryCode} height="16" width="24" />
                      <span>{lang.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.tabletMobileContainer}>
        <div className={styles.leftSideWrapper}>
          <Link href={`/${currentLang}`}>
            <img className={styles.logoImage} src="/images/logo.svg" alt="" />
          </Link>
        </div>
        <div className={styles.rightSideWrapper}>
          <div className={styles.headerLang} ref={langDropdownRef}>
            <div
              className={styles.langSelector}
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
            >
              <span>{currentLang.toUpperCase()}</span>
              <i
                className={`fa-solid fa-chevron-${isLangDropdownOpen ? "up" : "down"
                  }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLangDropdownOpen(!isLangDropdownOpen);
                }}
              ></i>
            </div>
            {isLangDropdownOpen && (
              <div className={styles.langDropdown}>
                {languages.map((lang) => (
                  <div
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={styles.langOption}
                  >
                    <Flag code={lang.countryCode} height="16" width="24" />
                    <span>{lang.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <img
            className={`${styles.menuBtn} ${
              isSidebarOpen ? styles.menuBtnActive : ""
            }`}
            src="/images/mobile-header-menu-icon.svg"
            alt=""
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          />
        </div>
      </div>
      <div
        className={`${styles.sideBar} ${
          isSidebarOpen ? styles.sideBarOpen : ""
        }`}
      >
        <div className={styles.sideBarLogoWrapper}>
          <Link
            href={`/${currentLang}`}
            onClick={() => setIsSidebarOpen(false)}
          >
            <img className={styles.logoImage} src="/images/logo.svg" alt="" />
          </Link>
          <div className={styles.arrowLeftWrapper}>
            <i
              className="fa-solid fa-arrow-left"
              onClick={() => setIsSidebarOpen(false)}
            ></i>
          </div>
        </div>
        <ul className={styles.headerList}>
          <li className={styles.headerEl}>
            <Link
              href={`/${currentLang}`}
              onClick={() => setIsSidebarOpen(false)}
            >
              {dictionary.nav.home}
            </Link>
          </li>
          <li className={[styles.headerEl, styles.headerDropdown].join(" ")}>
            <Link
              href={`/${currentLang}/services`}
              onClick={() => setIsSidebarOpen(false)}
            >
              {dictionary.nav.services}
            </Link>
            <i className="fa-solid fa-chevron-down"></i>
          </li>
          <li className={styles.headerEl}>
            <Link
              href={`/${currentLang}/portfolio`}
              onClick={() => setIsSidebarOpen(false)}
            >
              {dictionary.nav.portfolio}
            </Link>
          </li>
          <li className={styles.headerEl}>
            <Link
              href={`/${currentLang}/about`}
              onClick={() => setIsSidebarOpen(false)}
            >
              {dictionary.nav.about}
            </Link>
          </li>
          <li className={styles.headerEl}>
            <Link href={`/partnership`} onClick={() => setIsSidebarOpen(false)}>
              {dictionary.nav.partnership}
            </Link>
          </li>
          <li className={styles.headerEl}>
            <Link
              href={`/${currentLang}/blog`}
              onClick={() => setIsSidebarOpen(false)}
            >
              {dictionary.nav.blog}
            </Link>
          </li>
          <li className={styles.headerEl}>
            <Link
              href={`/${currentLang}/contacts`}
              onClick={() => setIsSidebarOpen(false)}
            >
              {dictionary.nav.contacts}
            </Link>
          </li>
        </ul>
        <div className={styles.contactUsWrapper}>
          <div className={styles.contactUs}>
            <a href={`/${currentLang}/contacts`} className={styles.contactUsWrapperPara}>
              {dictionary.contactButton}
            </a>
            <div className={styles.headerTel}>
              <a href="tel:+380636826299">
                <Flag code="UA" height="14" width="21" /> +(380) 63 682 6299
              </a>
              <i
                className={`fa-solid fa-chevron-${
                  isTelDropdownOpen ? "up" : "down"
                }`}
                onClick={() => setIsTelDropdownOpen(!isTelDropdownOpen)}
              ></i>
            </div>
          </div>
          <div className={styles.socialNetwork}>
            <p className={styles.contactUsWrapperPara}>Наші соціальні мережі</p>
            <ul className={styles.socialNetworkList}>
              {icons.map((icon: string, index: number) => (
                <li key={index}>
                  <img src={icon} alt="" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;