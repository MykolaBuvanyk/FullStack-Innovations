import PartnershipHero from "@/app/components/PartnershipHero/PartnershipHero";
import PartnershipCards from "@/app/components/PartnershipCards/PartnershipCards";
import PartnershipOptions from '@/app/components/PartnershipOptions/PartnershipOptions';
import PartnershipBenefits from '@/app/components/PartnershipBenefits/PartnershipBenefits';
import { Locale } from '@/i18n.config';
import ButtonTop from "@/app/components/ButtonTop/ButtonTop";
type Props = {
  params: { lang: Locale };
};
export default function Partnership({ params: { lang } }: Props) {
  return (
    <div>
      <PartnershipHero />
      <PartnershipCards />
      <PartnershipOptions />
      <PartnershipBenefits />
      <ButtonTop/>
    </div>
  );
}
