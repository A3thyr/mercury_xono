import { twMerge } from "tailwind-merge";
import DellLogo from "../assets/dellLogo.svg";
import PetalLogo from "../assets/petalLogo.svg";
import RakutenLogo from "../assets/rakutenLogo.svg";
import TNYTLogo from "../assets/tnytLogo.svg";
import UpworkLogo from "../assets/upworkLogo.svg";
import ViceLogo from "../assets/viceLogo.svg";

const logosArray = [
  {
    img: <PetalLogo />,
  },
  {
    img: <UpworkLogo />,
  },
  {
    img: <RakutenLogo />,
  },
  {
    img: <TNYTLogo />,
  },
  {
    img: <ViceLogo />,
  },
  {
    img: <DellLogo />,
  },
];

export const Partners = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <div className="w-full flex items-center justify-center gap-[20px] relative overflow-hidden h-[320px]">
          {logosArray.map((logo, index) => (
            <div
              key={`logo-key-${index}`}
              className={twMerge(
                "itemLogosDesktop",
                `item${index}`,
                "flex items-center justify-center"
              )}
            >
              {logo.img}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
