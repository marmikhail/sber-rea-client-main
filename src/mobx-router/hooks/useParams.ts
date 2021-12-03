import {useRouteContext} from './useRouteContext';

export const useParams = <T extends Record<string, string> = Record<string, string>>(): T => {
    const {params} = useRouteContext();

    return params as T;
};
