import {useContext} from 'react';

import {RouterContext} from '../contexts/RouterContext';
import type {IHistory} from '../core/interfaces/IHistory';

export const useRouter = (): IHistory => useContext(RouterContext);
