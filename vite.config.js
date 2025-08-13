import react from "@vitejs/plugin-react";
import friendlyTypeImports from "rollup-plugin-friendly-type-imports";
import { defineConfig } from "vite";
import Banner from "vite-plugin-banner";
import pkg from "./package.json";

export default defineConfig({
    root: "docs", // 👈 Tells Vite to look for index.html in docs/
    base: "./",
    plugins: [
        react(),
        Banner(
            `/**\n * @${pkg.name} v${pkg.version}\n * ${pkg.description}\n * \n * @license\n * Copyright (c) ${pkg.year} ${pkg.author}\n * ${pkg.homepage}\n */`
        ),
        friendlyTypeImports(),
    ],
    build: {
        outDir: "../dist", // 👈 output to project root /dist
        emptyOutDir: true,
    },
});
