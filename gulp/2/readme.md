# gulp@3 vs gulp@4

## 任务
### 任务的创建和使用
`gulp@3` 使用 `gulp.task` 注册任务。无需导出即可直接使用
```javascript
gulp.task(taskname, [task1name, ..., taskNname], function(){
    //do something
})
```

`gulp@4`
通过创建函数的方式来创建任务，每个 gulp 任务（task）都是一个异步的 JavaScript 函数，此函数是一个可以接收 callback 作为参数的函数，或者是一个返回 stream、promise、event emitter、child process 或 observable 类型值的函数。  
- 公开任务（Public tasks） 从 gulpfile 中被导出（export），可以通过 gulp 命令直接调用。
- 私有任务（Private tasks） 被设计为在内部使用，通常作为 series() 或 parallel() 组合的组成部分。
```javascript
function taskname(cb){
    //do something
    cb（);
}
exports.taskname = taskname
```
### 任务组合
`gulp@3` 通过第二个参数传入数组的方式进行任务组合
```javascript
gulp.task('task1',function(){
    //...
})
gulp.task('task2',function(){
    //...
})
gulp.task('taskAll', ['task1', 'task2'], function(){});
```

`gulp@4` 通过 series() 或 parallel() 组合任务。它们还可以相互嵌套任意深度。  
- series 让任务按顺序执行
```javascript
const { series } = require('gulp');
function transpile(cb) {
  // body omitted
  cb();
}

function bundle(cb) {
  // body omitted
  cb();
}

exports.build = series(transpile, bundle);
```
- parallel 让任务并发运行任务
```javascript
const { parallel } = require('gulp');

function javascript(cb) {
  // body omitted
  cb();
}

function css(cb) {
  // body omitted
  cb();
}

exports.build = parallel(javascript, css);
```
- series() 和 parallel() 可以被嵌套到任意深度。
```javascript
const { series, parallel } = require('gulp');

function clean(cb) {
  cb();
}

function cssTranspile(cb) {
  cb();
}

function cssMinify(cb) {
  cb();
}

function jsTranspile(cb) {
  cb();
}

function jsBundle(cb) {
  cb();
}

function jsMinify(cb) {
  cb();
}

function publish(cb) {
  cb();
}

exports.build = series(
  clean,
  parallel(
    cssTranspile,
    series(jsTranspile, jsBundle)
  ),
  parallel(cssMinify, jsMinify),
  publish
);
```

## 处理文件
同样是使用 gulp 提供的 src 和 dest。  
src() 接受 glob 参数，并从文件系统中读取文件然后生成一个 Node 流（stream）。它将所有匹配的文件读取到内存中并通过流（stream）进行处理。  
流（stream）所提供的主要的 API 是 .pipe() 方法，用于连接转换流（Transform streams）或可写流（Writable streams）。  
dest() 接受一个输出目录作为参数，并且它还会产生一个 Node 流（stream），通常作为终止流（terminator stream）。

一个栗子：（复制文件到另一目录）
```javascript
gulp.task('copyIndex', function () {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('dist'))
})
```

```javascript
function copyIndex(cb) {
    gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'))
    cb();
}
```

