export const memo = <T extends (arg: any) => unknown>(func: T): T => {
    const cache = new Map<Parameters<T>[0], ReturnType<T>>();

    return ((arg: Parameters<T>[0]) => {
        if (cache.has(arg)) return cache.get(arg);

        return func(arg);
    }) as T;
};
