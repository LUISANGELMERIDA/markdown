const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const basePath = __dirname;
const distPath = 'dist';
 
const indextInput = './src/index.html';
const indexOutput = 'index.html';
const webpackInitConfig = {
    mode: 'development',
    resolve: {
        extensions: ['.js','.jsx']
    },
    entry: {
        app: ['@babel/polyfill', './src/index.js'],
    },
    output: {
        path: path.join(basePath, distPath),
        filename: '[chunkhash][name].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: indexOutput, 
            template: indextInput,
        })
    ]
};
module.exports = webpackInitConfig;