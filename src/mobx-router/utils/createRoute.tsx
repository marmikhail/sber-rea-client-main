import {Route as BaseRoute} from 'mobx-router/components';
import {useParams as useParamsBase} from 'mobx-router/hooks/useParams';
import {ComponentType} from 'react';

export type RouteCreateParams = {
    component: ComponentType;
    path: string;
};

export const createRoute = <TParams extends Record<string, string>>({component, path}: RouteCreateParams) => {
    const useParams = () => useParamsBase<TParams>();
    const Route = () => <BaseRoute path={path} component={component} />;

    return {
        Route: Route,
        useParams,
    };
};
