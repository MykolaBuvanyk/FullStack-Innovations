import PartnershipHero from "@/app/components/PartnershipHero/PartnershipHero";
import { Locale } from '@/i18n.config';
type Props = {
  params: { lang: Locale };
};
export default function Partnership({ params: { lang } }: Props) {
  return (
    <div>
        <PartnershipHero/>
    </div>
  );
}
