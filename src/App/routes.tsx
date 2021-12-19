import React from 'react';
import {Route, Switch} from 'mobx-router/components';

import {Login, Main, WeekSchedule, Today, Lesson, Settings} from '@/pages';
import {AuthenticatedRoute} from '@/components';

export const Routes: React.VFC = () => (
    <Switch>
        <AuthenticatedRoute exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <AuthenticatedRoute exact path="/schedule" component={WeekSchedule} />
        <AuthenticatedRoute exact path="/lesson" component={Lesson} />
        <AuthenticatedRoute exact path="/today" component={Today} />
        <AuthenticatedRoute exact path="/settings" component={Settings} />
    </Switch>
);
