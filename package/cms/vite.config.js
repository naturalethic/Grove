import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const path = require("path");

export default defineConfig({
    plugins: [react()],
});
