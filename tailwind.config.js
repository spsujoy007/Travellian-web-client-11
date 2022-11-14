/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#307b8e",

          secondary: "#88dd61",

          accent: "#71d127",

          neutral: "#1E292F",

          "base-100": "#323135",

          info: "#899CF0",

          success: "#45D3BC",

          warning: "#F3D74F",

          error: "#F7407A",
        },
        light: {
          primary: "#590f91",

          secondary: "#49f46b",

          accent: "#ff77b4",

          neutral: "#201A2E",

          "base-100": "#F0F3F4",

          info: "#90BFF9",

          success: "#269C59",

          warning: "#995606",

          error: "#FC6975",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
