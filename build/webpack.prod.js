const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
    // mode: 'production',
    mode:'none',
    output: {
        // filename: 'js/[name]_[contenthash].js',  // 入口和内容hash组成的文件名，也可以是hash
        // chunkFilename: 'js/[name]_[contenthash].chunk.js',  //非入口文件的名称
        filename: 'js/bundle.js',  // 入口和内容hash组成的文件名，也可以是hash
        chunkFilename: 'js/[name].js',
        path: path.resolve(__dirname, '../dist')  //导出文件的路径
    },
    optimization: {
        usedExports: true,   //如果false则在在开发环境中通过unused harmony export标明哪些是未使用的导出，否则直接删除，可以压缩代码体积
        runtimeChunk: 'single', //将 runtime 代码拆分为一个单独的 chunk
        splitChunks: {
            chunks: 'all',    //分离公共插件js
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [
        new MiniCssExtractPlugin({   //用于将 CSS 从主应用程序中分离  但是一直报错 不知为啥
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new CleanWebpackPlugin(),  //清空dist目录下文件
        new webpack.ids.HashedModuleIdsPlugin()   //缓存  未修改的文件在打包时名称不变（如第三方插件需配合optimization-splitChunks-cacheGroups-vendor选项一起使用）
    ],
    module: {
        rules: [     // loader解析的顺序是从下到上，从右到左的顺序
            // {
            //     test: /\.(sa|sc|c)ss$/,   //sass，scss，css
            //     use: [
            //         'style-loader',
            //         'css-loader'
            //     ]
            // },
            {
                test: /\.(css)$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(scss)$/,
                use: [{
                    loader: 'style-loader', // inject CSS to page
                }, {
                    loader: 'css-loader', // translates CSS into CommonJS modules
                }, {
                    loader: 'postcss-loader', // Run post css actions
                    options: {
                        plugins: function () { // post css plugins, can be exported to postcss.config.js
                            return [
                                require('precss'),
                                require('autoprefixer')
                            ];
                        }
                    }
                }, {
                    loader: 'sass-loader' // compiles SASS to CSS
                }]
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ]
    }
})
