import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  base: "/TeerificU/", 
=======
  base: "/TeerificU/",   // 👈 Correct: matches your repo name (case-sensitive)
>>>>>>> a52e9c2 (Update vite.config.js with correct base path and add deploy script)
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),  // 👈 Optional: convenient alias for imports
    },
  },
})
