import { Typography } from "../ui/Typography";
import { cn } from "../utils/cn";
import { AnimatePresence, motion } from "framer-motion";

export const FaqItem = ({
  index,
  question,
  isOpen,
  handleClick,
  answer,
}: {
  index: number;
  question: string;
  isOpen: boolean;
  handleClick: (index: number) => void;
  answer: string;
}) => {
  return (
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
            {question}
          </Typography>
        </div>
        <div className="flex relative w-[14px] h-[14px] transition-all">
          <div className={cn("w-[14px] h-[1px] bg-white")}></div>
          <div
            className={cn(
              "w-[1px] h-[14px] bg-white absolute left-[7px] top-[1px] -translate-x-[50%] -translate-y-[50%] transition duration-150",
              isOpen && " transform rotate-90"
            )}
          ></div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
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
                {answer}
              </Typography>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
