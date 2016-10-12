var gulp = require('gulp');
var config = require('../config')();
var bs = require("browser-sync");

function startBrowsersync (config)
{
  bsIns = bs.create();
  bsIns.init(config);
  bsIns.reload();
}

/* Default gulp task */
gulp.task('serve', ['sass', 'watch-sass', 'watch-js'], function () {

  startBrowsersync({
  	port: 3000,
		server: {
			baseDir: './app/',
			routes: {
				'/node_modules': 'node_modules',
				'/app': 'app'
			}
		},
		files: [
			config.app + 'index.html',
			config.assetsPath.styles + 'main.css',
			config.app + '**/*.js',
			config.app + '**/*.css',
			config.app + '**/*.html'
		]
	});
  
});