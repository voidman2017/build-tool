const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const fs = require('fs')
const path = require('path')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { cwd } = require('process');

function mkdirsSync(dirname) {
    if (fs.existsSync(dirname)) {
        return true;
    } else {
        if (mkdirsSync(path.dirname(dirname))) {
            fs.mkdirSync(dirname);
            return true;
        }
    }
}
function copyRecursiveSync(src, dest) {
    var exists = fs.existsSync(src);
    var stats = exists && fs.statSync(src);
    var isDirectory = exists && stats.isDirectory();
    if (isDirectory) {
        !fs.existsSync(dest) && mkdirsSync(dest);
        fs.readdirSync(src).forEach(function (childItemName) {
            copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
        });
    } else {
        fs.copyFileSync(src, dest);
    }
};

function getComplieFiles(stats) {
    const list = []
    stats.chunks.forEach((chunk = []) => {
        chunk.modules.forEach(module => {
            list.push(module.name)
        })
    })
    return list
}

function removeSourceFile(files) {
    files.forEach(file => {
        const url = file.replace('./src', './dist')
        console.log('path: ', url);
        if (fs.existsSync(path.resolve(cwd(), url))) {
            console.log('xxxxxxxxxxxxx')
            fs.unlinkSync(path.resolve(cwd(), url))
        }
    })
}

class CopyCleanPlugin {
    constructor(options) {
    }
    apply(compiler) {
        compiler.hooks.beforeRun.tap('beforeRun', function (stats) {
            copyRecursiveSync(path.resolve(cwd(), './src'), path.resolve(cwd(), './dist'))
        });
        /*todo: 
        1.现在是删除编译过的内容，但是可以发现，是保留了没有被import的资源（也是未经过编译的文件）
        2.setTimeout延时执行解决 stats.json生成之后延时执行
        */
        compiler.hooks.done.tapAsync('done', function (stats) {
            setImmediate(() => {
                const statsJson = require(path.resolve(cwd(), './dist/stats.json'))
                const complieFiles = getComplieFiles(statsJson)
                removeSourceFile(complieFiles)
            })
        });
    }
}

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
        }, {
            test: /\.(png|jpg|gif)$/i,
            use: [
                {
                    loader: "url-loader",
                    options: {
                        limit: 8192,
                        esModule: false
                    }
                }
            ]
        },],
    },
    plugins: [
        new MiniCssExtractPlugin(),
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
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'disabled', // 不启动展示打包报告的http服务器
            generateStatsFile: true, // 是否生成stats.json文件
        }),
        new CopyCleanPlugin(),
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