import { twMerge } from "tailwind-merge";
import Analytics from "../assets/analytics.svg";
import Pie from "../assets/pie.svg";
import Security from "../assets/security.svg";
import { Section } from "../ui/Section";
import { Typography } from "../ui/Typography";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export const Benefits = () => {
  const { t } = useTranslation();
  const benefitsArray = useMemo(
    () => [
      {
        logo: <Security />,
        title: t("benefits.first.title"),
        description: t("benefits.first.description"),
      },
      {
        logo: <Pie />,
        title: t("benefits.second.title"),
        description: t("benefits.second.description"),
      },
      {
        logo: <Analytics />,
        title: t("benefits.third.title"),
        description: t("benefits.third.description"),
      },
    ],
    [t]
  );
  return (
    <Section className={twMerge("max-md:pt-[20px] md:pt-[50px] pb-[90px]")}>
      <Typography
        tag="h1"
        className="font-sfProText text-center font-extrabold text-white text-[40px] leading-[47.73px]"
      >
        {t("benefits.title")}
      </Typography>
      <div
        id="benefits"
        className="flex flex-col md:flex-row items-start justify-center md:justify-between md:max-w-[1240px] gap-8"
      >
        {benefitsArray.map((item, index) => (
          <div
            key={`benefits-item-${index}`}
            className="flex items-center gap-[10px] md:w-[392px]"
          >
            <div className="w-[64px] h-[64px] flex items-center justify-center">
              {item.logo}
            </div>
            <div className="flex flex-col items-start gap-2 max-md:max-w-[75%] ">
              <Typography
                tag="h3"
                className="font-sfPro font-medium text-white md:text-[26px] md:leading-[28.64px] text-[21px] leading-[25.06px]"
              >
                {item.title}
              </Typography>
              <Typography
                tag="p"
                className="font-sfPro font-normal text-[#ADB2B1] md:text-[16px] md:leading-[19.09px] text-[12px] leading-[14.32px]"
              >
                {item.description}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
