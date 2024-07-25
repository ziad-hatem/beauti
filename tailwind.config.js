/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tajawal: ["Tajawal"],
        awesome: ["Font Awesome 6 Free"],
      },
      colors: {
        primery: "#F39406",
        maingray: "#F4F0F0",
        lightgray: "#e4e4e4",
        secone: "#383838",
        sectwo: "#666464",
        secthree: "#838383",
        green: "#3ADA2C",
        lightpink: "#FEE7EE",
        footergray: "#FAFAFA",
        overlay: "rgba(56, 56, 56, 0.65)",
        headerMenusHover: "#F5F0F0",
      },
      screens: {
        xs: "300px",
        mobileLg: "375px",
        tabletStart: "488px",
        pcStart: "992px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1380px",
      },
      fontSize: {
        8: "8px",
        9: "9px",
        10: "10px",
        11: "11px",
        14: "14px",
        15: "15px",
        17: "17px",
        19: "19px",
        21: "21px",
        22: "22px",
      },
      borderRadius: {
        7: "7px",
        10: "10px",
        13: "13px",
        15: "15px",
        19: "19px",
        20: "20px",
      },
      boxShadow: {
        headerDropMenu: " 0px 4px 5px 0px rgba(0, 0, 0, 0.25)",
        langDropMenu: " 4px 4px 4px 0px rgba(0, 0, 0, 0.09)",
      },
    },
  },

  plugins: [],
};
