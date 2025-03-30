// import styles from "./page.module.css";
import NavPath from "@/app/components/NavPath/NavPath";
import ContactContent from "../../components/ContactContent/ContactContent"
import ContactUsForm from '../../components/ContactUsForm/ContactUsForm';

export default function Home() {
  return (
    <div>
      <NavPath/>
      <ContactContent/>
      <ContactUsForm/>
    </div>
  );
}
