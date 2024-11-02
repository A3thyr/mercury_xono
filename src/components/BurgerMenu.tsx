import { AnimatePresence, motion } from "framer-motion";
import TgBurger from "../assets/tgiconburger.svg";
import { useBurgerMenu } from "../store/useBurgerMenu";
import { Button } from "../ui/Button";
import { Typography } from "../ui/Typography";
import { AnchorEvent } from "../utils/AnchorEvent";
import { SyntheticEvent, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Dropdown } from "./Dropdown";
// import { useSetLocale } from "../store/useSetLocale";
// import { cn } from "../utils/cn";

export const BurgerMenu = () => {
  const { isOpen, setIsClose } = useBurgerMenu();

  const { t } = useTranslation();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  const handleNavigationButton = (event: SyntheticEvent) => {
    setIsClose();
    AnchorEvent(event);
  };

  return (
    <div className="md:hidden">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[4.4%] left-0 w-full h-full backdrop-blur-lg z-[9999] bg-[#3D3D543D]"
          >
            <div className="flex flex-col justify-between h-[80vh] px-8">
              <div className="flex flex-col gap-4 pt-[20px]">
                <a
                  href="#discover"
                  onClick={handleNavigationButton}
                  className="font-sfPro font-medium text-[28px] leading-[32px] tracking-[-0.02%] text-white"
                >
                  Discover our projects
                </a>
                <a
                  href="#benefits"
                  onClick={handleNavigationButton}
                  className="font-sfPro font-medium text-[28px] leading-[32px] tracking-[-0.02%] text-white"
                >
                  Our benefits
                </a>
                <a
                  href="#faq"
                  onClick={handleNavigationButton}
                  className="font-sfPro font-medium text-[28px] leading-[32px] tracking-[-0.02%] text-white"
                >
                  FAQ
                </a>
              </div>
              <div className="flex flex-col gap-[40px]">
                <Button
                  onClick={handleNavigationButton}
                  href="#contact"
                  className="font-sfPro font-normal text-[16px] leading-[24px] text-white py-[8px]"
                >
                  Contact us
                </Button>
                <div className="pt-4 border-t border-[#2B2B2B] flex flex-col gap-4">
                  <Dropdown />
                  <div className="flex items-center gap-2">
                    <a
                      href=""
                      className=" w-full h-[48px] flex items-center justify-center rounded-lg bg-[#272A4466] backdrop-blur-2xl"
                    >
                      <TgBurger />
                    </a>
                    <a
                      href=""
                      className="w-full h-[48px] flex items-center justify-center rounded-lg bg-[#272A4466] backdrop-blur-2xl"
                    >
                      <img src="/mail.png" className="w-[20px] h-[20px]" />
                    </a>
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <div className="w-full">
                      <Typography
                        tag="p"
                        className="font-geist font-normal text-[11px] leading-[16px] text-white"
                      >
                        {t("rights")}
                      </Typography>
                    </div>
                    <div className="w-full">
                      <Typography
                        tag="p"
                        className="font-geist font-normal text-right text-[11px] leading-[16px] text-white"
                      >
                        {t("policy")}
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};