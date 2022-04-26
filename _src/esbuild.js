const { sassPlugin } = require("esbuild-sass-plugin");
const watch = process.argv.includes("--watch");

require("esbuild")
  .build({
    bundle: true,
    watch: watch,
    minify: !watch,
    logLevel: "debug",
    entryPoints: ["_src/application.js"],
    outdir: "_site/assets/bundle",
    external: ["/assets/*"],
    loader: {
      ".gif": "file",
      ".jpg": "file",
      ".png": "file",
      ".svg": "file",
      ".eot": "file",
      ".ttf": "file",
      ".woff": "file",
    },
    plugins: [sassPlugin()],
  })
  .catch(() => process.exit(1));
