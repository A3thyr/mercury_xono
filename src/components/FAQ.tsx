import { twMerge } from "tailwind-merge";
import { Section } from "../ui/Section";
import { Typography } from "../ui/Typography";
import { useState } from "react";
import { FaqItem } from "./FaqItem";
import { FaqItems } from "../utils/array/faqitems";

export const FAQ = () => {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setIsOpen(isOpen === index ? null : index);
  };
  return (
    <div id="faq">
      <Section
        className={twMerge(
          "gap-[23px] max-md:pt-0 max-md:pb-[50px] md:max-w-[1020px]"
        )}
      >
        <Typography
          tag="h1"
          className=" text-center text-[40px] leading-[47.73px] font-sfProText font-extrabold text-white"
        >
          FAQ
        </Typography>
        <div className="flex flex-col gap-[24px]">
          {FaqItems().map((item, index) => (
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
