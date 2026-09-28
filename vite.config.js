import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages publishes this repository under /star_of_elegance/.
  base: "/star_of_elegance/",
  optimizeDeps: {
    include: ["swiper"]
  },
  // base: '/static/', // أو المسار الذي يناسب إعدادات Django
});
