import {useContext, useMemo} from 'react';
import {useParams, useLocation} from 'react-router-dom';
import {parse} from 'qs';

import {PageContext} from './context';
import type {PageContextContent} from './types';

export const usePageContext = (): PageContextType => useContext(PageContext);
export const usePageStore = (): unknown => useContext(PageContext).store;
export const usePageParams = (): Record<string, unknown> => {
    const params = useParams();
    return params;
};
export const usePageQuery = (): Record<string, unknown> => {
    const {search} = useLocation();

    return useMemo(() => parse(search), [search]);
};
