
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
        params: Promise<{ lang: Locale }>;
    };
    export default async function About({ params }: Props) {
        const { lang } = await params; 
        const dictionary: any = await getDictionary(lang);
        const { navPath,aboutPeopleSlider,aboutHero,tellAboutUs,worldMapPartnership, contactUsForm,chooseUs,workWithUs } = dictionary;
        return (
            <div>
                <NavPath dictionary={navPath}/>
                <AboutHero dictionary={aboutHero} />
                <AboutPeopleSlider dictionary={aboutPeopleSlider}/>
                {/* <ButtonTop /> */}
                {/* <AboutServicesHero /> */}
                <ChooseUs dictionary={chooseUs}/>
                <TellAboutUs dictionary={tellAboutUs} />    
                <WorkWithUs dictionary={workWithUs}/>
                <WorldMapPartnership dictionary={worldMapPartnership} />
                <ContactUsForm dictionary={contactUsForm} />
            </div>
        );
    }
