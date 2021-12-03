import {DependencyList, useRef} from 'react';

const areDepsEqual = (a: DependencyList, b: DependencyList): boolean =>
    a.length === b.length && !a.find((el, i) => el !== b[i]);

export const useConstant = <T>(fn: () => T, deps?: DependencyList): T => {
    const prevDeps = useRef<DependencyList | undefined>();
    const valRef = useRef<T>();

    if (!deps || !prevDeps.current || !areDepsEqual(deps, prevDeps.current)) {
        prevDeps.current = deps;
        valRef.current = fn();
    }

    return valRef.current as T;
};
