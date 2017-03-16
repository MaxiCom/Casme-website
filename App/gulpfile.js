// REQUIRES //
var gulp = require('gulp');
var removeHtmlComments = require('gulp-remove-html-comments');
var htmlmin = require('gulp-htmlmin');
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

var html_source = 'views/';
var html_sources = '*.html';
var html_destination = 'views/';

var sass_source = 'sass/';
var sass_sources = '*.scss';
var sass_destination = 'stylesheets/';

var scripts_source = 'scripts/';
var scripts_sources = '*.js';
var scripts_destination = 'scripts/';

var php_source = '';
var php_sources = '*.php';
var php_destination = '';

// BUILD TASKS //
gulp.task('html', function() {
	return gulp.src(source + html_source + html_sources)
		.pipe(removeHtmlComments())
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest(destination + html_destination));
});

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

gulp.task('php', function() {
	return gulp.src(source + php_source + php_sources)
		.pipe(removeHtmlComments())
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest(destination + php_destination));
});

// CLEAN TASKS //
gulp.task('clean-html', function() {
	return gulp.src(destination + html_destination)
		.pipe(clean());
});

gulp.task('clean-sass', function() {
	return gulp.src(destination + sass_destination)
		.pipe(clean());
});

gulp.task('clean-scripts', function() {
	return gulp.src(destination + scripts_destination)
		.pipe(clean());
});

gulp.task('clean-php', function() {
	return gulp.src(destination + php_sources)
		.pipe(clean());
})

// OTHER TASKS //
gulp.task('watch-daemon', function() {
	livereload.listen();

	gulp.watch(source + sass_source + sass_sources, ['sass']);
	gulp.watch(source + scripts_source + scripts_sources, ['jshint']);
});

gulp.task('default', ['html', 'sass', 'jshint', 'php']);
gulp.task('watch', ['default', 'watch-daemon']);
gulp.task('clean', ['clean-html', 'clean-sass', 'clean-scripts', 'clean-php']);
