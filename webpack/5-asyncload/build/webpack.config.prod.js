const Base = require('./webpack.config.base');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const merge = require('webpack-merge');
const path = require('path');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const webpack = require('webpack');
const _p = (src) => path.join(__dirname, src);


const postcss = {
    loader: 'postcss-loader',
    options: {
        plugins: [
            require("autoprefixer")({
                "overrideBrowserslist": [
                    "defaults",
                    "last 2 versions",
                    "> 1%",
                    "iOS 7",
                    "last 3 iOS versions"
                ]
            })
        ]
    }
}

module.exports = merge(Base, {
    mode: 'production',
    entry: {
        collect: _p('../src/util/collect.js'),
    },
    output: {
        filename: '[name].bundle.[hash:8].js',
        chunkFilename: '[name].chunk.[chunkhash:6].js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        // 分离项目中的css文件
        new ExtractTextPlugin({
            filename: "css/[name].[chunkhash:6].css",
            allChunks: true
        }),
        // 提升(hoist)或者预编译所有模块到一个闭包中，提升你的代码在浏览器中的执行速度。
        new webpack.optimize.ModuleConcatenationPlugin(),
        // 打包分析
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            analyzerPort: 3000
        }),

    ],
    module: {
        rules: [
            {
                test: /\.css|scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', postcss, 'sass-loader']
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', postcss, 'less-loader']
                })
            },
        ],
    },
    optimization: {
        minimize: true, //压缩 bundle。production 模式下，这里默认是 true。
        minimizer: [
            new ParallelUglifyPlugin({
                workerCount: 4,
                uglifyJS: {
                    output: {
                        beautify: false, // 不需要格式化
                        comments: false // 保留注释
                    },
                    compress: { // 压缩
                        // warnings: false, // 删除无用代码时不输出警告
                        drop_console: true, // 删除console语句
                        collapse_vars: true, // 内嵌定义了但是只有用到一次的变量
                        reduce_vars: true // 提取出出现多次但是没有定义成变量去引用的静态值
                    }
                }
            })
        ],
        // runtimeChunk: {
        //     name: 'manifest'
        // },
    }
})