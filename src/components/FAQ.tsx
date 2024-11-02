import { twMerge } from "tailwind-merge";
import { Section } from "../ui/Section";
import { Typography } from "../ui/Typography";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cn } from "../utils/cn";

const faqArray = [
  {
    question: "What credit score do I need to apply for a credit card?",
    answer:
      "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
  },
  {
    question: "How can I apply for a credit card online?",
    answer:
      "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
  },
  {
    question: "Are there any annual fees associated with the credit card?",
    answer:
      "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
  },
  {
    question: "How long does it take to receive the credit card once approved?",
    answer:
      "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
  },
  {
    question: "How can I check my credit card balance and transactions?",
    answer:
      "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
  },
  {
    question: " What should I do if my credit card is lost or stolen?",
    answer:
      "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
  },
  {
    question: "Is my credit card information secure?",
    answer:
      "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
  },
];

export const FAQ = () => {
  const [isOpen, setIsOpen] = useState(0);

  const handleClick = (index: number) => {
    setIsOpen(index);
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
          {faqArray.map((item, index) => (
            <div
              onClick={() => handleClick(index)}
              key={`faq-key-${index}`}
              className="w-full border-b border-b-[#F2F2F7] border-b-solid select-none"
            >
              <div className="cursor-pointer w-full flex items-center justify-between select-none">
                <div className="w-full">
                  <Typography
                    tag="h5"
                    className="font-sfPro font-normal text-white md:text-[24px] md:leading-[32px] text-[12px] leading-[16px] pb-[8px]"
                  >
                    {item.question}
                  </Typography>
                </div>
                <div className="flex relative w-[14px] h-[14px] transition-all">
                  <div
                    className={cn(
                      "w-[14px] h-[1px] bg-white",
                      isOpen === index && ""
                    )}
                  ></div>
                  <div
                    className={cn(
                      "w-[1px] h-[14px] bg-white absolute left-[7px] top-[1px] -translate-x-[50%] -translate-y-[50%] transition duration-150",
                      isOpen === index && " transform rotate-90"
                    )}
                  ></div>
                </div>
              </div>
              <AnimatePresence>
                {isOpen === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-full">
                      <Typography
                        tag="p"
                        className="text-[#ADB2B1] font-sfPro font-normal text-[16px] leading-[24px] pb-4"
                      >
                        {item.answer}
                      </Typography>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};
