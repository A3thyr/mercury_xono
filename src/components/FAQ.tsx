import { twMerge } from "tailwind-merge";
import { Section } from "../ui/Section";
import { Typography } from "../ui/Typography";
import { useMemo, useState } from "react";
import { FaqItem } from "./FaqItem";
import { useTranslation } from "react-i18next";

export const FAQ = () => {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setIsOpen(isOpen === index ? null : index);
  };

  const { t } = useTranslation();
  const faqData = useMemo(
    () => [
      {
        question: t("faq.item1.question"),
        answer: t("faq.item1.answer"),
      },
      {
        question: t("faq.item2.question"),
        answer: t("faq.item2.answer"),
      },
      {
        question: t("faq.item3.question"),
        answer: t("faq.item3.answer"),
      },
    ],
    [t]
  );
  return (
    <div id="faq">
      <Section
        className={twMerge(
          "gap-[23px] md:pt-0 max-md:pt-0 max-md:pb-[50px] md:max-w-[1020px]"
        )}
      >
        <Typography
          tag="h1"
          className=" text-center text-[40px] leading-[47.73px] font-sfProText font-extrabold text-white"
        >
          FAQ
        </Typography>
        <div className="flex flex-col gap-[24px]">
          {faqData.map((item, index) => (
            <FaqItem
              index={index}
              question={item.question}
              answer={item.answer}
              isOpen={isOpen === index}
              handleClick={handleClick}
            />
          ))}
        </div>
      </Section>
    </div>
  );
};
