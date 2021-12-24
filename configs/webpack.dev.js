const {merge} = require('webpack-merge');
const {DefinePlugin} = require('webpack');
const path = require('path');

const {baseConfig} = require('./webpack.config');

const devRules = {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        hot: true,
        historyApiFallback: true,
        port: '8000',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization, Cache-Control',
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {loader: 'css-loader', options: {modules: true}},
                    {
                        loader: 'postcss-loader',
                        options: {postcssOptions: {config: path.resolve(__dirname, '../.postcssrc.js')}},
                    },
                ],
            },
            {
                test: /\.(png|jpg|jpeg|webp)$/,
                use: ['file-loader'],
            },
        ],
    },
    plugins: [
        new DefinePlugin({
            ENV: '"dev"',
        }),
    ],
};

module.exports = merge(baseConfig, devRules);
