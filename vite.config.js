import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "127.0.0.1",
  },
  plugins: [
    react({
      babel: {
        plugins: ["babel-plugin-macros", "babel-plugin-styled-components"],
      },
    }),
    svgr(), // svg를 리액트 컴포넌트화해줌
  ],
  define: {
    "process.env": {},
  },
});
