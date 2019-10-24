const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const _p = (src) => path.join(__dirname, src);


module.exports = {
    entry: {
        app: _p('../src/app.js'),
        app2: _p('../src/app copy 2.js'),
        app3: _p('../src/app copy 3.js'),
        app4: _p('../src/app copy 4.js'),
        app5: _p('../src/app copy 5.js'),
        swiper: _p('../src/util/swiper.js')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack',
            template: _p('../src/index.html')
        }),
        new VueLoaderPlugin()
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.vue', '.css', '.scss', '.less'],
        alias: {
            "@css": _p('../src/css'),
            "@views": _p('../src/views'),
        }
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ]
            },
            {
                test: /\.vue$/,
                use: ['vue-loader'],
            },
        ],
    },
    optimization: {
        splitChunks: {
            chunks: 'all',  // all async initial 选择对哪些块进行优化
            minSize: 0,  // 被拆分的最小大小（压缩前）
            minChunks: 6,  // 被共享的最小次数
            // maxAsyncRequests: 1,  // 最大按需求并行请次数
            // maxInitialRequests: 1,  // 最大初始化并行请求数
            // automaticNameDelimiter: '-',  // 自动命名分隔符
            // name: true, // 自动为块命名
            name:'common',
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    }
}