const common = require('./webpack.common');
const merge = require('webpack-merge');
let devConfig = {
    mode: 'development',
    plugins: [
        new webpack.ProvidePlugin({
            'React':'react',
            'ReactDom':'react-dom'
        })
    ]
};

module.exports = merge(common, devConfig);