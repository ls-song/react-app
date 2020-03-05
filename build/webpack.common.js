const webpack = require('webpack');
const path = require('path');
const EntryPath = 'src/index.js';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isProd=process.env.NODE_ENV=='production';
module.exports = {
    entry: EntryPath,
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[id].chunk.js'
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            'apis': path.resolve(_ - __dirname, 'src', 'apis'),
            'components': path.resolve(__dirname, 'src', 'components'),
            'views': path.resolve(__dirname, 'src', 'views'),
            'config': path.resolve(__dirname, 'src', 'config'),
            'utils': path.resolve(__dirname, 'src', 'utils')
        },
        extensions: ['.js', '.less', '.css']
    },
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {
                        loader: 'less-loader',
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            "@babel/plugin-transform-runtime",
                            "@babel/plugin-transform-object-rest-spread",
                            "@babel/plugin-dynamic-import-webpack",
                            "@babel/@babel/plugin-proposal-class-properties"
                        ]
                    }
                }
            }, {
                test: /\.(gif|jpg|jpeg|png|svg|ico)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 9000,
                            name: 'assets/[name].[ext]?[hash]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            filename:'index.html',
            title:'react学习',
            prod:isProd
        })
    ]
}
