var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/widgets.jsx',
    optimization: {
        minimize: false
    },
    output: {
        path: path.resolve('lib'),
        filename: 'ReactWidgetDemo.js',
        library: 'ReactWidgetDemo',
        libraryTarget: 'window'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                exclude: /(node_modules)/,
                use: [
                       'file-loader',
                ],
            },
            {
                test: /\.css$/,
                exclude: /(node_modules)/,
                use: [
                       'style-loader',
                       'css-loader',
                ],
            }
        ]
    }
}