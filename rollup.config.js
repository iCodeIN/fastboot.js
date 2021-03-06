import { terser } from "rollup-plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
    input: "lib/index.js",
    output: [
        {
            file: "dist/fastboot.cjs",
            format: "cjs",
        },
        {
            file: "dist/fastboot.mjs",
            format: "es",
        },
        {
            file: "dist/fastboot.min.cjs",
            format: "cjs",
            plugins: [terser()],
        },
        {
            file: "dist/fastboot.min.mjs",
            format: "es",
            plugins: [terser()],
        },
    ],
    plugins: [nodeResolve()],
};
