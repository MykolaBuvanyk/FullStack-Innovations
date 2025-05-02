import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

import SpecificServiceHero from "@/app/components/SpecificServiceHero/SpecificServiceHero";
import SpecificServiceProcess from "@/app/components/SpecificServiceProcess/SpecificServiceProcess";
import ChooseUs from "@/app/components/ChooseUs/ChooseUs";
import HowWeWork from "@/app/components/HowWeWork/HowWeWork";

type Props = {
  params: { lang: Locale };
};

export default async function Home({ params }: Props) {
  const dictionary: any = await getDictionary(params.lang);

  const data = {
    hero: {
      title: "Розробка сайтів",
      buttonText: "Зв’язатися з нами",
      description:
        "“Бізнес - це гра партнерства. Ті, хто добре їх формує, досягнуть успіху, а ті, хто ні, залишаться позаду” - Білл Гейтс",
    },
    process: {
      title: "Процес та його переваги",
      processEl: [
        {
          title: "Планування проекту",
          para: "Під час цього етапу ми визначаємо обсяг проекту, його цілі та терміни, а також збираємо вимоги від зацікавлених сторін і проводимо маркетингове дослідження для кращого розуміння ринку та аудиторії.",
        },
        {
          title: "Дизайн та розробка",
          para: "На даному етапі дизайнери створюють макети та візуальний дизайн, визначаючи зовнішній вигляд проекту, після чого розробники приступають до реалізації фронтенду та бекенду веб-сайту, забезпечуючи його функціональність та дизайн.",
        },
        {
          title: "Інтеграція контенту",
          para: "На цьому етапі команда наповнює веб-сайт відповідним контентом, включаючи тексти, зображення, відео та інші медіаресурси, для створення повноцінного інформаційного середовища.",
        },
        ,
        {
          title: "Тестування та оптимізація",
          para: "Відділ з якості виконує тестування функціональності веб-сайту, проводить оптимізацію для пошукових систем (SEO) та гарантує високу продуктивність та безпеку ресурсу.",
        },
        ,
        {
          title: "Розгортання та обслуговування",
          para: "На останньому етапі ми запускаємо веб-сайт, починаємо моніторити аналітику та забезпечуємо постійну підтримку, включаючи оновлення та додатковий розвиток проекту.",
        },
      ],
    },
    howWeWork: {
      title: "Як ми працюємо?",
      para: "Ми вивчаємо потреби клієнта, виявляємо всі проблемні питання та визначаємо, як їх усунути. Аналізуємо конкурентів у пошукових результатах та їхні стратегії. Проводимо аудит доступного трафіку на сайті з точки зору джерел та ефективності в пошукових системах.",
      howWeWorkEl: [
        "Планування проекту",
        "Дизайн та розробка",
        "Інтеграція контенту",
        "Тестування та оптимізація",
        "Розгортання та обслуговування"
      ],
    },
  };

  return (
    <div>
      <SpecificServiceHero dictionary={data.hero} />
      <SpecificServiceProcess dictionary={data.process} />
      <ChooseUs />
      <HowWeWork dictionary={data.howWeWork} />
    </div>
  );
}
