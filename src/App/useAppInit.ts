import {useEffect} from 'react';

import {CommonHandler} from '@/domain/assistant/presets/common';
import {useStore} from '@/di/useStore';
import {storeKeys} from '@/di';
import {IAuthStore} from '@/domain/authStore/types';

export const useAppInit = (): void => {
    const authStore = useStore<IAuthStore>(storeKeys.USER_AUTH_KEY);

    useEffect(() => {
        authStore.initUserAuth();

        const commonAssistantHandlers = new CommonHandler();
        commonAssistantHandlers.init();
    }, [authStore]);
};
