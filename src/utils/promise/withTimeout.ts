export const withTimeout = <TRes>(promise: Promise<TRes>, timeout: number): Promise<TRes> => {
    return new Promise((resolve, reject) => {
        promise.then(resolve);
        setTimeout(reject, timeout);
    });
};
