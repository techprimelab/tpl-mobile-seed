/**
 * Created by Twinprimelabs on 23/06/16.
 */

'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task("default", ["style", "watch"]);

gulp.task('style', function () {
    gulp.src('app/assets/css/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/assets/css/'));
});

gulp.task('watch', function () {
    gulp.watch('./app/assets/css/**/*.scss', ['style']);
});

