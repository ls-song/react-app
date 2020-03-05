const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common');
const merge = require('webpack-merge');
let prodConfig = {
    mode:'production',
    plugins: [
        new CleanWebpackPlugin(),
    ]
}

module.exports = merge(common, prodConfig);