import React from 'react';
import {RouteContext} from '../contexts/RouteContext';
import type {RouteContextValue} from '../contexts/RouteContext';
import type {RouteProps} from './types';
import {useMemo} from 'react';

/** Эти пропсы Switch внутренне прокидывает элементу */
export type RouteInnerProps = {params: Record<string, string>} & RouteProps;

const Route = (props: RouteProps) => {
    // внутренние пропсы отличаются от внешних из-за того, что Switch прокидывает через cloneElement
    const {component: Component, path, params} = props as RouteInnerProps;
    const value: RouteContextValue = useMemo(() => ({pattern: path, params}), [path, params]);

    return (
        <RouteContext.Provider value={value}>
            <Component />
        </RouteContext.Provider>
    );
};

export default Route;
