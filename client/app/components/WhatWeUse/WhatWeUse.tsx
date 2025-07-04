"use client";

import { useState, useEffect } from "react";
import styles from "./WhatWeUse.module.css";

type Props = {
  dictionary: any;
};

import FlaskIcon from "../../assets/icons/flask.svg";
import LaravelIcon from "../../assets/icons/laravel.svg";
import PhpIcon from "../../assets/icons/php.svg";
import PythonIcon from "../../assets/icons/python.svg";
import SymfonyIcon from "../../assets/icons/symfony.svg";
import DjangoIcon from "../../assets/icons/django.svg";
import RailsIcon from "../../assets/icons/rails.svg";
import NodeJsIcon from "../../assets/icons/node_js.svg";
import GoIcon from "../../assets/icons/go.svg";
import NginxIcon from "../../assets/icons/nginx.svg";
import ReactIcon from "../../assets/icons/react.svg";
import AngularIcon from "../../assets/icons/angular.svg";
import VueIcon from "../../assets/icons/vue.svg";
import JsIcon from "../../assets/icons/js.svg";
import WebpackIcon from "../../assets/icons/webpack.svg";
import MysqlIcon from "../../assets/icons/mysql.svg";
import PostgresqlIcon from "../../assets/icons/postgresql.svg";
import MariadbIcon from "../../assets/icons/mariadb.svg";
import MongodbIcon from "../../assets/icons/mongodb.svg";
import RedisIcon from "../../assets/icons/redis.svg";
import MemcachedIcon from "../../assets/icons/memcached.svg";
import DockerIcon from "../../assets/icons/docker.svg";
import KubernetesIcon from "../../assets/icons/kubernetes.svg";
import GithubIcon from "../../assets/icons/github.svg";
import AnsibleIcon from "../../assets/icons/ansible.svg";
import JenkinsIcon from "../../assets/icons/jenkins.svg";
import AwsIcon from "../../assets/icons/aws.svg";
import VultrIcon from "../../assets/icons/vultr.svg";
import PlanetscaleIcon from "../../assets/icons/planetscale.svg";
import ForgeIcon from "../../assets/icons/forge.svg";
import AndroidIcon from "../../assets/icons/android.svg";
import KotlinIcon from "../../assets/icons/kotlin.svg";
import JavaIcon from "../../assets/icons/java.svg";
import AppleIcon from "../../assets/icons/apple.svg";
import SwiftIcon from "../../assets/icons/swift.svg";
import CppIcon from "../../assets/icons/C++.svg";
import CsharpIcon from "../../assets/icons/Csharp.svg";
import AdobePhotoshopIcon from "../../assets/icons/adobe_Photoshop.svg";
import AdobeAfterEffectsIcon from "../../assets/icons/adobe_After_Effects.svg";
import AdobeXdIcon from "../../assets/icons/adobe_XD.svg";
import FigmaIcon from "../../assets/icons/Figma-Icon.svg";
import ZeplinIcon from "../../assets/icons/zeplin.svg";
import ProtopieIcon from "../../assets/icons/protopie.svg";
import WebliumIcon from "../../assets/icons/weblium.svg";
import ShopifyIcon from "../../assets/icons/shopify.svg";
import WordpressIcon from "../../assets/icons/wordpress.svg";
import OpencartIcon from "../../assets/icons/opencart.svg";
import WixIcon from "../../assets/icons/wix.svg";

const allLogos = [
  FlaskIcon,
  LaravelIcon,
  PhpIcon,
  PythonIcon,
  SymfonyIcon,
  DjangoIcon,
  RailsIcon,
  NodeJsIcon,
  GoIcon,
  NginxIcon,
  ReactIcon,
  AngularIcon,
  VueIcon,
  JsIcon,
  WebpackIcon,
  MysqlIcon,
  PostgresqlIcon,
  MariadbIcon,
  MongodbIcon,
  RedisIcon,
  MemcachedIcon,
  DockerIcon,
  KubernetesIcon,
  GithubIcon,
  AnsibleIcon,
  JenkinsIcon,
  AwsIcon,
  VultrIcon,
  PlanetscaleIcon,
  ForgeIcon,
  AndroidIcon,
  KotlinIcon,
  JavaIcon,
  AppleIcon,
  SwiftIcon,
  CppIcon,
  CsharpIcon,
  AdobePhotoshopIcon,
  AdobeAfterEffectsIcon,
  AdobeXdIcon,
  FigmaIcon,
  ZeplinIcon,
  ProtopieIcon,
  WebliumIcon,
  ShopifyIcon,
  WordpressIcon,
  OpencartIcon,
  WixIcon,
];

const WhatWeUse: React.FC<Props> = ({ dictionary }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);

  // Перевірка чи це мобільний пристрій
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1150);
      setIsSmallMobile(window.innerWidth <= 650);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Створюємо слайди для мобільної версії
  const createMobileSlides = () => {
    const slides = [];
    const itemsPerSlide = isSmallMobile ? 8 : 14; // 8 елементів (2 ряди по 4) для <= 650px, 14 (2 ряди по 7) для більших
    
    for (let i = 0; i < allLogos.length; i += itemsPerSlide) {
      slides.push(allLogos.slice(i, i + itemsPerSlide));
    }
    return slides;
  };

  const mobileSlides = createMobileSlides();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mobileSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + mobileSlides.length) % mobileSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Автоматичне перемикання слайдів
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(nextSlide, 4000);
      return () => clearInterval(interval);
    }
  }, [isMobile, mobileSlides.length]);

  if (isMobile) {
    return (
      <section className={styles.whatWeUseWrapper}>
        <h2 className={styles.title}>{dictionary.title}</h2>
        <div className={styles.sliderContainer}>
          <div className={styles.sliderWrapper}>
            <div 
              className={styles.sliderTrack}
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {mobileSlides.map((slide, slideIndex) => {
                const itemsPerRow = isSmallMobile ? 4 : 7;
                
                return (
                  <div key={slideIndex} className={styles.slide}>
                    <div className={styles.slideRow}>
                      {slide.slice(0, itemsPerRow).map((LogoComponent, logoIndex) => (
                        <div key={logoIndex} className={styles.logoWrapper}>
                          <LogoComponent className={styles.logo} />
                        </div>
                      ))}
                    </div>
                    <div className={styles.slideRow}>
                      {slide.slice(itemsPerRow, itemsPerRow * 2).map((LogoComponent, logoIndex) => (
                        <div key={logoIndex + itemsPerRow} className={styles.logoWrapper}>
                          <LogoComponent className={styles.logo} />
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Навігаційні кнопки */}
          {/* <button 
            className={`${styles.sliderButton} ${styles.prevButton}`}
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            &#8249;
          </button>
          <button 
            className={`${styles.sliderButton} ${styles.nextButton}`}
            onClick={nextSlide}
            aria-label="Next slide"
          >
            &#8250;
          </button> */}
          
          {/* Індикатори */}
          <div className={styles.indicators}>
            {mobileSlides.map((_, index) => (
              <button
                key={index}
                className={`${styles.indicator} ${currentSlide === index ? styles.active : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Десктопна версія (залишається незмінною)
  return (
    <section className={styles.whatWeUseWrapper}>
      <h2 className={styles.title}>{dictionary.title}</h2>
      <div className={styles.logosWrapper}>
        {Array.from({ length: 6 }).map((_, rowIndex) => (
          <div key={rowIndex} className={styles.logoRow}>
            {Array.from({ length: 8 }).map((_, colIndex) => {
              const logoIndex = rowIndex * 8 + colIndex;
              const LogoComponent = allLogos[logoIndex];
              return logoIndex < allLogos.length ? (
                <div key={colIndex} className={styles.logoWrapper}>
                  <LogoComponent className={styles.logo} />
                </div>
              ) : null;
            })}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeUse;