import React from 'react';
import {observer} from 'mobx-react-lite';
import type {ComponentProps} from 'react';

import {Route} from '@/mobx-router';
import RedirectWithReason from '../RedirectWithReason';
import {Spinner} from '@sberdevices/plasma-ui';

import css from './styles.css';
import {useStore} from '@/di/useStore';
import {storeKeys} from '@/di';
import {IUserStore} from '@/domain/user/types';
import {IAuthStore} from '@/domain/authStore/types';
import {AuthError} from '@/parts/AuthError';

const AuthenticatedRoute = observer((props: ComponentProps<typeof Route>) => {
    const userStore = useStore<IUserStore>(storeKeys.USER_KEY);
    const userAuthStore = useStore<IAuthStore>(storeKeys.USER_AUTH_KEY);
    const {isAuthChecked, isAuthenticated} = userStore;
    const {isAuthFailed} = userAuthStore;

    if (isAuthFailed) return <AuthError />;
    if (!isAuthChecked)
        return (
            <div className={css.loaderContainer}>
                <Spinner size={100} />
            </div>
        );
    if (isAuthChecked && !isAuthenticated) {
        return <RedirectWithReason to="/login" reason="Вы должны войти для посещения этой страницы" />;
    }

    return <Route {...props} />;
});

export default AuthenticatedRoute;
