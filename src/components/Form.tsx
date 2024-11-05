import { useState } from "react";
import { Button } from "../ui/Button";
import { Section } from "../ui/Section";
import { Typography } from "../ui/Typography";
// import { sendEmail } from "../utils/sendEmail";
import { sendMessage } from "../utils/sendMessage";
import { twMerge } from "tailwind-merge";
import { useTranslation } from "react-i18next";
// import toast from "react-hot-toast";

export const Form = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const { t } = useTranslation();

  const handleSendMessage = async () => {
    if (!name || !contact || !message) {
      alert("Please, fill in all fields");
      return;
    }

    const isEmail = contact.includes(".") && /@/.test(contact);
    const contactType = isEmail ? "Почта" : "Телеграм";
    const formattedMessage = `Имя: ${name}\n${contactType}: ${contact}\nСообщение: ${message}`;

    setIsSending(true);
    try {
      await sendMessage(formattedMessage);

      setName("");
      setContact("");
      setMessage("");
    } catch (error) {
      console.log(error);
    } finally {
      setIsSending(false);
    }
  };
  return (
    <form
      id="contact"
      onSubmit={(e) => e.preventDefault()}
      className={twMerge(
        "formBg relative h-[690px] md:h-[900px] backdrop-blur-2xl",
        window.innerWidth >= 1637 && "md:h-[950px]",
        window.innerWidth >= 1800 && "md:h-[1060px]"
      )}
    >
      <img
        src="/6.png"
        alt=""
        className="absolute w-full h-[690px] md:hidden"
      />

      <Section
        className={twMerge(
          "md:max-w-[85%] md:gap-[24px] z-[999]",
          window.innerWidth >= 1637 && "md:pt-[168px]",
          window.innerWidth >= 1800 && "md:pt-[238px]"
        )}
      >
        <Typography
          tag="h1"
          className="font-mont font-bold text-white text-[40px] leading-[48.76px]"
        >
          {t("form.title")}
        </Typography>
        <div className="flex items-center gap-[24px]">
          <Button className="font-sfPro font-medium text-white text-[12px] md:text-[16px] leading-[24px] px-[30px] md:px-[61px] md:py-[16px] py-[4.5px]">
            <a
              href="https://t.me/mercurycgi"
              target="_blank"
              className="font-sfPro font-medium text-white text-[12px] md:text-[16px] leading-[24px]"
            >
              Telegram
            </a>
          </Button>
          <Button
            variant="secondary"
            className="font-sfPro font-medium text-white text-[12px] md:text-[16px] leading-[24px] px-[30px] md:px-[55px] md:py-[16px] py-[4.5px]"
          >
            <a href="mailto:deal@mercurycgi.one" target="_blank">
              {t("form.btns.mail")}
            </a>
          </Button>
        </div>
        <div className="flex flex-col gap-[20px] md:max-w-[520px]">
          <Typography
            tag="h2"
            className="font-mont font-semibold text-white text-[30px] leading-[36.57px]"
          >
            {t("form.request")}
          </Typography>
          <div className="flex flex-col gap-[16px]">
            <input
              placeholder={t("form.placeholders.name")}
              required
              name="name"
              onChange={(e) => setName(e.target.value)}
              className="border-[2px] border-[#F2F2F7] outline-none text-white border-solid rounded-[8px] p-4 bg-transparent font-sfPro font-normal text-[16px] leading-[24px] placeholder:text-white"
            />
            <input
              placeholder={t("form.placeholders.mail")}
              required
              name="senderEmail"
              onChange={(e) => setContact(e.target.value)}
              className="border-[2px] border-[#F2F2F7] outline-none text-white border-solid rounded-[8px] p-4 bg-transparent font-sfPro font-normal text-[16px] leading-[24px] placeholder:text-white"
            />
          </div>
          <textarea
            placeholder={t("form.placeholders.notes")}
            required
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            className="border-[2px] resize-none border-[#F2F2F7] outline-none text-white border-solid h-[124px] rounded-[8px] p-4 bg-transparent font-sfPro font-normal text-[16px] leading-[24px] placeholder:text-white"
          />
          <Button
            onClick={handleSendMessage}
            disabled={isSending || !name || !contact || !message}
            className="w-fit font-sfPro font-medium text-white disabled:bg-slate-500 text-[12px] transition duration-150 md:text-[16px] md:py-[18px] md:px-[66px] leading-[16px] px-[32px] py-[8px]"
          >
            {isSending ? t("form.btns.sending") : t("form.btns.send")}
          </Button>
        </div>
      </Section>
    </form>
  );
};
