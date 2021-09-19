import {createContext} from 'react';

import type {PageContextContent} from './types';

export const PageContext = createContext<PageContextContent>({} as PageContextContent);
