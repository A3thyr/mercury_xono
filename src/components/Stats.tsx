import { Typography } from "../ui/Typography";

const statArray = [
  {
    digit: "5 year",
    description: "Experience",
  },
  {
    digit: "10",
    description: "Completed Projects",
  },
  {
    digit: "5",
    description: "Employees",
  },
  {
    digit: "40+",
    description: "Worldwide Clients",
  },
];

export const Stats = () => {
  return (
    <div className="flex flex-col m-[0_auto] md:flex-row mt-[45px] max-w-[85%]  md:max-w-[1240px] rounded-[32px] items-center justify-center md:justify-between gap-[15px] md:px-[64px] bg-[#3D3D543D] md:py-[64px] py-[29px] backdrop-blur-lg">
      {statArray.map((stat, index) => (
        <div
          key={`stat-key-${index}`}
          className="flex flex-col items-center justify-center gap-1"
        >
          <Typography
            tag="h2"
            className="font-sfPro font-bold text-[40px] md:text-[48px] leading-[56px] tracking-[-0.32px] text-white"
          >
            {stat.digit}
          </Typography>
          <Typography
            tag="h5"
            className="font-sfPro font-medium text-[12px] md:text-[16px] leading-[24px] text-[#0084FF] "
          >
            {stat.description}
          </Typography>
        </div>
      ))}
    </div>
  );
};
