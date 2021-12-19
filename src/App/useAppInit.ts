import {userStore} from '@/domain/user/store';
import {useStore} from '@/hooks/useStore';
import {useEffect} from 'react';

export const useAppInit = (): void => {
    useEffect(() => {
        userStore.fetchUserInfo();
    }, []);
};
