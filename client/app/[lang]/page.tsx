import styles from "./page.module.css";
import MainHeroSection from "../components/MainHeroSection/MainHeroSection";
import MainSecond from "../components/MainSecond/MainSecond";
import MainService from "../components/MainService/MainService";
import Link from 'next/link';
import { Locale } from '@/i18n.config';
type Props = {
  params: { lang: Locale };
};
export default function Home({ params }: { params: { lang: Locale } }) {
  return (
    <div className={styles.page}>
      <MainHeroSection />  
      <MainSecond />
      <MainService/>
    </div>
  );
}
