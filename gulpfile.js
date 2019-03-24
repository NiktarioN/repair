var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');
var tinyPNG = require('gulp-tinypng-compress');

gulp.task('htmlmin', function(done) {
	return gulp.src('*.html')
	.pipe(htmlmin({
		collapseWhitespace: true
	}))
	.pipe(gulp.dest('dist/'))
	done();
});

gulp.task('minify-css', function(done) {
	return gulp.src('css/*.css')
	.pipe(cleanCSS({
		compatibility: 'ie8'
	}))
	.pipe(gulp.dest('dist/css/'))
	done();
});

gulp.task('move-js', function(done) {
	return gulp.src('js/*.js')
	.pipe(gulp.dest('dist/js/'))
	done();
});

gulp.task('fonts', function(done) {
	return gulp.src('fonts/**/*')
	.pipe(gulp.dest('dist/fonts'))
	done();
});

gulp.task('tinyPNG', function (done) {
	gulp.src('img/**/*.{png,jpg,jpeg}')
		.pipe(tinyPNG({
			key: 'n7CtLNPs4zrMThpg2SLT4RDl27sMNRdf',
		}))
		.pipe(gulp.dest('dist/img/'))
		done();
});

gulp.task('default', gulp.series('htmlmin', 'minify-css', 'move-js', 'fonts', 'tinyPNG',  function(done) {
	done();
  }));