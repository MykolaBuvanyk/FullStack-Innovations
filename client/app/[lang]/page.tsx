import styles from "./page.module.css";
import MainHeroSection from "../components/MainHeroSection/MainHeroSection";
import Marquee from "../components/Marquee/Marquee";
import MainSecond from "../components/MainSecond/MainSecond";
export default function Home() {
  return (
    <div className={styles.page}>
      <MainHeroSection />
      <Marquee />
      <MainSecond />
    </div>
  );
}
