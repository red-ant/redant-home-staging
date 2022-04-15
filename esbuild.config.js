const { sassPlugin } = require("esbuild-sass-plugin");

require("esbuild")
  .build({
    entryPoints: ["_src/index.js"],
    outdir: "assets/bundle",
    bundle: true,
    minify: true,
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
