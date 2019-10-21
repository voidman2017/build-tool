/* gulp@3 */
const gulp = require('gulp');
const gulp_sass = require('gulp-sass');
const gulp_less = require('gulp-less');
const gulp_connect = require('gulp-connect');
const gulp_concat = require('gulp-concat');
const gulp_uglify = require('gulp-uglify');
const gulp_rename = require('gulp-rename');
const gulp_clean_css = require('gulp-clean-css');
const { path } = require('../config');
const del = require('delete');

gulp.task('greet-1', function (cb) {
    console.log('Hello')
    cb();
})

gulp.task('greet-2', function (cb) {
    console.log('Hola')
    cb();
})

gulp.task('greet-3', function (cb) {
    console.log('你好')
    cb();
})

gulp.task('greet', ['greet-1', 'greet-2', 'greet-3'], function () {
    console.log('以上是打招呼的几种不同语言')
})


gulp.task('clean', function () {
    del(['./dist'])
})

gulp.task('copy_html', function () {
    const { html } = path;
    return gulp.src(html.src)
        .pipe(gulp.dest(html.dist))
        .pipe(gulp_connect.reload()); //刷新
})

gulp.task('copy_css', function () {
    const { css } = path;
    return gulp.src(css.src)
        .pipe(gulp.dest(css.dist))
})

gulp.task('copy_css_js', function () {
    const { css_js } = path;
    return gulp.src(css_js.src) // 使用 {x,y}表示多种选项
        .pipe(gulp.dest(css_js.dist))
})

gulp.task('copy', ['copy_html', 'copy_css_js'], function () {
    console.log('复制完成')
})

/* 文件监听 */
gulp.task('watch', function () {
    const { html, css_js } = path;
    gulp.watch(html.src, ['copy_html']);
    gulp.watch(css_js.src, ['copy_css_js']);
})


/* 编译sass */
gulp.task('compile-sass', function () {
    const { scssFile } = path;
    return gulp.src(scssFile.src)
        .pipe(gulp_sass({
            "bundleExec": true
        }))
        .pipe(gulp.dest(scssFile.dist))
        .pipe(gulp_clean_css())
        .pipe(gulp_rename({ suffix: '.min' }))
        .pipe(gulp.dest(scssFile.dist))
})
gulp.task('sass', ['clean'], function () {
    const { scssFile } = path;
    gulp.watch(scssFile.src, ['compile-sass']);
});


/* 编译less */
gulp.task('compile-less', function () {
    const { lessFile } = path;
    return gulp.src(lessFile.src)
        .pipe(gulp_less())
        .pipe(gulp.dest(lessFile.dist))
})
gulp.task('less', ['clean'], function () {
    const { lessFile } = path;
    gulp.watch(lessFile.src, ['compile-less']);
});

/* 静态服务 */
gulp.task('server', function () {
    gulp_connect.server({
        root: 'dist',
        livereload: true
    })
})

/* 合并文件 */
gulp.task('concat', function () {
    const { js, css } = path;
    gulp.src(js.src)
        .pipe(gulp_concat('vendor.js'))
        .pipe(gulp.dest(js.dist))
        .pipe(gulp_uglify())
        .pipe(gulp_rename({ suffix: '.min' }))
        .pipe(gulp.dest(js.dist))
    gulp.src(css.src)
        .pipe(gulp_concat('vendor.css'))
        .pipe(gulp.dest(css.dist))
})

/*  */

gulp.task('default', ['server', 'watch'])