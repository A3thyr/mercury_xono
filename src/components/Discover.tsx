import { twMerge } from "tailwind-merge";
import { Section } from "../ui/Section";
import { Typography } from "../ui/Typography";
import { useTranslation } from "react-i18next";

export const Discover = () => {
  const { t } = useTranslation();
  return (
    <div id="discover">
      <Section className={twMerge("max-md:pt-[20px] max-md:pb-[40px]")}>
        <Typography
          tag="h1"
          className=" font-sfProText text-center font-extrabold text-[40px] leading-[47.73px] text-white"
        >
          {t("discover")}
        </Typography>
      </Section>
    </div>
  );
};
