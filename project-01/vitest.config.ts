/// <reference types="vitest" />

import {defineConfig} from "vitest/config";
import react from '@vitejs/plugin-react';
import path from "path";

export default defineConfig({
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: [
            "./src/setupTests.ts"
        ],
        include: ["src/**/*.test.tsx"],
    },
    resolve: {
        alias: [{
            find: '@',
            replacement: path.resolve(__dirname, "./src")
        }],
    },
});