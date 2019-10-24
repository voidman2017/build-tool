const Base = require('./webpack.config.base');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const merge = require('webpack-merge');
const path = require('path');
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
        })
    ],
    module: {
        rules: [
            {
                test: /\.css|scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', postcss, 'sass-loader']
                })
                // ['style-loader', 'css-loader', postcss , 'sass-loader']
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
})