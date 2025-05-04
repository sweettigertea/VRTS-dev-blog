import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Import the necessary dependencies from @tailwindcss/vite
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
