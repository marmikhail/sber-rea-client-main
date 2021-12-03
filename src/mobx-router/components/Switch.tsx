import React, {Children, cloneElement, ReactElement} from 'react';
import {observer} from 'mobx-react-lite';

import {memo} from '@/mobx-router/utils/memo';

import {Route} from '.';
import {InvalidSwitchChildError} from '../errors';
import {useRouter} from '../hooks/useRouter';
import type {RouteProps, SwitchProps} from './types';
import {RouteInnerProps} from './Route';

function validateChild(el: ReturnType<typeof Children.toArray>[number]): asserts el is ReactElement<RouteProps> {
    if (typeof el === 'string' || typeof el === 'number' || !('type' in el) || el.type !== Route) {
        throw new InvalidSwitchChildError('Switch can only have instances of Route in its children');
    }
}

const PATH_DELIMITER = '/';

const createRegexpFromPathBase = (currentPath: string): [pattern: RegExp, params: string[]] => {
    const pathParts = currentPath.split(PATH_DELIMITER);

    const params: string[] = [];

    const regexpString = pathParts
        .map(part => {
            if (part.startsWith(':')) {
                params.push(part.slice(1));
                return '(.+)';
            }

            return part;
        })
        .join(PATH_DELIMITER);

    return [new RegExp(regexpString), params];
};
const createRegexpFormPath = memo(createRegexpFromPathBase);

/**
 *
 * @param currentPath current app location
 * @param pathPattern pattern defined by route
 * @returns null if route doesn't match and else record of matching params
 */
const matchPath = (currentPath: string, pathPattern: string): Record<string, string> | null => {
    const [patternRegexp, paramsNames] = createRegexpFormPath(pathPattern);
    const paramsCount = paramsNames.length;

    if (!patternRegexp.test(currentPath)) return null;
    if (!paramsCount) return {};

    // Выше проверили, что паттерн совпадает, поэтому здесь не страшно кастануть
    const matches = (currentPath.match(patternRegexp) as string[]).slice(1, paramsCount + 1);

    return paramsNames.reduce((acc, name, i) => {
        acc[name] = matches[i];

        return acc;
    }, {} as Record<string, string>);
};

const Switch = ({children}: SwitchProps) => {
    const childrenArray = Children.toArray(children);
    const router = useRouter();

    for (const el of childrenArray) {
        validateChild(el);

        const match = matchPath(router.pathname, el.props.path);

        if (match) {
            // прокидываем параметры в рут, чтобы не создавать лишний контекст
            return cloneElement(el as ReactElement<RouteInnerProps>, {params: match});
        }
    }

    return null;
};

export default observer(Switch);
