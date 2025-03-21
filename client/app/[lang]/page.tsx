import styles from "./page.module.css";
import MainHeroSection from "../components/MainHeroSection/MainHeroSection";

import MainSecond from "../components/MainSecond/MainSecond";
export default function Home() {
  return (
    <div className={styles.page}>
      <MainHeroSection />

      <MainSecond />
    </div>
  );
}
