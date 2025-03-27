import PartnershipHero from "@/app/components/PartnershipHero/PartnershipHero";
import PartnershipCards from "@/app/components/PartnershipCards/PartnershipCards";
import PartnershipOptions from '@/app/components/PartnershipOptions/PartnershipOptions';
import PartnershipBenefits from '@/app/components/PartnershipBenefits/PartnershipBenefits';
import { Locale } from '@/i18n.config';
import ButtonTop from "@/app/components/ButtonTop/ButtonTop";
import NavPath from "@/app/components/NavPath/NavPath";
import WorldMap from "@/app/components/WorldMap/WorldMap";
type Props = {
  params: { lang: Locale };
};
export default function Partnership({ params: { lang } }: Props) {
  return (
    <div>
      <NavPath />
      <PartnershipHero />
      <PartnershipCards />
      <PartnershipOptions />
      <PartnershipBenefits />
      <ButtonTop/>
      <WorldMap />
    </div>
  );
}
