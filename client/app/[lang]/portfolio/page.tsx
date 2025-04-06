import ContactUsForm from "@/app/components/ContactUsForm/ContactUsForm";
import NavPath from "@/app/components/NavPath/NavPath";
import PortfolioHero from "@/app/components/PortfolioHero/PortfolioHero";
import PortfolioTabs from "@/app/components/PortfolioTabs/PortfolioTabs";
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
      <PortfolioHero dictionary={portfolioHero} />
      <PortfolioTabs />
      <ContactUsForm dictionary={contactUsForm} />
    </div>
  );
}