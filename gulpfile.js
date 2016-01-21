var gulp = require('gulp'),
	stylus = require('gulp-stylus'),
	minifyCss = require('gulp-minify-css'),
	concatCss = require('gulp-concat-css'),
	watch = require('gulp-watch');
	
gulp.task('stylus', function () {
  gulp.src('./styles/styl/main.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./styles/css'));
});

gulp.task('minify-css', function() {
  return gulp.src('./styles/style.css')
    .pipe(minifyCss())
    .pipe(gulp.dest('./'));
});

gulp.task('concatCss', function () {
  return gulp.src('styles/css/**/*.css')
    .pipe(concatCss("style.css"))
    .pipe(gulp.dest('./styles'));
});

gulp.task('watch', function() {
    gulp.watch('./styles/styl/*.styl', ['stylus']);
    gulp.watch('./styles/style.css', ['minify-css']);
    gulp.watch('styles/css/**/*.css', ['concatCss']);
});

gulp.task('default', ['concatCss','watch','stylus', 'minify-css']);