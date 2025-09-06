/// <reference types="vite/client" />

// Only add your own custom environment variables here.
// Do NOT redeclare BASE_URL; it's already defined by Vite.
interface ImportMetaEnv {
  // readonly BASE_URL: string;  <-- REMOVE this line
  readonly VITE_API_URL?: string; // example of your custom env variable
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
