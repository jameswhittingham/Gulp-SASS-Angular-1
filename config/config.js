module.exports = function () {

	var	app = 'app/',
		assets = app + 'assets/',
		assetsPath = {
			data: app + 'scripts/data/',
			favicons: assets + 'images/favicons/',
			faviconMaster: assets + 'images/favicon.png',
			fonts: assets + 'fonts/',
			images: assets + 'images/',
			scripts: app + 'scripts/',
			styles: app + 'styles/'
		},
		build = {
			path: 'build/',
			app: 'build/app/',
			fonts: 'build/fonts/',
			assetPath: 'build/assets/',
			data: 'build/scripts/data/',
			assets: {
				lib: {
					js: 'lib.js',
					css: 'lib.css'
				}
			}
		},
		index = app + 'index.html';

	var config = {
		app: app,
		assets: assets,
		assetsPath: assetsPath,
		build: build,
		index: index
	};

	return config;
};
