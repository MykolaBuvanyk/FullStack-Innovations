"use client";
import { useState, useEffect } from "react";
import styles from "./Technologies.module.css";
import Image from "next/image";

type Props = {
  dictionary: any;
};

const Technologies: React.FC<Props> = ({ dictionary }) => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1150);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleShowMore = () => {
    setShowAll(true);
  };

  const techCategories = [
    {
      category: "Backend",
      items: [
        "PHP (Laravel, Symfony), Python (Flask/Django), Ruby on Rails, Node.js, GoLang, Nginx & Load Balancer",
      ],
      logos: [
        "/images/Technologies/flask.svg",
        "/images/Technologies/laravel.svg",
        "/images/Technologies/php.svg",
        "/images/Technologies/python.svg",
        "/images/Technologies/symfony.svg",
        "/images/Technologies/django.svg",
        "/images/Technologies/rails.svg",
        "/images/Technologies/node_js.svg",
        "/images/Technologies/go.svg",
        "/images/Technologies/nginx.svg",
      ],
    },
    {
      category: "Frontend",
      items: ["Javascript /Typescript (React, Angular, Vue), WebPack"],
      logos: [
        "/images/Technologies/react.svg",
        "/images/Technologies/angular.svg",
        "/images/Technologies/vue.svg",
        "/images/Technologies/js.svg",
        "/images/Technologies/ts.svg",
        "/images/Technologies/webpack.svg",
      ],
    },
    {
      category: "Databases",
      items: [
        "Relational MySQL, PostgreSQL",
        "NoSQL MongoDB",
        "Redis, Memcached",
      ],
      logos: [
        "/images/Technologies/mysql.svg",
        "/images/Technologies/postgresql.svg",
        "/images/Technologies/mariadb.svg",
        "/images/Technologies/mongodb.svg",
      ],
    },
    {
      category: "Cache storage",
      items: ["Redis, Memcached"],
      logos: [
        "/images/Technologies/redis.svg",
        "/images/Technologies/memcached.svg",
      ],
    },
    {
      category: "DevOps",
      items: ["Docker (Kubernetes), Github, GitHub Actions, Ansible, Jenkins"],
      logos: [
        "/images/Technologies/docker.svg",
        "/images/Technologies/kubernetes.svg",
        "/images/Technologies/github.svg",
        "/images/Technologies/ansible.svg",
        "/images/Technologies/jenkins.svg",
      ],
    },
    {
      category: "Infrastructure",
      items: ["Android (Java/Kotlin), IOS (Swift)"],
      logos: [
        "/images/Technologies/aws.svg",
        "/images/Technologies/vultr.svg",
        "/images/Technologies/planetscale.svg",
        "/images/Technologies/forge.svg",
      ],
    },
    {
      category: "Native mobile app development",
      items: ["Android Java, Kotlin", "iOS Swift"],
      logos: [
        "/images/Technologies/android.svg",
        "/images/Technologies/kotlin.svg",
        "/images/Technologies/java.svg",
        "/images/Technologies/apple.svg",
        "/images/Technologies/swift.svg",
      ],
    },
    {
      category: "Native Desktop GUI app development",
      items: ["C++, C#"],
      logos: [
        "/images/Technologies/C++.svg",
        "/images/Technologies/Csharp.svg",
      ],
    },
    {
      category: "Design",
      items: ["Adobe PS, Adobe AE, Adobe XD, Figma, Zeplin, ProtoPie"],
      logos: [
        "/images/Technologies/adobe_Photoshop.svg",
        "/images/Technologies/adobe_After_Effects.svg",
        "/images/Technologies/adobe_XD.svg",
        "/images/Technologies/Figma-Icon.svg",
        "/images/Technologies/zeplin.svg",
        "/images/Technologies/protopie.svg",
      ],
    },
    {
      category: "Commerce and CMS",
      items: ["Weblium, Shopify, WordPress, OpenCart, Wix"],
      logos: [
        "/images/Technologies/weblium.svg",
        "/images/Technologies/shopify.svg",
        "/images/Technologies/wordpress.svg",
        "/images/Technologies/opencart.svg",
        "/images/Technologies/wix.svg",
      ],
    },
  ];

  return (
    <section className={styles.technologies}>
      <h2 className={styles.title} id="technologies">
        {dictionary.title}
      </h2>
      <div className={styles.grid}>
        {techCategories
          .slice(0, isMobile && !showAll ? 3 : techCategories.length)
          .map((category, index) => (
            <div key={index} className={styles.categoryRow}>
              {/* Ліва частина: категорія та список технологій */}
              <div className={styles.categoryText}>
                <h3 className={styles.categoryTitle}>{category.category}</h3>
                <ul className={styles.items}>
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className={styles.item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Права частина: логотипи */}
              <div className={styles.categoryLogos}>
                <div className={styles.logos}>
                  {category.logos.map((logo, index) => (
                    <div key={logo} className={styles.logoWrapper}>
                      <img
                        src={logo}
                        alt={`${
                          category.items[index] || category.category
                        } logo`}
                        className={styles.logo}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>
      {isMobile && !showAll && techCategories.length > 3 && (
        <button
          className={styles.showMoreButton}
          onClick={handleShowMore}
          aria-label={dictionary.showMore}
        >
          <p>{dictionary.showMore}</p>
          <img src="/images/arrow_top_right.svg" alt="" />
        </button>
      )}
    </section>
  );
};

export default Technologies;
