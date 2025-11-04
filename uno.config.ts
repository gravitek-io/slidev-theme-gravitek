import { defineConfig, presetAttributify, presetUno } from "unocss";

export default defineConfig({
  presets: [presetAttributify(), presetUno()],
  theme: {
    colors: {
      // Gravitek brand colors
      gravitek: {
        primary: "#45BA6B ",
        secondary: "#666666",
        accent: "#a259ff",
      },
    },
  },
});
