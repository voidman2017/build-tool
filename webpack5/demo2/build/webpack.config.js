const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path')
const { cwd } = require('process')


module.exports = {
    mode: "none",
    entry: {
        "packA/app.miniapp": "./src/packA/index.js",
        "packB/app.miniapp": "./src/packB/index.js",
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
    plugins: [new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            chunks: ['app.miniapp']
        }),
        new HtmlWebpackPlugin({
            filename: 'packA/index.html',
            template: 'index.html',
            chunks: ['packA/app.miniapp']

        }),
        new HtmlWebpackPlugin({
            filename: 'packB/index.html',
            template: 'index.html',
            chunks: ['packB/app.miniapp']
        })

    ],
    output: {
        "filename": "[name].js",
        "path": path.resolve(cwd(), 'dist')
    },
    devServer: {
        compress: true,
        port: 9000,
    },
}