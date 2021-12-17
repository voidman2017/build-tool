const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path')
const { cwd } = require('process')


module.exports = {
    mode: "none",
    entry: {
        "app.miniapp": "./src/index.js"
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader'
            }
            ]
        }],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
        })
    ],
    output: {
        "filename": "[name].js",
        "path": path.resolve(cwd(), 'dist')
    },
    devServer: {
        compress: true,
        port: 9000,
        proxy: {
            '/api': {
                target: 'http://localhost:7788'
            }
        }
    },
}