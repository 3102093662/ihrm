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
			"/api": {
				changeOrigin: true,
				secure: false,
				target: "http://www.google.com",
				pathRewrites: {
					"^/api": "",
				},
			},
		},
	},
});
