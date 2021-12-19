const {merge} = require('webpack-merge');
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const {baseConfig} = require('./webpack.config');

const prodRules = {
    mode: 'production',
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
    plugins: [new MiniCssExtractPlugin()],
};

module.exports = merge(baseConfig, prodRules);
