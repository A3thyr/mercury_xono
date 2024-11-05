import { twMerge } from "tailwind-merge";
import { Typography } from "../ui/Typography";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

export const Reviews = () => {
  const { t } = useTranslation();

  const reviewsArray = useMemo(
    () => [
      {
        name: t("reviews.user1.name"),
        position: t("reviews.user1.position"),
        description: t("reviews.user1.description"),
      },
      {
        name: t("reviews.user2.name"),
        position: t("reviews.user2.position"),
        description: t("reviews.user2.description"),
      },
      {
        name: t("reviews.user2.name"),
        position: t("reviews.user2.position"),
        description: t("reviews.user2.description"),
      },
      {
        name: t("reviews.user2.name"),
        position: t("reviews.user2.position"),
        description: t("reviews.user2.description"),
      },
      {
        name: t("reviews.user2.name"),
        position: t("reviews.user2.position"),
        description: t("reviews.user2.description"),
      },
      {
        name: t("reviews.user2.name"),
        position: t("reviews.user2.position"),
        description: t("reviews.user2.description"),
      },
    ],
    [t]
  );

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col gap-2  py-[50px] md:py-[128px]">
      <div className="w-full flex items-center justify-center  gap-[8px] relative overflow-hidden h-[186px] md:h-[248px]">
        {reviewsArray.map((item, index) => (
          <div
            key={`review-key-${index}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ animationPlayState: isHovered ? "paused" : "running" }}
            className={twMerge(
              "itemReviewsLeft",
              `item${index}`,
              "flex flex-col py-[16px] w-[272px] md:h-[248px] md:w-[392px] absolute px-[20px] gap-[8px] md:gap-[32px] bg-[#272B323D] backdrop-blur-lg rounded-[32px] h-[186px]"
            )}
          >
            <div className="flex items-center gap-[16px]">
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
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ animationPlayState: isHovered ? "paused" : "running" }}
            className={twMerge(
              "itemReviewsRight",
              `item${index}`,
              "flex flex-col py-[16px] w-[272px] absolute px-[20px] gap-[8px] bg-[#272B323D] backdrop-blur-lg rounded-[32px] h-[186px]"
            )}
          >
            <div className="flex items-center gap-[16px]">
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
