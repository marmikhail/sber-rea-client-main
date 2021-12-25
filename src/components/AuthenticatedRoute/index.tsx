import React from 'react';
import {observer} from 'mobx-react-lite';
import type {ComponentProps} from 'react';

import {Route} from '@/mobx-router';
import {userStore} from '@/domain/user/store';
import RedirectWithReason from '../RedirectWithReason';
import {Spinner} from '@sberdevices/plasma-ui';

import css from './styles.css';

const AuthenticatedRoute = observer((props: ComponentProps<typeof Route>) => {
    const {isAuthChecked, isAuthenticated} = userStore;

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
