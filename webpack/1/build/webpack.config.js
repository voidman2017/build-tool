const path = require('path');
const _p = (src) => path.join(__dirname, src)
module.exports = {
    mode: 'development',
    entry: _p('../src/app.js'),
    output: {
        path: _p('../dist'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader',
                    }, {
                        loader: 'css-loader'
                    }, {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            // cacheDirectory: "./cache",
                        }
                    }
                ]
            }
        ],
    }
}