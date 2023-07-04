const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
	transpileDependencies: true,
	lintOnSave: false,
	publicPath: "./",
	assetsDir: "assets",
	outputDir: "dist",
	devServer: {
		port: 7666,
		host: "0.0.0.0",
		https: true,
		open: false,
		proxy: {
			[process.env.VUE_APP_BASE_API]: {
				changeOrigin: true,
				secure: false,
				target: process.env.VUE_APP_CONSOLE_URL,
				pathRewrites: {
					["^" + process.env.VUE_APP_BASE_API]: "",
				},
			},
		},
	},
});
