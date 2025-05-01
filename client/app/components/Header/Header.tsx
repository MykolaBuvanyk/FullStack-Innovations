"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./Header.module.css";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

type Props = {
  dictionary: any;
};

const Header: React.FC<Props> = ({ dictionary }) => {
  const pathname = usePathname();
  const router = useRouter();
  const currentLang = pathname.split("/")[1] || "uk";
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isTelDropdownOpen, setIsTelDropdownOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement | null>(null);

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

  // Перевіряємо, чи код є дійсним кодом мови з нашого списку
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
    document.cookie = `preferred-locale=${langCode}; path=/; max-age=${60 * 60 * 24 * 30}`; // 30 днів
    const newPath = getNewPath(langCode);
    router.push(newPath);
    setIsLangDropdownOpen(false);
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

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
              {/* <li className={styles.headerEl}>
                <Link href={`/${currentLang}`}>{dictionary.nav.home}</Link>
              </li> */}
              <li className={[styles.headerEl, styles.headerDropdown].join(" ")}>
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
                <Link href={`/${currentLang}/about`}>{dictionary.nav.about}</Link>
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
                <span>🇺🇦</span> +(380) 63 682 6299
              </a>
              <i
                className={`fa-solid fa-chevron-${isTelDropdownOpen ? "up" : "down"}`}
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
                  className={`fa-solid fa-chevron-${isLangDropdownOpen ? "up" : "down"}`}
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
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;