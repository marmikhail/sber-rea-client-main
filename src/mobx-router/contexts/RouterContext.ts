import {createContext} from 'react';

import {RouterNotInitializedError} from '../errors';
import {mockType} from '../utils/types';
import type {IHistory} from '../core/interfaces/IHistory';

const contextBase = new Proxy(
    {},
    {
        get: () => {
            throw new RouterNotInitializedError('You cannot use router outside of router context');
        },
    },
);

export const RouterContext = createContext<IHistory>(mockType(contextBase));
