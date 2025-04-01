
// import { Locale } from '@/i18n.config';
import ButtonTop from "@/app/components/ButtonTop/ButtonTop";
import NavPath from "@/app/components/NavPath/NavPath";
import AboutPeopleSlider from "@/app/components/AboutPeopleSlider/AboutPeopleSlider";
import ServicesHero from '@/app/components/ServicesHero/ServicesHero';
import ChooseUs from '@/app/components/ChooseUs/ChooseUs';
import TellAboutUs from '@/app/components/TellAboutUs/TellAboutUs';
import WorkWithUs from '@/app/components/WorkWithUs/WorkWithUs';
import WorldMapPartnership from '@/app/components/WorldMapPartnership/WorldMapPartnership';
import ContactUsForm from '@/app/components/ContactUsForm/ContactUsForm';
import AboutHero from "@/app/components/AboutHero/AboutHero";
// type Props = {
//     params: { lang: Locale };
// };
export default function About() {
    return (
        <div>
            <NavPath />
            <AboutHero/>
            <AboutPeopleSlider/>
            <ButtonTop />
            <ServicesHero />
            <ChooseUs />
            <TellAboutUs />
            <WorkWithUs/>
            <WorldMapPartnership/>
            <ContactUsForm/>
        </div>
    );
}
