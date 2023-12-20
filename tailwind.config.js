/** @type {import('tailwindcss').Config} */
export default {
content: ["./src/**/*.{js,jsx,ts,tsx,mdx}", "./index.html"],
  theme: {
    screens: {
      md: "768px",
      // => @media (max-width: 769px) { ... }
      "rounded-full": "50px",
    },
    backgroundColors: {
      "bg-gray-200": "rgb(235,235,235)",
    },
    // width:{
    //   'w-73': '18.3125 rem',
    // }
  },
  plugins: [],
};
