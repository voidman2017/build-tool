const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const _p = (src) => path.join(__dirname, src);


module.exports = {
    entry: {
        app: _p('../src/app.js'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack',
            template: _p('../src/index.html')
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss', '.less'],
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
            }
        ],
    },
}