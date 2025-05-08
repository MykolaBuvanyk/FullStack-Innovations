// import styles from "./page.module.css";
import NavPath from "@/app/components/NavPath/NavPath";
import BlogContent from "../../components/BlogContent/BlogContent"
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
type Props = {
  params: Promise<{ lang: Locale }>;
};
export default async function Home({ params }: Props) {
  const { lang } = await params;
  const dictionary: any = await getDictionary(lang);
    const {navPath,blogContent} = dictionary;
  return (
    <div>
      <NavPath dictionary={navPath}/>
      <BlogContent dictionary={blogContent}/>
    </div>
  );
}
