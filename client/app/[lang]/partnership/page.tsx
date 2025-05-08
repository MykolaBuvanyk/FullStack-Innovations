import PartnershipHero from "@/app/components/PartnershipHero/PartnershipHero";
import PartnershipCards from "@/app/components/PartnershipCards/PartnershipCards";
import PartnershipOptions from '@/app/components/PartnershipOptions/PartnershipOptions';
import PartnershipBenefits from '@/app/components/PartnershipBenefits/PartnershipBenefits';
import { Locale } from '@/i18n.config';
import ButtonTop from "@/app/components/ButtonTop/ButtonTop";
import NavPath from "@/app/components/NavPath/NavPath";
import WorldMapPartnership from "@/app/components/WorldMapPartnership/WorldMapPartnership";
import ContactUsForm from "@/app/components/ContactUsForm/ContactUsForm";
import { getDictionary } from "@/lib/dictionary";
type Props = {
  params: Promise<{ lang: Locale }>;
};
export default async  function Partnership({ params }: Props) {
  const { lang } = await params;
   const dictionary: any = await getDictionary(lang);
    const { navPath,partnershipCards,worldMapPartnership,contactUsForm, partnershipHero, partnershipOptions, partnershipBenefits} = dictionary;
  return (
    <div>
      <NavPath dictionary={navPath}/>
      <PartnershipHero dictionary={partnershipHero}/>
      <PartnershipCards dictionary={partnershipCards} />
      <PartnershipOptions dictionary={partnershipOptions} />
      <PartnershipBenefits dictionary={partnershipBenefits} />
      <ButtonTop/>
      <WorldMapPartnership dictionary={worldMapPartnership} />
      <ContactUsForm dictionary={contactUsForm}/>
    </div>
  );
}
