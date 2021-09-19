import {useToast} from '@sberdevices/plasma-ui';
import {useCallback} from 'react';

export type ShowToast = ReturnType<typeof useToast>['showToast'];

/** В сбере не знают, как мемоизировать, поэтому не очень честная обертка */
export const useShowToast = (...params: Parameters<typeof useToast>): ShowToast => {
    const {showToast} = useToast(...params);

    return useCallback(showToast, []);
};
