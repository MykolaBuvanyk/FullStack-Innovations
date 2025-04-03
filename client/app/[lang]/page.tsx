import styles from "./page.module.css";
import MainHeroSection from "../components/MainHeroSection/MainHeroSection";
import MainSecond from "../components/MainSecond/MainSecond";
// import Link from 'next/link';
import { Locale } from '@/i18n.config';
import OurPortfolioSlider from "../components/OurPortfolioSlider/OurPortfolioSlider";
import MainServices from "../components/MainServices/MainServices";
import AboutHero from "../components/AboutHero/AboutHero";
import PartnershipCards from "../components/PartnershipCards/PartnershipCards";
import TellAboutUs from "../components/TellAboutUs/TellAboutUs";
import WorldMapPartnership from "../components/WorldMapPartnership/WorldMapPartnership";
import ContactUsForm from "../components/ContactUsForm/ContactUsForm";
import { getDictionary } from '../../lib/dictionary';
type Props = {
  params: { lang: Locale };
};
export default async function Home({ params }: Props) {
  const dictionary: any = await getDictionary(params.lang);
  const { mainHero,mainSecond,mainServices,ourPortfolioSlider,aboutHero,partnershipCards,tellAboutUs,worldMapPartnership,contactUsForm} = dictionary;
  return (
    <div className={styles.page}>
      <MainHeroSection dictionary={mainHero} />
      <MainSecond dictionary={mainSecond}/>
      <MainServices dictionary={mainServices}/>
      <OurPortfolioSlider dictionary={ourPortfolioSlider}/>
      <AboutHero dictionary={aboutHero}/>
      <PartnershipCards dictionary={partnershipCards}/>
      <TellAboutUs dictionary={tellAboutUs}/>
      <WorldMapPartnership dictionary={worldMapPartnership}/>
      <ContactUsForm dictionary={contactUsForm}/>
    </div>
  );
}
