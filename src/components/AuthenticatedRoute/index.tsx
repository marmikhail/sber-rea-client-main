import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import type {RouteProps} from 'react-router-dom';

import {userStore} from '@/domain/user/store';
import {observer} from 'mobx-react-lite';

const AuthenticatedRoute = observer((props: RouteProps) => {
    const {uid} = userStore;

    if (uid === null) return <Redirect to="/login" />;

    return <Route {...props} />;
});

export default AuthenticatedRoute;
