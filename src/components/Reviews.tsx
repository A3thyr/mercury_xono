import { twMerge } from "tailwind-merge";
import { Typography } from "../ui/Typography";
import { useMemo } from "react";

export const Reviews = () => {
  const reviewsArray = useMemo(
    () => [
      {
        img: "/youngmanpfp.png",
        name: "Ethan Parker",
        position: "Senior iOS Engineer",
        description:
          "Working with this team was phenomenal. They transformed our site, strategically enhancing design and development, leading to a tenfold increase in sales. They've exceeded all expectations, blending creativity and effectiveness. Highly recommended.",
      },
      {
        img: "/oldmanpfp.png",
        name: "Jack Hudson",
        position: "Senior iOS Engineer",
        description:
          "Partnering with this team was the game-changer for our business. They revamped our site, boosting its visual appeal and functionality, which catapulted our sales 10x. Truly top-tier in creativity and execution. Highly commendable!",
      },
      {
        img: "/oldmanpfp.png",
        name: "Jack Hudson",
        position: "Senior iOS Engineer",
        description:
          "Partnering with this team was the game-changer for our business. They revamped our site, boosting its visual appeal and functionality, which catapulted our sales 10x. Truly top-tier in creativity and execution. Highly commendable!",
      },
      {
        img: "/oldmanpfp.png",
        name: "Jack Hudson",
        position: "Senior iOS Engineer",
        description:
          "Partnering with this team was the game-changer for our business. They revamped our site, boosting its visual appeal and functionality, which catapulted our sales 10x. Truly top-tier in creativity and execution. Highly commendable!",
      },
      {
        img: "/oldmanpfp.png",
        name: "Jack Hudson",
        position: "Senior iOS Engineer",
        description:
          "Partnering with this team was the game-changer for our business. They revamped our site, boosting its visual appeal and functionality, which catapulted our sales 10x. Truly top-tier in creativity and execution. Highly commendable!",
      },
      {
        img: "/oldmanpfp.png",
        name: "Jack Hudson",
        position: "Senior iOS Engineer",
        description:
          "Partnering with this team was the game-changer for our business. They revamped our site, boosting its visual appeal and functionality, which catapulted our sales 10x. Truly top-tier in creativity and execution. Highly commendable!",
      },
    ],
    []
  );
  return (
    <div className="flex flex-col gap-2  py-[50px] md:py-[128px]">
      <div className="w-full flex items-center justify-center  gap-[8px] relative overflow-hidden h-[186px] md:h-[248px]">
        {reviewsArray.map((item, index) => (
          <div
            key={`review-key-${index}`}
            className={twMerge(
              "itemReviewsLeft",
              `item${index}`,
              "flex flex-col py-[16px] w-[272px] md:h-[248px] md:w-[392px] absolute px-[20px] gap-[8px] md:gap-[32px] bg-[#272B323D] backdrop-blur-lg rounded-[32px] h-[186px]"
            )}
          >
            <div className="flex items-center gap-[16px] md">
              <img
                src={item.img}
                className="w-[32px] h-[32px] md:w-[48px] md:h-[48px]"
              />
              <div className="flex flex-col">
                <Typography
                  tag="h5"
                  className="text-white font-sfPro font-semibold text-[13px] leading-[18px] md:text-[16px] md:leading-[24px] md:tracking-[-0.32px]"
                >
                  {item.name}
                </Typography>
                <Typography
                  tag="h5"
                  className="text-[#AEAEB2] font-sfPro font-normal text-[12px] leading-[16px] md:leading-[20px]"
                >
                  {item.position}
                </Typography>
              </div>
            </div>
            <Typography
              tag="p"
              className="font-sfPro font-normal text-[12px] leading-[16px] md:leading-[24px] text-white"
            >
              {item.description}
            </Typography>
          </div>
        ))}
      </div>
      <div className="w-full flex items-center md:hidden justify-center m- gap-[8px] relative overflow-hidden h-[186px]">
        {reviewsArray.map((item, index) => (
          <div
            key={`review-key-${index}`}
            className={twMerge(
              "itemReviewsRight",
              `item${index}`,
              "flex flex-col py-[16px] w-[272px] absolute px-[20px] gap-[8px] bg-[#272B323D] backdrop-blur-lg rounded-[32px] h-[186px]"
            )}
          >
            <div className="flex items-center gap-[16px]">
              <img src={item.img} className="w-[32px] h-[32px]" />
              <div className="flex flex-col">
                <Typography
                  tag="h5"
                  className="text-white font-sfPro font-semibold text-[13px] leading-[18px]"
                >
                  {item.name}
                </Typography>
                <Typography
                  tag="h5"
                  className="text-[#AEAEB2] font-sfPro font-normal text-[12px] leading-[16px]"
                >
                  {item.position}
                </Typography>
              </div>
            </div>
            <Typography
              tag="p"
              className="font-sfPro font-normal text-[12px] leading-[16px] text-white"
            >
              {item.description}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};
