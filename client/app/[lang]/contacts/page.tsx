// import styles from "./page.module.css";
import NavPath from "@/app/components/NavPath/NavPath";
import ContactContent from "../../components/ContactContent/ContactContent"
import ContactUsForm from '../../components/ContactUsForm/ContactUsForm';
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
type Props = {
  params: { lang: Locale };
};
export default async function Home({ params }: Props) {
  const dictionary: any = await getDictionary(params.lang);
  const { contactUsForm, contactUs } = dictionary;
  return (
    <div>
      <NavPath />
      <ContactContent dictionary={contactUs}/>
      <ContactUsForm dictionary={contactUsForm} />
    </div>
  );
}
