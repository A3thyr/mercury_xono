import { Typography } from "../ui/Typography";
import TgIcon from "../assets/tgicon.svg";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className=" m-[0_auto]  px-4  bg-[#2834301A] backdrop-blur-lg max-md:pb-[50px]">
      <div className="py-[21.37px] md:py-[40px] flex flex-col md:m-[0_auto] md:max-w-[1240px] md:flex-row  gap-6 md:gap-[137px]">
        <div className="flex flex-col gap-2">
          <div className="w-full">
            <img
              src="/mercuryLogo.png"
              alt="logo"
              className="w-[70px] h-[14px] md:w-[178px] md:h-[36px]"
            />
          </div>
          <div className="w-full">
            <Typography
              tag="p"
              className="font-sfPro font-normal text-[12px] md:text-[16px] md:leading-[24px] md:tracking-[-3%] leading-[16px] text-[#ADB2B1]"
            >
              {t("footer.description")}
            </Typography>
          </div>
        </div>
        <ul className=" list-none m-0 p-0 flex flex-col md:flex-row gap-6 md:gap-16">
          <li className="flex flex-col gap-2 ">
            <div className="w-full">
              <Typography
                tag="p"
                className="font-sfPro font-semibold  md:text-[16px] md:leading-[24px] text-[12px] leading-[16px] text-white"
              >
                {t("footer.info.title")}
              </Typography>
            </div>
            <a
              href=""
              className="cursor-pointer text-[#ADB2B1] md:text-[16px] md:leading-[24px] font-sfPro font-normal text-[12px] leading-[16px]"
            >
              {t("footer.info.terms")}
            </a>
            <a
              href=""
              className="cursor-pointer text-[#ADB2B1] md:text-[16px] md:leading-[24px] font-sfPro font-normal text-[12px] leading-[16px]"
            >
              {t("footer.info.policy")}
            </a>
          </li>
          <li className="flex flex-col gap-2">
            <div className="w-full">
              <Typography
                tag="p"
                className="font-sfPro font-semibold  md:text-[16px] md:leading-[24px] text-[12px] leading-[16px] text-white"
              >
                {t("footer.write")}
              </Typography>
            </div>
            <a
              href="mailto:deal@mercurycgi.one"
              target="_blank"
              className="cursor-pointer text-[#ADB2B1] md:text-[16px] md:leading-[24px] font-sfPro font-normal text-[12px] leading-[16px] flex items-center"
            >
              ✉️ deal@mercurycgi.one
            </a>
            <a
              href="https://t.me/mercurycgi"
              target="_blank"
              className="cursor-pointer gap-2 text-[#ADB2B1] md:text-[16px] md:leading-[24px] font-sfPro font-normal text-[12px] leading-[16px] flex items-center"
            >
              <TgIcon />
              @mercurycgi
            </a>
          </li>
          <li className="flex flex-col gap-2">
            <div className="w-full">
              <Typography
                tag="p"
                className="font-sfPro font-semibold  md:text-[16px] md:leading-[24px] text-[12px] leading-[16px] text-white"
              >
                {t("footer.socials")}
              </Typography>
            </div>
            <a
              href="https://www.behance.net/mercurycgi"
              target="_blank"
              className="cursor-pointer text-[#ADB2B1] md:text-[16px] md:leading-[24px] font-sfPro font-normal text-[12px] leading-[16px]"
            >
              Behance
            </a>

            <a
              href="https://t.me/mercurycgi"
              target="_blank"
              className="cursor-pointer text-[#ADB2B1] md:text-[16px] md:leading-[24px] font-sfPro font-normal text-[12px] leading-[16px]"
            >
              Telegram
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full md:m-[0_auto] md:max-w-[1240px] pt-[24px] md:pb-[36px]">
        <Typography
          tag="p"
          className="font-sfPro md:text-left text-center font-normal text-[12px] leading-[16px]  md:leading-[20px] text-[#8E8E93]"
        >
          2024. Copyright © MERCURYCGI.ONE
        </Typography>
      </div>
    </footer>
  );
};
