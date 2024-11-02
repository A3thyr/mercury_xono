import { Typography } from "../ui/Typography";
import TgIcon from "../assets/tgicon.svg";

export const Footer = () => {
  return (
    <footer className=" m-[0_auto]  px-4  bg-[#2834301A] backdrop-blur-2xl max-md:pb-[50px]">
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
              Creating the future of visual graphics
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
                Info
              </Typography>
            </div>
            <a
              href=""
              className="cursor-pointer text-[#ADB2B1] md:text-[16px] md:leading-[24px] font-sfPro font-normal text-[12px] leading-[16px]"
            >
              Term & Condition
            </a>
            <a
              href=""
              className="cursor-pointer text-[#ADB2B1] md:text-[16px] md:leading-[24px] font-sfPro font-normal text-[12px] leading-[16px]"
            >
              Privacy policy
            </a>
          </li>
          <li className="flex flex-col gap-2">
            <div className="w-full">
              <Typography
                tag="p"
                className="font-sfPro font-semibold  md:text-[16px] md:leading-[24px] text-[12px] leading-[16px] text-white"
              >
                Write to us!
              </Typography>
            </div>
            <a
              href=""
              className="cursor-pointer text-[#ADB2B1] md:text-[16px] md:leading-[24px] font-sfPro font-normal text-[12px] leading-[16px] flex items-center"
            >
              ✉️ deal@mercurycgi.one
            </a>
            <a
              href=""
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
                Socials
              </Typography>
            </div>
            <a
              href=""
              className="cursor-pointer text-[#ADB2B1] md:text-[16px] md:leading-[24px] font-sfPro font-normal text-[12px] leading-[16px]"
            >
              Behance
            </a>
            <a
              href=""
              className="cursor-pointer text-[#ADB2B1] md:text-[16px] md:leading-[24px] font-sfPro font-normal text-[12px] leading-[16px]"
            >
              Instagram
            </a>
            <a
              href=""
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
