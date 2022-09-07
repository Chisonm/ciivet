module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1120px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        gray_52: "#fff9f6",
        gray_51: "#f9fdff",
        deep_orange_50: "#fbeee6",
        red_101: "#ffe0ce",
        gray_50: "#fff9f5",
        red_100: "#ecd6c8",
        white_A700_ab: "#ffffffab",
        deep_orange_400: "#ff8b46",
        gray_600: "#6e6e6e",
        gray_700: "#626262",
        bluegray_300_33: "#91aebb33",
        gray_601: "#7b7b7b",
        gray_400: "#c0c0c0",
        gray_401: "#c4c4c4",
        bluegray_900_33: "#12344433",
        orange_A700: "#fd650b",
        gray_900: "#191919",
        gray_603: "#787878",
        bluegray_100: "#d6d6d6",
        yellow_50: "#fff7f0",
        gray_900_9e: "#1919199e",
        gray_300: "#dbdbdb",
        bluegray_600: "#406f85",
        bluegray_101: "#cfcfcf",
        white_A700: "#ffffff",
      },
      borderRadius: {
        radius4: "4px",
        radius8: "8px",
        radius10: "10px",
        radius14: "14px",
        radius16: "16px",
        radius20: "20px",
        radius30: "30px",
        radius40: "40px",
        radius50: "50%",
      },
      boxShadow: {
        bs: "0px 30px  30px 0px #91aebb33",
        bs1: "0px 30px  60px 0px #12344433",
      },
      fontFamily: { manrope: "Manrope", markoone: "Marko One" },
      letterSpacing: { ls1: "1px" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
