import styles from "./page.module.css";
import MainHeroSection from "../components/MainHeroSection/MainHeroSection";
import MainSecond from "../components/MainSecond/MainSecond";
// import Link from 'next/link';
// import { Locale } from '@/i18n.config';
import OurPortfolioSlider from "../components/OurPortfolioSlider/OurPortfolioSlider";
import MainServices from "../components/MainServices/MainServices";
import AboutHero from "../components/AboutHero/AboutHero";
import PartnershipCards from "../components/PartnershipCards/PartnershipCards";
import TellAboutUs from "../components/TellAboutUs/TellAboutUs";
import WorldMapPartnership from "../components/WorldMapPartnership/WorldMapPartnership";
import ContactUsForm from "../components/ContactUsForm/ContactUsForm";
// type Props = {
//   params: { lang: Locale };
// };
export default function Home() {
  return (
    <div className={styles.page}>
      <MainHeroSection />
      <MainSecond />
      <MainServices />
      <OurPortfolioSlider />
      <AboutHero />
      <PartnershipCards />
      <TellAboutUs />
      <WorldMapPartnership />
      <ContactUsForm />
    </div>
  );
}
