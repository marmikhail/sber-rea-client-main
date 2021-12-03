import {createContext} from 'react';

export type RouteContextValue = {
    pattern: string;
    params: Record<string, unknown>;
};

export const RouteContext = createContext({} as RouteContextValue);
