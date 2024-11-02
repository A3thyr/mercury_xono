export const sendMessage = async (message: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN;
  const chatId = "-4135969909";
  const parseMode = "Markdown";
  const encodedMessage = encodeURIComponent(message);

  const url = `${baseUrl}/sendMessage?chat_id=${chatId}&text=${encodedMessage}&parse_mode=${parseMode}`;
  const response = await fetch(url);

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Failed to send message:", errorText);
    throw new Error("Failed to send message to Telegram");
  }
  console.log("Message sent successfully");
};
