'use strict';

const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const del = require('del');
const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const runSequence = require('run-sequence');
const uglify = require('gulp-uglify');
const jshint = require('gulp-jshint');
const gutil = require('gulp-util');
const pump = require('pump');
const imagemin = require('gulp-imagemin');

// Set the browser to support
const AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
];

gulp.task('image-min', function() {
    return gulp.src([
        './public/app/assets/**/*.jpg',
        './public/app/assets/**/*.png',
        './public/icon.png'
        ])
        .pipe(imagemin())
        // Output
        .pipe(gulp.dest('./public/dist/'))
});

// configure the jshint task
gulp.task('jshint', function() {
    return gulp.src([
        '!./public/app/assets/js/bootstrap.min.js',
        '!./public/app/assets/js/jquery-3.2.1.min.js',
        '!./public/app/vendor/angular.min.js',
        '!./public/app/vendor/moment.min.js',
        '!./public/app/vendor/ngStorage.min.js',
        './public/app/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('uglify-error', function (cb) {
    pump([
        gulp.src(['./public/app/**/*.js']),
        uglify(),
        gulp.dest('./public/dist/js')
    ], cb);
});

// Gulp task to minify JavaScript files
gulp.task('scripts', function() {
    return gulp.src(['./public/app/**/*.js'])
        // Minify the file
        .pipe(uglify())
        .on('error', function (err) {
            gutil.log(gutil.colors.red('[Error]'), err.toString());
        })
        // Output
        .pipe(gulp.dest('./public/dist/js'))
});

// Gulp task to minify CSS files
gulp.task('styles', function () {
    return gulp.src([
        './public/app/assets/**/*.css'
        ])
        // Auto-prefix css styles for cross browser compatibility
        .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
        // Minify the file
        .pipe(csso())
        // Output
        .pipe(gulp.dest('./public/dist/'))
});

// Fonts
gulp.task('fonts', function() {
    return gulp.src([
        './public/app/assets/fonts/*.ttf',
        './public/app/assets/fonts/*.woff',
        './public/app/assets/fonts/*.woff2'
        ])
        .pipe(gulp.dest('./public/dist/fonts'));
});

// Gulp task to minify HTML files
gulp.task('pages', function() {
    return gulp.src([
        './public/app/views/**/*.html'
        ])
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('./public/dist/views'));
});

gulp.task('index-page', function() {
    return gulp.src([
        './public/index.html',
    ])
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('./public/dist'));
});

// Clean output directory
gulp.task('clean', () => del(['dist']));

// Gulp task to minify all files
gulp.task('default', ['clean'], function () {
    runSequence(
        'image-min',
        'jshint',
        'uglify-error',
        'scripts',
        'styles',
        'fonts',
        'pages',
        'index-page'
    );
});

