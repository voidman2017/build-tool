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
编译耗时 650ms ，编译文件大小 62kb。prototype 49个。


