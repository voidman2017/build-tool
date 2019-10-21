/* gulp@4 */

const gulp = require('gulp');
const { series, parallel, watch } = gulp;
const gulp_sass = require('gulp-sass');
const gulp_less = require('gulp-less');
const gulp_connect = require('gulp-connect');
const gulp_concat = require('gulp-concat');
const gulp_uglify = require('gulp-uglify');
const gulp_rename = require('gulp-rename');
const gulp_clean_css = require('gulp-clean-css');
const { path } = require('../config');
const del = require('delete');


function greet1(cb) {
    console.log('Hello');
    cb();
}

function greet2(cb) {
    console.log('Hola');
    cb();
}

function greet3(cb) {
    console.log('你好');
    cb();
}

const greet = series(greet1, greet2, greet3, function (cb) {
    console.log('以上是打招呼的几种不同语言');
    cb();
})

function clean(cb) {
    del(['./dist'], cb)
}

function copy_html(cb) {
    const { html } = path
    gulp.src(html.src)
        .pipe(gulp.dest(html.dist))
        .pipe(gulp_connect.reload())
    cb();
}

function copy_css_js(cb) {
    const { css_js } = path;
    gulp.src(css_js.src)
        .pipe(gulp.dest(css_js.dist))
    cb();
}

function watchFile(cb) {
    const { html, css_js } = path;
    watch(html.src, copy_html);
    watch(css_js.src, copy_css_js);
}

/* 编译sass */
function compile_sass() {
    const { scssFile } = path;
    return gulp.src(scssFile.src)
        .pipe(gulp_sass())
        .pipe(gulp.dest(scssFile.dist))
}

function sass_watch() {
    const { scssFile } = path;
    clean()
    watch(scssFile.src, compile_sass)
}

/* 编译less */
function compile_less() {
    const { lessFile } = path;
    return gulp.src(lessFile.src)
        .pipe(gulp_less())
        .pipe(gulp.dest(lessFile.dist))
}

function less_watch() {
    const { lessFile } = path;
    clean()
    watch(lessFile.src, compile_less)
}

/* 静态服务 */
function server(cb) {
    gulp_connect.server({
        root: 'dist',
        livereload: true
    })
    cb();
}

/* 合并文件 */
function concat(cb) {
    const { js, css } = path;
    gulp.src(js.src)
        .pipe(gulp_concat('verdor.js'))
        .pipe(gulp.dest(js.dist))
        .pipe(gulp_uglify())
        .pipe(gulp_rename({ suffix: '.min' }))
        .pipe(gulp.dest(js.dist));
    gulp.src(css.src)
        .pipe(gulp_concat('verdor.css'))
        .pipe(gulp.dest(css.dist))
        .pipe(gulp_clean_css())
        .pipe(gulp_rename({ suffix: '.min' }))
        .pipe(gulp.dest(css.dist));

    cb()
}

exports.greet = greet;
exports.copy_html = copy_html;
exports.copy_css_js = copy_css_js;
exports.copy = parallel(copy_html, copy_css_js, function (cb) { console.log('复制完成'); cb(); })
exports.watchFile = watchFile;
exports.compile_sass = compile_sass;
exports.sass = sass_watch;
exports.compile_less = compile_less;
exports.less = less_watch;
exports.clean = clean;
exports.server = server;
exports.concat = concat;
exports.default = series(server, watchFile);