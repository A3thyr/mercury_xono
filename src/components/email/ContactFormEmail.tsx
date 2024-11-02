import { FC } from "react";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
  name: string;
};

export const ContactFormEmail: FC<ContactFormEmailProps> = ({
  message,
  senderEmail,
  name,
}) => {
  return (
    <div>
      <h1>Hi, I'm {name}</h1>
      <h3>{senderEmail}</h3>
      <p>{message}</p>
    </div>
  );
};
