// REQUIRES //
var gulp = require('gulp');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var jsmin = require('gulp-jsmin');
var livereload = require('gulp-livereload');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var clean = require('gulp-clean');

// PATH VARIABLES //
var source = './source/';
var destination = './public/';

var sass_source = 'sass/';
var sass_sources = '**/*.scss';
var sass_destination = 'stylesheets/';

var scripts_source = 'scripts/';
var scripts_sources = '*.js';
var scripts_destination = 'scripts/';

// BUILD TASKS //
gulp.task('sass', function() {
	return gulp.src(source + sass_source + 'pages/' + sass_sources)
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(destination + sass_destination))
		.pipe(livereload());
});

gulp.task('jshint', function() {
	return gulp.src(source + scripts_source + scripts_sources)
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(jsmin())
		.pipe(concat('index.js'))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(destination + scripts_destination))
		.pipe(livereload());
});

// CLEAN TASKS //
gulp.task('clean-sass', function() {
	return gulp.src(destination + sass_destination)
		.pipe(clean());
});

gulp.task('clean-scripts', function() {
	return gulp.src(destination + scripts_destination)
		.pipe(clean());
});

// OTHER TASKS //
gulp.task('watch', function() {
	livereload.listen();

	gulp.watch(source + sass_source + sass_sources, ['sass']);
	gulp.watch(source + scripts_source + scripts_sources, ['jshint']);
});

gulp.task('default', ['sass', 'jshint']);
gulp.task('clean', ['clean-sass', 'clean-scripts']);
