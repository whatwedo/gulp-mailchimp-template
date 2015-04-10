var gulp = require('gulp');
var zip = require('gulp-zip');
var path = require('path');
var inline = require('gulp-mc-inline-css');
var include = require('gulp-include');
var livereload = require('gulp-livereload');
var watch = require('gulp-watch');
var lazypipe = require('lazypipe');
var substituter = require('gulp-substituter');
var rimraf = require('rimraf'); // rimraf directly
var zip = require('gulp-zip');

var config = require('./config.json');


var inlineHTMLCSS = lazypipe()
    .pipe(include)
    .pipe(inline, config.MAILCHIMP_API_KEY)
    .pipe(substituter, {
      mediaqueryHeader: '<style type="text/css">',
      mediaqueryBody: '//= include mediaqueries.css',
      mediaqueryFooter: '</style>'
    })
    .pipe(include)
    .pipe(gulp.dest, 'dist');

var copyAssets = lazypipe()
    .pipe(gulp.dest, 'dist/images');

gulp.task('inline', function(cb) {
  return gulp.src('src/boilerplate.html')
    .pipe(inlineHTMLCSS());
});

gulp.task('assets', function(cb) {
  return gulp.src('src/images/**/*')
    .pipe(copyAssets());
});

gulp.task('clean', function (cb) {
    rimraf('dist', cb);
});

gulp.task('zip', ['inline', 'assets'], function () {
    return gulp.src('dist/**/*')
        .pipe(zip('template.zip'))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.src('src/*')
    .pipe(watch(function(files) {
        return files.pipe(inlineHTMLCSS());
    })
    .on('data', livereload.changed));

  gulp.src('src/images/**/*')
    .pipe(watch(function(files) {
        return files.pipe(copyAssets());
    })
  .on('change', livereload.changed));
});

gulp.task('default', ['clean', 'inline', 'assets', 'zip']);
