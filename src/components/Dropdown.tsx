import { AnimatePresence, motion } from "framer-motion";
import DownArrow from "../assets/downarrow.svg";
import { useMemo, useState } from "react";
import { useSetLocale } from "../store/useSetLocale";
import i18n from "../utils/i18n/i18n";

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { locale, setLocale } = useSetLocale();

  const openDropdown = () => {
    if (isOpen === false) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  const setLanguage = (value: string) => {
    setLocale(value);
    i18n.changeLanguage(value);
    if (isOpen === false) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  const langArray = useMemo(
    () => [
      { text: "🇬🇧 English", value: "en" },
      { text: "🇷🇺 Russian", value: "ru" },
      { text: "🇺🇦 Ukrainian", value: "ua" },
    ],
    []
  );
  return (
    <div className="relative z-50">
      <div className="flex flex-col relative z-50 max-md:w-fit">
        <div
          onClick={openDropdown}
          className="text-white rounded-[80px] px-4 py-2 flex items-center gap-1 text-[12px] md:text-[16px] leading-[16px] cursor-pointer max-md:text-[18px] max-md:text-white max-md:pl-0 max-md:w-fit"
        >
          {locale === "en"
            ? "English"
            : locale === "ru"
              ? "Русский"
              : "Українська"}
          <div className="transform rotate-180">
            <DownArrow />
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.ul className="flex flex-col absolute top-[70px] list-none m-0 z-[50] p-2 gap-2 w-[120px] rounded bg-[#3D3D543D] backdrop-blur-2xl">
              {langArray.map((item, index) => (
                <li
                  value={item.value}
                  key={`lang-key-${index}`}
                  onClick={() => setLanguage(item.value)}
                  className="p-1 cursor-pointer font-sfPro text-white text-[12px] leading-[16px] flex gap-2 hover:font-semibold transition-all duration-300"
                >
                  {item.text}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
