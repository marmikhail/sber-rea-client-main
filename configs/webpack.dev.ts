import {merge} from 'webpack-merge';
import path from 'path';
import type {Configuration} from 'webpack';
import type {Configuration as DevServerConfig} from 'webpack-dev-server';

import {baseConfig} from './webpack.config';

const devRules: Configuration & {devServer: DevServerConfig} = {
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
        ],
    },
};

export default merge(baseConfig, devRules);
