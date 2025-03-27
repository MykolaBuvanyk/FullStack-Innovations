
import { Locale } from '@/i18n.config';
import ButtonTop from "@/app/components/ButtonTop/ButtonTop";
import NavPath from "@/app/components/NavPath/NavPath";
import AboutPeopleSlider from "@/app/components/AboutPeopleSlider/AboutPeopleSlider";
import ServicesHero from '@/app/components/ServicesHero/ServicesHero';
import ChooseUs from '@/app/components/ChooseUs/ChooseUs';
type Props = {
    params: { lang: Locale };
};
export default function About({ params: { lang } }: Props) {
    return (
        <div>
            <NavPath />
            <AboutPeopleSlider/>
            <ButtonTop />
            <ServicesHero />
            <ChooseUs />
        </div>
    );
}
