const {merge} = require('webpack-merge');
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const {baseConfig} = require('./webpack.config');
const {DefinePlugin} = require('webpack');

const prodRules = {
    mode: 'production',
    output: {
        publicPath: '/sber-rea-client/',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
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
    optimization: {
        minimizer: [new CssMinimizerPlugin()],
        minimize: true,
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new DefinePlugin({
            ENV: '"prod"',
        }),
    ],
};

module.exports = merge(baseConfig, prodRules);
