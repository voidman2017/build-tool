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
