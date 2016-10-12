var gulp = require('gulp');
var config = require('../config')();
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

/* Watch TS file files for changes */
gulp.task('watch-js', function () {
	return gulp.watch(config.assetsPath.scripts, function (file) {
		console.log('Compiling ' + file.path + '...');
		return true;
	});
});