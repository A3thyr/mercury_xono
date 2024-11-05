import { twMerge } from "tailwind-merge";
import { Button } from "../ui/Button";
import { Section } from "../ui/Section";
import { Typography } from "../ui/Typography";
import { AnchorEvent } from "../utils/AnchorEvent";
import { cn } from "../utils/cn";
import { useTranslation } from "react-i18next";

export const Intro = () => {
  const { t } = useTranslation();

  return (
    <Section
      className={cn(
        "items-center justify-center pb-[65px] gap-[24px] md:gap-[32px] md:h-[912px] h-[300px] md:m-0 md:max-w-full",
        "introBg"
      )}
    >
      <Typography
        tag="h1"
        className="w-full text-center text-white md:font-mont font-black text-[40px] leading-[32px] font-sfPro md:text-[100px] md:leading-[121.9px]"
      >
        MERCURY
      </Typography>

      <Typography
        tag="span"
        className="w-full text-center md:font-sfCompact md:font-light md:text-[30px] md:leading-[35.8px] text-white font-mont font-medium text-[20px] leading-[24.38px]"
      >
        {t("intro.description")}
      </Typography>
      <Button
        onClick={AnchorEvent}
        href="#discover"
        className={twMerge(
          "font-sfPro font-normal text-[12px] leading-[16px] md:text-[16px] md:py-[14.5px] md:px-[51.5px] py-[8px] px-[16px]"
        )}
      >
        {t("intro.btn")}
      </Button>
    </Section>
  );
};
