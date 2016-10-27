var gulp = require('gulp');
var runSequence = require('run-sequence');
var config = require('../config')();
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var cachebust = require('gulp-cache-bust');

/* Main build task */
gulp.task('build', function (done) {
	runSequence('clean-build', ['build-assets']);
});

/* Build production files into build folder */
gulp.task('build-assets', function (done) {
	runSequence('concat', ['sass','minify','copy-assets','image-min','cache-bust']);
});

/* Copy and minify css */
gulp.task('minify', function (done) {
	gulp.src(config.app + '**/*.css', {
		base: config.app
	})
	.pipe(cssnano())
	.pipe(gulp.dest(config.build.path));
});

/* Copy assets to build folder */
gulp.task('copy-assets', function (done) {
	// Copy HTML Includes
	gulp.src([config.app + 'includes/*.html',config.app + 'templates/*.html'], {
		base: config.app
	})
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
});

/* Concat JS and CSS - reference index.html */
gulp.task('concat', function (done) {
	gulp.src('app/*.html')
	.pipe(useref())
	.pipe(gulpif('*.js', uglify({ mangle: false })))
	.pipe(gulpif('*.css', cssnano()))
	.pipe(gulp.dest(config.build.path))
	.on('finish', done);
});

/* Minify HTML */
gulp.task('html-min', function (done) {
	gulp.src('app/**/*.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest(config.build.path));
});

/* Image Minification */
gulp.task('image-min', function (done) {
    gulp.src(config.assetsPath.images + '**/*')
    .pipe(imagemin())
    .pipe(gulp.dest(config.build.assetPath + 'images/'))
});

// Cache bust
gulp.task('cache-bust', function (done) {
	gulp.src(config.build.path +'**/*.html')
    .pipe(cachebust({
        type: 'timestamp'
    }))
    .pipe(gulp.dest(config.build.path));
});