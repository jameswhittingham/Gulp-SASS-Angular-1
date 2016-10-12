var gulp = require('gulp');
var favicons = require("gulp-favicons");
var gutil = require("gulp-util");
var config = require('../config')();

gulp.task("favicons", function () {

	return gulp.src(config.assetsPath.faviconMaster).pipe(
		favicons({
			appName: 'NRMA OK',
			background: '#fff',
			path: config.assetsPath.favicons,
			url: config.assetsPath.favicons,
			display: 'standalone',
			orientation: 'portrait',
			version: 1.0,
			logging: false,
			online: false,
			html: 'favicons.html',
			pipeHTML: true,
			replace: true
		})
	)
	.on("error", gutil.log)
	.pipe(gulp.dest(config.assetsPath.favicons));

});