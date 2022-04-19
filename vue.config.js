const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "^/api": {
        target: process.env.VUE_APP_API_URL,
        changeOrigin: true,
        secure: false,
        pathRewrite: { "^/api": "/api" },
        logLevel: "debug",
      },
      "^/management": {
        target: process.env.VUE_APP_API_URL,
        changeOrigin: true,
        secure: false,
        pathRewrite: { "^/management": "/management" },
        logLevel: "debug",
      },
    },
  },
});
