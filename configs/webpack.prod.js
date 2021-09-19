import {merge} from 'webpack-merge';
import type {Configuration} from 'webpack';

import {baseConfig} from './webpack.config';

const prodRules: Configuration = {
    mode: 'production',
};

export default merge(baseConfig, prodRules);
