import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

import SpecificServiceHero from "@/app/components/SpecificServiceHero/SpecificServiceHero";
import SpecificServiceProcess from "@/app/components/SpecificServiceProcess/SpecificServiceProcess";
import ChooseUs from "@/app/components/ChooseUs/ChooseUs";
import HowWeWork from "@/app/components/HowWeWork/HowWeWork";
import OurProjects from "@/app/components/OurProjects/OurProjects";
import OurPortfolioSlider from "@/app/components/OurPortfolioSlider/OurPortfolioSlider";
import WhatWeUse from "@/app/components/WhatWeUse/WhatWeUse";
import CommonQuestions from "@/app/components/CommonQuestions/CommonQuestions";
import ContactUsForm from "@/app/components/ContactUsForm/ContactUsForm";
import { title } from "process";

type Props = {
  params: Promise<{ lang: Locale }>;
};

export default async function Home({ params }: Props) {
  const { lang } = await params;
  const dictionary: any = await getDictionary(lang);

  const { chooseUs, commonQuestions, whatWeUse, ourProjects, howWeWork, specificServiceHero, specificServiceProcess, ourPortfolioSlider, contactUsForm } = dictionary;

  return (
    <div>
      <SpecificServiceHero dictionary={specificServiceHero} />
      <SpecificServiceProcess dictionary={specificServiceProcess} />
      <ChooseUs dictionary={chooseUs} />
      <HowWeWork dictionary={howWeWork} />
      <OurProjects dictionary={ourProjects} />
      <OurPortfolioSlider dictionary={ourPortfolioSlider} />
      <WhatWeUse dictionary={whatWeUse} />
      <CommonQuestions dictionary={commonQuestions} />
      <ContactUsForm dictionary={contactUsForm} />
    </div>
  );
}
