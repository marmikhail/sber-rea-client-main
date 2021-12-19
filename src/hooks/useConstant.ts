import {useRef} from 'react';

const compareDeps = (depsA: unknown[] | undefined, depsB: unknown[] | undefined): boolean =>
    Boolean(depsA && depsB && depsA.length === depsB.length && depsA.every((a, i) => a === depsB[i]));

export const useConstant = <T>(getter: () => T, deps?: unknown[]): T => {
    const depsRef = useRef<unknown[] | undefined>();
    const valueRef = useRef<T | undefined>();
    const initializedRef = useRef<boolean>(false);

    if (!initializedRef.current || !compareDeps(depsRef.current, deps)) {
        valueRef.current = getter();
        depsRef.current = deps;
        initializedRef.current = true;
    }

    return valueRef.current as T;
};
