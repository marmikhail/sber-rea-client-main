const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC = path.resolve(__dirname, './../src');
const DIST = path.resolve(__dirname, './../dist');

const baseConfig = {
    resolve: {
        extensions: ['.ts', '.js', '.html', '.tsx'],
        alias: {
            '@': SRC,
            '~vars': `${SRC}/common`,
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
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
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
    ],
};

module.exports = {
    SRC,
    DIST,
    baseConfig,
};
