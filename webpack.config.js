var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/widgets.jsx',
    optimization: {
        minimize: false
    },
    output: {
        path: path.resolve('dist'),
        filename: 'ReactWidgetDemo.js',
        library: 'ReactWidgetDemo',
        publicPath: '/dist/',
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
                use: [
                    {
                        loader: 'url-loader',
                        options:{
                            fallback: "file-loader",
                            name: "[name][md5:hash].[ext]",
                            outputPath: 'assets/',
                            publicPath: '/assets/'
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                exclude: /(node_modules)/,
                use: [
                       'style-loader',
                       'css-loader',
                ],
            },
            
        ]
    },
    resolve: {
        alias: { 
            'assets': path.resolve(__dirname, 'assets')
        } 
    }
}