import {useConstant} from './useConstant';

export const useStore = <TStore extends unknown>(Store: {new (): TStore}, deps?: unknown[]): TStore => {
    const store = useConstant<TStore>(() => new Store(), deps);

    return store;
};
