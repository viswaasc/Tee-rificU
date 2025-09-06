import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
  plugins: [react()],
  base: "/Tee-rificU/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),  // 👈 Optional: convenient alias for imports
    },
  },
})
