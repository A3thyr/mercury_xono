// import type { FC } from "react";
import { useState, useEffect } from "react";
// import { Typography } from "@/shared/Typography/Typography";
// import { twMerge } from "tailwind-merge";
import { cn } from "../utils/cn";
import { AnchorEvent } from "../utils/AnchorEvent";
import { Button } from "../ui/Button";
// import { BurgerMenu } from "./BurgerMenu";
import { Dropdown } from "./Dropdown";
import { useBurgerMenu } from "../store/useBurgerMenu";
import { useTranslation } from "react-i18next";
// import { Dropdown } from "./Dropdown/Dropdown";
// import { BurgerMenu } from "./BurgerMenu";
// import { useBurgerMenu } from "@/utils/context/BurgerContext";
// import { AnchorEvent } from "@/utils/function/AnchorEvent";
// import React from "react";

export const Header = () => {
  const { isOpen, setIsClose, setIsOpen } = useBurgerMenu();

  const [scrolled, setScrolled] = useState(false);

  const { t } = useTranslation();

  const handleClick = () => {
    if (isOpen === false) {
      setIsOpen();
    } else {
      setIsClose();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed left-1/2 -translate-x-[50%] flex w-full justify-between items-center backdrop-blur-lg bg-[#3D3D543D] px-8 max-w-[95%] md:max-w-[85%] m-[0_auto] mt-[9px] md:mt-8 py-4 md:py-4 rounded-[16px] md:rounded-[16px] transition-all duration-300 z-[100000] header_drop ",
        scrolled &&
          "mt-0 md:max-w-full md:mt-0 max-w-full md:rounded-none rounded-t-none max-md:rounded-none",
        isOpen &&
          "rounded-none mt-0 md:max-w-full md:mt-0  md:rounded-none max-w-full "
      )}
    >
      <div className="flex items-center gap-12 relative z-50">
        <a href="/" className="max-md:hidden relative z-50 w-[138px] h-[28px]">
          <img src="/mercuryLogo.png" alt="logo" />
        </a>
        <a href="/" className="md:hidden relative z-50 w-[30px] h-[22px]">
          <img src="/mobileLogo.png" alt="logo" />
        </a>
      </div>
      <div className="flex max-md:hidden items-center">
        <Button
          onClick={AnchorEvent}
          href="#contact"
          className="text-[16px] leading-4 font-normal py-2 h-[32px] px-4"
        >
          {t("header.contact-btn")}
        </Button>

        <Dropdown />
      </div>
      <button
        onClick={handleClick}
        className="z-[9999] flex space-y-[7px] flex-col items-center justify-center md:hidden"
      >
        <span
          className={cn(
            "block w-[18px] h-[2px] rounded-sm bg-white transition-all duration-300",
            isOpen && " transform rotate-45 translate-y-[7px]"
          )}
        ></span>
        <span
          className={cn(
            "block w-[18px] h-[2px] rounded-sm bg-white transition-all duration-300",
            isOpen && "transform -rotate-45 -translate-y-[2px]"
          )}
        ></span>
      </button>
      {/* <BurgerMenu /> */}
    </header>
  );
};
