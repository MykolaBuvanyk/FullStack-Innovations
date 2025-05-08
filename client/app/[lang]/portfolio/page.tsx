import ContactUsForm from "@/app/components/ContactUsForm/ContactUsForm";
import NavPath from "@/app/components/NavPath/NavPath";
import PortfolioHero from "@/app/components/PortfolioHero/PortfolioHero";
import PortfolioTabs from "@/app/components/PortfolioTabs/PortfolioTabs";
import { Locale } from "@/i18n.config";
import { getDictionary } from '@/lib/dictionary';

type Props = {
  params: Promise<{ lang: Locale }>;
};
export default async function Home({ params }: Props) {
  const { lang } = await params;
  const dictionary: any = await getDictionary(lang);
  const { portfolioTabs,navPath,portfolioHero, contactUsForm } = dictionary;
  return (
    <div>
      <NavPath dictionary={navPath}/>
      <PortfolioHero dictionary={portfolioHero} />
      <PortfolioTabs dictionary={portfolioTabs}/>
      <ContactUsForm dictionary={contactUsForm} />
    </div>
  );
}