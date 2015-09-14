var gulp = require('gulp');
var babelify = require('babelify');
//var bwrap = require('gulp-browserify-wrap');
var browser = require('browserify');
//var react = require('gulp-react');
var source = require('vinyl-source-stream');

gulp.task('browserify', function(){
    return browser('./src/app/index.jsx')
        .transform(babelify)
        .bundle()
        .pipe(source('index.js'))
        .pipe(gulp.dest('./build/js/'));
});

gulp.task('copy-css',function(){
    return gulp.src('./src/css/*.css')
        .pipe(gulp.dest('./build/css/'))
});
gulp.task('copy-html',function(){
    return gulp.src('./src/html/*.html')
        .pipe(gulp.dest('./build/html/'))
});

gulp.task('build',['browserify','copy-css','copy-html']);
