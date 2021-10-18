import alias from "@rollup/plugin-alias";
import typescript from "@rollup/plugin-typescript";
import * as path from "path";
import { defineConfig } from "rollup";
// export default defineConfig([buildConfig(process.env.PACKAGE)]);
export default () => {
  const PACKAGE = process.env.PACKAGE;
  console.log(process.env.PACKAGE);
  if (PACKAGE) {
    return buildConfig(PACKAGE);
  } else {
    return [buildConfig("canvasx"), buildConfig("kline")];
  }
};

function pathResolve(url) {
  return path.resolve(__dirname, "./packages", url);
}

function buildConfig(packageName) {
  return {
    input: pathResolve(`${packageName}/src/index.ts`),
    output: {
      file: pathResolve(`${packageName}/dist/index.js`),
      format: "cjs",
      // format: "esm",
      // sourcemap: true,
      // dir: pathResolve(`${packageName}/dist`),
    },
    plugins: [
      alias({
        entries: [
          {
            find: "src",
            replacement: path.resolve(
              __dirname,
              `./packages/${packageName}/src`
            ),
          },
        ],
      }),
      typescript({
        tsconfig: path.resolve(
          __dirname,
          `./packages/${packageName}/tsconfig.json`
        ),
      }),
    ],
  };
}
