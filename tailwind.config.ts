import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat"],
        sfPro: ["SF Pro"],
        sfCompact: ["SF Compact"],
        mplus: ["M PLUS 1"],
        sfProText: ["SF Pro Text"],
        geist: ["Geist"],
      },
    },
  },
  plugins: [],
};

export default config;
