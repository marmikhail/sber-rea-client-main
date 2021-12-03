export interface IHistory {
    query: Record<string, unknown>;
    pathname: string;
    hash: string;

    push: (path: string) => void;
}
