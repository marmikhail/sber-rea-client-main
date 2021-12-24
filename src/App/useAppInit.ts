import {useEffect} from 'react';

import {CommonHandler} from '@/domain/assistant/presets/common';
import {AuthStore} from '@/domain/user/authStore';

export const useAppInit = (): void => {
    useEffect(() => {
        new AuthStore();

        const commonAssistantHandlers = new CommonHandler();
        commonAssistantHandlers.init();
    }, []);
};
