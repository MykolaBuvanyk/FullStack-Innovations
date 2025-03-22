import styles from "./page.module.css";
import MainHeroSection from "../components/MainHeroSection/MainHeroSection";
import MainSecond from "../components/MainSecond/MainSecond";
import MainService from "../components/MainService/MainService";
export default function Home() {
  return (
    <div className={styles.page}>
      <MainHeroSection />
      <MainSecond />
      <MainService/>
    </div>
  );
}
