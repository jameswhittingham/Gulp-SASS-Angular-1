var gulp = require('gulp');
var runSequence = require('run-sequence');
var config = require('../config')();
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');

/* Main build task */
gulp.task('build', function (done) {
	runSequence('build-assets', done);
});

/* Build production files into build folder */
gulp.task('build-assets', function (done) {
	runSequence('clean-build', ['sass'], function () {

		// Copy HTML Includes
		gulp.src(config.app + 'includes/*.html', {
			base: config.app
		})
		.pipe(gulp.dest(config.build.path));

		// Copy and minify css
		gulp.src(config.app + '**/*.css', {
			base: config.app
		})
		.pipe(cssnano())
		.pipe(gulp.dest(config.build.path));

		// Copy assets
		gulp.src(config.assets + '**/*.*', {
			base: config.assets
		})
		.pipe(gulp.dest(config.build.assetPath));

		// Copy data
		gulp.src(config.assetsPath.data + '**/*.*', {
			base: config.assetsPath.data
		})
		.pipe(gulp.dest(config.build.data));

		/* Concat JS and CSS - reference index.html */
		gulp.src('app/*.html')
			.pipe(useref())
			//.pipe(gulpif('*.js', uglify()))
			.pipe(gulpif('*.css', cssnano()))
			.pipe(gulp.dest(config.build.path))
			.on('finish', done);

	});
});