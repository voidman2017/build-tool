const p = require('path');
const _p = (src) => p.join(__dirname, src)
const path = {
    html: {
        src: [_p('./src/index.html'), _p('./src/home.html')],
        dist: './dist'
    },
    js: {
        src: _p('./src/js/**/*.js'),
        dist: './dist'
    },
    css: {
        src: _p('./src/**/*.css'),
        dist: './dist'
    },
    css_js: {
        src: _p('./src/**/*.{js,css}'),
        dist: './dist'
    },
    scssFile: {
        src: _p('./src/css/**/*.scss'),
        dist: './dist/css'
    },
    lessFile: {
        src: _p('./src/css/**/*.less'),
        dist: './dist/css'
    },
}
exports.path = path