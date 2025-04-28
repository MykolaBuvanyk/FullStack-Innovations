import ContactUsForm from "@/app/components/ContactUsForm/ContactUsForm";
import NavPath from "@/app/components/NavPath/NavPath";
import ServicesHero from "@/app/components/ServicesHero/ServicesHero";
import ServicesSecond from "@/app/components/ServicesSecond/ServicesSecond";
import { Locale } from "@/i18n.config";
import { getDictionary } from '@/lib/dictionary';

type Props = {
  params: { lang: Locale };
};
export default async function Home({ params }: Props) {
  const dictionary: any = await getDictionary(params.lang);
  const { portfolioHero, contactUsForm } = dictionary;
  return (
    <div>
      <NavPath />
      <ServicesHero dictionary={portfolioHero} />
      <ServicesSecond />
      <ContactUsForm dictionary={contactUsForm} />
    </div>
  );
}