import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import type {Configuration} from 'webpack';

export const SRC = path.resolve(__dirname, './../src');
export const DIST = path.resolve(__dirname, './../dist');

export const baseConfig: Configuration = {
    resolve: {
        extensions: ['.ts', '.tsx', '.html', '.js'],
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
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
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
