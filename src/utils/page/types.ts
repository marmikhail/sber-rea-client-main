export type UsePageParams<TParams = Record<string, unknown>> = () => TParams;
export type UsePageStore<TStore = unknown> = () => TStore;
export type UsePageQuery<TQuery = Record<string, unknown>> = () => TQuery;

export type PageContextContent<TStore = unknown> = {
    store: TStore;
    update: () => void;
};
