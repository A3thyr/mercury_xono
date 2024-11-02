import { FC, ReactNode } from "react";
import { cn } from "../utils/cn";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

type SectionComponent = FC<SectionProps>;

export const Section: SectionComponent = ({ children, className }) => {
  return (
    <section
      className={cn(
        "md:py-[128px] max-w-[1280px] m-[0_auto] px-6 md:px-5 flex flex-col md:gap-[64px] gap-[32px] max-md:pt-[75px]",
        className
      )}
    >
      {children}
    </section>
  );
};
