const gulp = require('gulp');
const clean = require('gulp-clean');
const htmlmin = require('gulp-htmlmin');
const cssmin = require('gulp-cssmin');
const uglify = require('gulp-uglify');

// Membersihkan folder docs
gulp.task('clean', function () {
    return gulp.src('docs', { allowEmpty: true, read: false })
        .pipe(clean());
});

// Memindahkan dan meminifikasi HTML
gulp.task('html', function () {
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('docs'));
});

// Memindahkan dan meminifikasi CSS
gulp.task('css', function () {
    return gulp.src('src/css/**/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('docs/css'));
});

// Memindahkan dan meminifikasi JS
gulp.task('js', function () {
    return gulp.src('src/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('docs/js'));
});

// Memindahkan assets
gulp.task('assets', function () {
    return gulp.src('src/assets/**/*')
        .pipe(gulp.dest('docs/assets'));
});

// Default task
gulp.task('default', gulp.series('clean', 'html', 'css', 'js', 'assets'));
