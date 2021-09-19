import React, {useCallback, useMemo, useState} from 'react';
import type {ComponentType} from 'react';

import {useStore} from '@/hooks/useStore';

import {PageContext} from './context';
import {usePageQuery, usePageParams, usePageStore} from './hooks';
import type {PageContextContent, UsePageParams, UsePageQuery, UsePageStore} from './types';

export type CreatePageParams<TStore = unknown> = {
    component: ComponentType<PageContextContent<TStore>>;
    Store?: {new (): TStore};
};
export type CreatePageRes<TStore = unknown, TParams = Record<string, unknown>, TQuery = Record<string, unknown>> = {
    PageComponent: ComponentType;
    usePageStore: UsePageStore<TStore>;
    usePageParams: UsePageParams<TParams>;
    usePageQuery: UsePageQuery<TQuery>;
};

class DefaultStore {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() {}
}

export const createPage = <
    TStore extends unknown = unknown,
    TParams = Record<string, unknown>,
    TQuery = Record<string, unknown>,
>({
    component,
    Store,
}: CreatePageParams<TStore>): CreatePageRes<TStore, TParams, TQuery> => {
    const Comp = React.memo(component);

    const Page = () => {
        const [force, setForce] = useState(0);

        const update = useCallback(() => setForce(i => i + 1), []);
        const store = useStore(Store ?? (DefaultStore as {new (): TStore}), [force]);

        const contextValue = useMemo(
            () => ({
                update,
                store,
            }),
            [update, store],
        );

        return (
            <PageContext.Provider value={contextValue}>
                <Comp {...contextValue} />
            </PageContext.Provider>
        );
    };

    return {
        PageComponent: Page,
        usePageParams,
        usePageQuery,
        usePageStore,
    } as CreatePageRes<TStore, TParams, TQuery>;
};
