var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/components/widgetContainer.jsx',
    output: {
        path: path.resolve('lib'),
        filename: 'ReactWidgetDemo.js',
        libraryTarget: 'commonjs2'
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
                     use: [
                       'file-loader',
                     ],
            },
        ]
    }
}