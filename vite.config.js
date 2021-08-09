import { defineConfig } from "vite";
import eal from "eal/dist/plugin.js";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), eal()],
});
