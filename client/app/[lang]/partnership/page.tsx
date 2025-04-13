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
  params: { lang: Locale };
};
export default async  function Partnership({ params }: Props) {
   const dictionary: any = await getDictionary(params.lang);
    const { partnershipCards,worldMapPartnership,contactUsForm} = dictionary;
  return (
    <div>
      <NavPath />
      <PartnershipHero />
      <PartnershipCards dictionary={partnershipCards} />
      <PartnershipOptions />
      <PartnershipBenefits />
      <ButtonTop/>
      <WorldMapPartnership dictionary={worldMapPartnership} />
      <ContactUsForm dictionary={contactUsForm}/>
    </div>
  );
}
