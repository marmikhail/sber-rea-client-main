import React from 'react';
import {observer} from 'mobx-react-lite';
import type {ComponentProps} from 'react';

import {Route} from '@/mobx-router';
import {userStore} from '@/domain/user/store';
import RedirectWithReason from '../RedirectWithReason';
import {Spinner} from '@sberdevices/plasma-ui';

const AuthenticatedRoute = observer((props: ComponentProps<typeof Route>) => {
    const {isAuthChecked, isAuthenticated} = userStore;

    if (!isAuthChecked) return <Spinner size={100} />;
    if (isAuthChecked && !isAuthenticated) {
        // TODO: добавить отображение причины в ассистент
        return <RedirectWithReason to="/login" reason="Вы должны войти для посещения этой страницы" />;
    }

    return <Route {...props} />;
});

export default AuthenticatedRoute;
