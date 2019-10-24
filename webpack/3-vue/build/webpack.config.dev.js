const Base = require('./webpack.config.base');
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const _p = (src) => path.join(__dirname, src);


module.exports = merge(Base, {
    mode: 'development',
    output: {
        filename: '[name].bundle.[hash:8].js',
    },
    devtool: 'source-map',
    plugins: [
        // 模块热替换
        new webpack.HotModuleReplacementPlugin({}),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
        ],
    },
    devServer: {
        compress: true, //一切服务都启用 gzip 压缩：
        contentBase: _p('../dist'), //告诉服务器从哪个目录中提供内容。只有在你想要提供静态文件时才需要。devServer.publicPath 将用于确定应该从哪里提供 bundle，并且此选项优先。
        historyApiFallback: true, //当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html。devServer.historyApiFallback 默认禁用。在单页应用路由使用history模式的时候需要
        hot: true, //启用 webpack 的 模块热替换 功能
        // publicPath: '/assets/', // 此路径下的打包文件可在浏览器中访问。
        open: true, //告诉 dev-server 在 server 启动后打开浏览器。默认禁用
        overlay: true, //当出现编译器错误或警告时，在浏览器中显示全屏覆盖层。默认禁用。
        port: 8888, //指定要监听请求的端口号
    },
})