import ContactUsForm from "@/app/components/ContactUsForm/ContactUsForm";
import NavPath from "@/app/components/NavPath/NavPath";
import ServicesHero from "@/app/components/ServicesHero/ServicesHero";
import ServicesSecond from "@/app/components/ServicesSecond/ServicesSecond";
import ServicesThird from "@/app/components/ServicesThird/ServicesThird";
import Technologies from "@/app/components/Technologies/Technologies";
import TellAboutUs from "@/app/components/TellAboutUs/TellAboutUs";
import { Locale } from "@/i18n.config";
import { getDictionary } from '@/lib/dictionary';

type Props = {
  params: Promise<{ lang: Locale }>;
};
export default async function Home({ params }: Props) {
  const { lang } = await params;
  const dictionary: any = await getDictionary(lang);
  const { navPath,servicesSecond,technologies,tellAboutUs,servicesHero, contactUsForm, servicesThird } = dictionary;
  return (
    <div>
      <NavPath dictionary={navPath}/>
      <ServicesHero dictionary={servicesHero} />
      <ServicesSecond dictionary={servicesSecond}/>
      <Technologies dictionary={technologies}/>
      <ServicesThird dictionary={servicesThird} />
      <TellAboutUs dictionary={tellAboutUs} />
      <ContactUsForm dictionary={contactUsForm} />
    </div>
  );
}