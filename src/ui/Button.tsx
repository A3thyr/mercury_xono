import type { ComponentProps, FC, ReactNode } from "react";
import { cn } from "../utils/cn";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
}

type ButtonComponent = FC<ButtonProps>;

export const Button: ButtonComponent = ({
  children,
  // href,
  variant = "primary",
  className,
  ...props
}) => {
  const variants = {
    primary: "bg-[#0084FF]",
    secondary: "bg-[#545456CC]",
  };

  return (
    <button
      // href={`${href}`}
      className={cn(
        "z-[2] flex items-center justify-center rounded-[80px] text-white transition-all duration-300",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
