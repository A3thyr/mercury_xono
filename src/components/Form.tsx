import { useState } from "react";
import { Button } from "../ui/Button";
import { Section } from "../ui/Section";
import { Typography } from "../ui/Typography";
// import { sendEmail } from "../utils/sendEmail";
import { sendMessage } from "../utils/sendMessage";
import { twMerge } from "tailwind-merge";
// import toast from "react-hot-toast";

export const Form = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

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
      className="formBg pb-[70px] backdrop-blur-2xl"
    >
      <Section className={twMerge("md:max-w-[85%]")}>
        <Typography
          tag="h1"
          className="font-mont font-bold text-white text-[40px] leading-[48.76px]"
        >
          Write to us!
        </Typography>
        <div className="flex items-center gap-[24px]">
          <Button className="font-sfPro font-medium text-white text-[12px] md:text-[16px] leading-[24px] px-[30px] md:px-[61px] md:py-[16px] py-[4.5px]">
            Telegram
          </Button>
          <Button
            variant="secondary"
            className="font-sfPro font-medium text-white text-[12px] md:text-[16px] leading-[24px] px-[30px] md:px-[55px] md:py-[16px] py-[4.5px]"
          >
            Mail
          </Button>
        </div>
        <div className="flex flex-col gap-[20px] md:max-w-[520px]">
          <Typography
            tag="h2"
            className="font-mont font-semibold text-white text-[30px] leading-[36.57px]"
          >
            Or leave a request
          </Typography>
          <div className="flex flex-col gap-[16px]">
            <input
              placeholder="Your name"
              required
              name="name"
              onChange={(e) => setName(e.target.value)}
              className="border-[2px] border-[#F2F2F7] outline-none text-white border-solid rounded-[8px] p-4 bg-transparent font-sfPro font-normal text-[16px] leading-[24px] placeholder:text-white"
            />
            <input
              placeholder="Telegram or email"
              required
              name="senderEmail"
              onChange={(e) => setContact(e.target.value)}
              className="border-[2px] border-[#F2F2F7] outline-none text-white border-solid rounded-[8px] p-4 bg-transparent font-sfPro font-normal text-[16px] leading-[24px] placeholder:text-white"
            />
          </div>
          <textarea
            placeholder="Enter your notes here"
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
            {isSending ? "Sending..." : "Send"}
          </Button>
        </div>
      </Section>
    </form>
  );
};
