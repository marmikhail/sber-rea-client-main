import {useContext} from 'react';
import {useRouter} from 'mobx-router/hooks/useRouter';
import {useParams} from 'mobx-router/hooks/useParams';

import {PageContext} from './context';
import type {PageContextContent} from './types';

export const usePageContext = (): PageContextContent => useContext(PageContext);
export const usePageStore = (): unknown => useContext(PageContext).store;
export const usePageParams = (): Record<string, unknown> => {
    const params = useParams();
    return params;
};
export const usePageQuery = () => useRouter().query;
