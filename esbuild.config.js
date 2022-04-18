const { sassPlugin } = require("esbuild-sass-plugin");

const watch = process.argv.includes("--watch");

require("esbuild")
  .build({
    entryPoints: ["_src/index.js"],
    outdir: "assets/bundle",
    watch: watch,
    minify: !watch,
    logLevel: "debug",
    bundle: true,
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
