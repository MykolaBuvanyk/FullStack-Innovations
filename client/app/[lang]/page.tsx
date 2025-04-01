import styles from "./page.module.css";
import MainHeroSection from "../components/MainHeroSection/MainHeroSection";
import MainSecond from "../components/MainSecond/MainSecond";
// import Link from 'next/link';
// import { Locale } from '@/i18n.config';
import OurPortfolioSlider from "../components/OurPortfolioSlider/OurPortfolioSlider";
import MainServices from "../components/MainServices/MainServices";
// type Props = {
//   params: { lang: Locale };
// };
export default function Home() {
  return (
    <div className={styles.page}>
      <MainHeroSection />  
      <MainSecond />
      <MainServices/>
      <OurPortfolioSlider/>
    </div>
  );
}
