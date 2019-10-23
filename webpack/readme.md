# webpack安装
webpack4 中需要全局进行安装 webpack 和 webpack-cli 。  
```shell
npm install webpack webpack-cli -g
```
然后在项目中安装 webpack  
```shell
npm install webpack --save-dev
```

# webpack 命令行打包
在 webpack@4 中，这句将表示要将 xxx.js 和 bundle.js 进行打包到 ./dist/main.js。  
在 webpack@4 中如果需要使用命令行进行打包，则使用：
```shell
webpack xxx.js --output-filename bundle.js --output-path . --mode development
```
# webpack 性能优化
- 排除不需要编译的内容：  
例如在使用 babel-loader 对js进行编译时，可以设置 exclude 选项排除 node_modules 目录或者其他不需要进行编译的源代码以提高打包效率。
- 通过使用 cacheDirectory 选项提高打包效率
```javascript
{
    test: /\.js$/,
    exclude: /(node_modules)/,
    use: [
        {
            loader: 'babel-loader',
            options: {
                cacheDirectory: "./cache",

            }
        }
    ]
}
```
# babel编译
作用：由于js中一些新语法在旧版本浏览器中不兼容，因为有了babel工具可以将其转换成旧版本浏览器可以运行的代码。  
babel编译器：babel 编译器会从项目的根目录下的 .babelrc 文件中读取配置。主要配置的内容包含 presets-预设 和 plugins-插件。   

plugins:  
主要使用的有：babel-polyfill、 babel-runtime、 babel-plugin-transform-runtime  

babel-polyfill 和 babel-runtime 的区别：   
- babel-polyfill  
原理是将当前运行环境中没有实现的一些方法进行兼容。通过向全局对象和内置对象的prototype上添加方法来实现的。  
缺点： 造成全局空间污染  

- babel-runtime  
将es6编译成es5去执行。使用其中提供的工具函数来实现es6语法功能。

以当前项目为例，在不使用babel编译的情况，编译后的js文件大小是17kb。  
使用 babel-polifill,直接在源文件中 `import 'babel-polyfill'` 进行编译耗时1000ms，文件大小是454kb。其中搜索 'prototype' 是 351 个,这是因为 babel-polyfill 是通过添加大量原型方法来实现兼容的。   
启用插件 babel-plugin-transform-runtime ，在 .babelrc 中 plugins 进行配置。Babel 就会使用 babel-runtime 下的工具函数，转译代码,最终编译耗时640ms，文件的大小是96kb。其中搜索 'prototype' 是 56个。  

presets:  
presets属性告诉Babel要转换的源码使用了哪些新的语法特性，presets是一组Plugins的集合。
目前推荐使用 babel-preset-env：
```javascript
{
  "presets": ['env']
}
```
但是单独使用它，不能对对象解构进行编译：
```javascript
const obj1 = { name: 1 }
const obj2 = { age: 24 }
const obj = { ...obj1, ...obj2 }
console.log(obj)
```
可以添加 [transform-object-reset-spread](https://www.npmjs.com/package/babel-plugin-transform-object-rest-spread)  进行支持。  
也可以添加 [stage-0](https://www.npmjs.com/package/babel-preset-stage-0) 进行支持。  
最终配置可能是下面这个样子：  
```javascript
{
  "plugins": [
    [
      "transform-runtime",
      {
        "polyfill": false
      }
    ]
  ],
  "presets": [
    "stage-0",
    "env",
  ]
}
```
编译耗时 650ms ，编译文件大小 62kb，prototype 49个。由于 polyfill 设置 false，所以发现没有对 promise 进行编译，因而在ie中无法正常运行：
![](./img/1-polyfill-false-ie.png);
将 polyfill 选项设置成 true 或者不设置（默认值是true），编译耗时 730ms，编译文件大小 127kb，prototype 95个。可以发现 promise 已经做了兼容处理,此时已经能够在ie中正常运行。
```javascript
var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ "./node_modules/babel-runtime/core-js/promise.js");
```
此时发现如果代码中包含 `console.log([1, 2, 3].includes(2))` Array.prototype.includes 的使用，也是不会被编译的，在ie中还是无法正常运行。这里将使用 [polyfill-array-includes](https://www.npmjs.com/package/polyfill-array-includes) 进行polyfill


`总结`:无论是哪种编译，最终的目的都是将 es6及之后出现的新语法经过编译，变成低版本浏览器能够正常运行的代码。实质都是使用es5语法来实现代码。方式有两种，一种是直接将源代码中的逻辑用es5代码进行替换。另一种是用es5语法来实现高版本语法中的api。  
不妨可以去了解一下 [core-js](https://github.com/zloirock/core-js)。去看一下如何用es5语法来实现es6的一些api。

# webpack-dev-server
webpack-dev-server是在开发环境下能够启用一个服务进行快速开发的工具。下面列举了一些常用的配置项。
```javascript
devServer: {
    compress: true, //一切服务都启用 gzip 压缩：
    contentBase: _p('../dist'), //告诉服务器从哪个目录中提供内容。只有在你想要提供静态文件时才需要。devServer.publicPath 将用于确定应该从哪里提供 bundle，并且此选项优先。
    historyApiFallback: true, //当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html。devServer.historyApiFallback 默认禁用。在单页应用路由使用history模式的时候需要
    hot: true, //启用 webpack 的 模块热替换 功能
    publicPath: '/assets/', // 此路径下的打包文件可在浏览器中访问。
    open: true, //告诉 dev-server 在 server 启动后打开浏览器。默认禁用
    overlay: true, //当出现编译器错误或警告时，在浏览器中显示全屏覆盖层。默认禁用。
    port: 9000, //指定要监听请求的端口号
}
```

## webpack-dev-server的一些相关内容
### webpack-dev-server 为什么能够启动一个本地服务
webpack-dev-server 之所以能够启动服务来用于开发，阅读源码可以发现 Server.js 构建了一个 Server 类，其中有 listen 方法。`this.listeningApp.listen`。查看 listeningApp 发现 `this.listeningApp = https.createServer(this.options.https, this.app)`。正是使用了nodejs 中https模块的createServer。  
### webpack-dev-server 是如何实现文件访问的？（在没有编译出打包之后的文件的情况下，浏览器访问到的文件存在哪里）
https://juejin.im/post/5cabfc7bf265da035e210197  
可以看到在开发过程中，即使没有进行打包编译，硬盘中不存在打包之后的文件，我们还是能够在浏览器正常通过webpack-dev-server提供的服务进行访问，从而猜想读写过程是在内存中完成的。  
查看源码，发现有一个模块是 webpack-dev-middleware。在 webpack-dev-middleware/lib/fs.js 中，引用了 `const MemoryFileSystem = require('memory-fs');` 。

