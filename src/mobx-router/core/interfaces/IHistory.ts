export interface IHistory {
    query: Record<string, string>;
    pathname: string;
    hash: string;

    push: (path: string) => void;
    replace: (path: string) => void;
}
