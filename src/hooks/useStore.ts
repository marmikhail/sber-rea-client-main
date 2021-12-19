import {Disposable} from '@/utils/store/disposable';
import {useEffect} from 'react';
import {useConstant} from './useConstant';

export const useStore = <TStore extends unknown>(Store: {new (): TStore}, deps?: unknown[]): TStore => {
    const store = useConstant<TStore>(() => new Store(), deps);

    useEffect(
        () => () => {
            if (store instanceof Disposable) store.dispose();
        },
        [store],
    );

    return store;
};
