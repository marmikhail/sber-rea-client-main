import {useCallback, useState} from 'react';

/** Возвращает функцию, вызывающую ререндер компонента */
export const useForceUpdate = (): (() => void) => {
    const [, setState] = useState(0);

    return useCallback(() => setState(i => i + 1), []);
};
