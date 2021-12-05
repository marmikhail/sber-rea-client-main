const {DefinePlugin} = require('webpack');
const path = require('path');

require('dotenv').config({path: path.resolve(__dirname, '../.env')});

const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC = path.resolve(__dirname, './../src');
const DIST = path.resolve(__dirname, './../dist');

const baseConfig = {
    resolve: {
        extensions: ['.ts', '.js', '.html', '.tsx'],
        alias: {
            '@': SRC,
            '~vars': path.join(SRC, 'common'),
            'mobx-router': path.join(SRC, 'mobx-router'),
        },
    },
    entry: path.join(SRC, 'index.tsx'),
    output: {
        clean: true,
        publicPath: '/',
        filename: '[hashname].bundle.js',
        path: DIST,
    },
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                use: [
                    {
                        loader: 'esbuild-loader',
                        options: {
                            loader: 'tsx',
                            target: 'es6',
                            tsconfigRaw: require('./../tsconfig.json'),
                        },
                    },
                ],
            },
            {
                test: /\.html?$/,
                loader: 'html-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(SRC, 'index.html'),
        }),
        new DefinePlugin({
            REACT_APP_TOKEN: `'${process.env.REACT_APP_TOKEN}'`,
        }),
    ],
};

module.exports = {
    SRC,
    DIST,
    baseConfig,
};
