
// import { Locale } from '@/i18n.config';
import ButtonTop from "@/app/components/ButtonTop/ButtonTop";
import NavPath from "@/app/components/NavPath/NavPath";
import AboutPeopleSlider from "@/app/components/AboutPeopleSlider/AboutPeopleSlider";
import AboutServicesHero from '@/app/components/AboutServicesHero/AboutServicesHero';
import ChooseUs from '@/app/components/ChooseUs/ChooseUs';
import TellAboutUs from '@/app/components/TellAboutUs/TellAboutUs';
import WorkWithUs from '@/app/components/WorkWithUs/WorkWithUs';
import WorldMapPartnership from '@/app/components/WorldMapPartnership/WorldMapPartnership';
import ContactUsForm from '@/app/components/ContactUsForm/ContactUsForm';
import AboutHero from "@/app/components/AboutHero/AboutHero";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";
type Props = {
    params: { lang: Locale };
};
export default async function About({ params }: Props) {
    const dictionary: any = await getDictionary(params.lang);
    const { aboutHero, aboutPeopleSlider, servicesHero, chooseUs, tellAboutUs, workWithUs, worldMapPartnership, contactUsForm } = dictionary;
    return (
        <div>
            <NavPath />
            <AboutHero dictionary={aboutHero} />
            <AboutPeopleSlider />
            {/* <ButtonTop /> */}
            {/* <AboutServicesHero /> */}
            <ChooseUs />
            <TellAboutUs dictionary={tellAboutUs} />    
            <WorkWithUs />
            <WorldMapPartnership dictionary={worldMapPartnership} />
            <ContactUsForm dictionary={contactUsForm} />
        </div>
    );
}
