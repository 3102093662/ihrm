const { defineConfig } = require("@vue/cli-service")
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "./assets",
  devServer: {
    port: 7266,
    host: "0.0.0.0",
    https: false,
    open: false,
    proxy: {
      "/api": {
        changeOrigin: true,
        secure: false,
        target: "https://wwww.baidu.com",
        pathRewrite: {
          "^.api": ""
        }
      }
    }
  }
})
