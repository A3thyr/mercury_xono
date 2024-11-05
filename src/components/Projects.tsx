// import { useMemo } from "react";
// import { twMerge } from "tailwind-merge";
// import { Swiper, SwiperSlide } from "swiper/react";
import "../../node_modules/swiper/swiper.scss";
import Video from "../assets/videoplayback.mp4";
// import { FreeMode } from "swiper/modules";

export const Projects = () => {
  // const projectArray = useMemo(
  //   () => [
  //     {
  //       href: "/",
  //     },
  //     {
  //       href: "/",
  //     },
  //     {
  //       href: "/",
  //     },
  //     {
  //       href: "/",
  //     },
  //     {
  //       href: "/",
  //     },
  //     {
  //       href: "/",
  //     },
  //   ],
  //   []
  // );

  // const widthForSwiper = Math.max(window.innerWidth || 0);
  return (
    <>
      <video
        src={Video}
        className="w-[85%] max-w-[1240px] h-full  m-auto backdrop-blur-xl bg-[#272A4466] rounded-[16px] md:rounded-[24px]"
        controls
        loop
        muted
        autoPlay
      ></video>
      {/* <Swiper
        slidesPerView={"auto"}
        freeMode={true}
        spaceBetween={widthForSwiper >= 768 ? "32px" : "12px"}
        modules={[FreeMode]}
      >
        {projectArray.map((proj, index) => (
          <SwiperSlide
            key={`project-id-${index}`}
            className={twMerge(
              index === length - 1 && "mr-[150px]",
              "!w-[258px] shrink-0 !h-[320px]  snap-center rounded-[16px] md:!w-[450px] md:!h-[450px] md:rounded-[24px] backdrop-blur-xl bg-[#272A4466] ",
              "slide"
            )}
          >
            <a
              href={`${proj.href}`}
              className="bg-white rounded-[50%] flex items-center justify-center py-[8.5px] absolute bottom-[24px] right-[24px] px-[11px]"
            >
              <RightArrow />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        slidesPerView={"auto"}
        freeMode={true}
        spaceBetween={widthForSwiper >= 768 ? "32px" : "12px"}
        modules={[FreeMode]}
      >
        {projectArray.map((proj, index) => (
          <SwiperSlide
            key={`project-id-${index}`}
            className={twMerge(
              index === length - 1 && "mr-[150px]",
              "!w-[258px]  shrink-0 !h-[320px] snap-center transform hover:scale-105 transition-all rounded-[16px] md:!w-[450px] md:!h-[450px] md:rounded-[24px] backdrop-blur-xl bg-[#272A4466] ",
              "slide"
            )}
          >
            <a
              href={`${proj.href}`}
              className="bg-white rounded-[50%] flex items-center justify-center py-[8.5px] absolute bottom-[24px] right-[24px] px-[11px]"
            >
              <RightArrow />
            </a>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </>
  );
};

// const RightArrow = () => {
//   return (
//     <svg
//       width="10"
//       height="15"
//       viewBox="0 0 10 15"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M9.07812 7.35938C9.07812 7.55208 9.03906 7.73177 8.96094 7.89844C8.88802 8.0599 8.77083 8.21875 8.60938 8.375L2.71094 14.1562C2.47135 14.3958 2.17969 14.5156 1.83594 14.5156C1.61198 14.5156 1.40365 14.4583 1.21094 14.3438C1.01823 14.2344 0.864583 14.0859 0.75 13.8984C0.640625 13.7109 0.585938 13.5026 0.585938 13.2734C0.585938 12.9297 0.71875 12.6224 0.984375 12.3516L6.13281 7.35156L0.984375 2.35938C0.71875 2.09896 0.585938 1.79427 0.585938 1.44531C0.585938 1.21615 0.640625 1.00781 0.75 0.820312C0.864583 0.632812 1.01823 0.484375 1.21094 0.375C1.40365 0.260417 1.61198 0.203125 1.83594 0.203125C2.17969 0.203125 2.47135 0.320312 2.71094 0.554688L8.60938 6.33594C8.77083 6.49219 8.88802 6.65365 8.96094 6.82031C9.03385 6.98177 9.07292 7.16146 9.07812 7.35938Z"
//         fill="black"
//       />
//     </svg>
//   );
// };
