import { SyntheticEvent } from "react";

export const AnchorEvent = (event: SyntheticEvent) => {
  event.preventDefault();
  const target = event.target as HTMLAnchorElement;
  const href = target.getAttribute("href");

  if (href && href.startsWith("#")) {
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  }
};
