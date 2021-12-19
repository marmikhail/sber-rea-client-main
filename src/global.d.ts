declare module '*.css' {
    const mod = {} as Record<string, string>;
    export default mod;
}

declare module '*.png' {
    const image: string;
    export default image;
}

declare const REACT_APP_TOKEN: string;
