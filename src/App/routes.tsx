import React from 'react';
import {Switch} from 'mobx-router/components';

import {Login, Main, WeekSchedule, Today, Lesson, Settings, OtherGroup} from '@/pages';
import {AuthenticatedRoute} from '@/components';

export const Routes: React.VFC = () => (
    <>
        <Switch>
            <AuthenticatedRoute exact path="/" component={Main} />
            <AuthenticatedRoute exact path="/login" component={Login} />
            <AuthenticatedRoute exact path="/schedule" component={WeekSchedule} />
            <AuthenticatedRoute exact path="/lesson" component={Lesson} />
            <AuthenticatedRoute exact path="/today" component={Today} />
            <AuthenticatedRoute exact path="/settings" component={Settings} />
            <AuthenticatedRoute exact path="/other-group" component={OtherGroup} />
        </Switch>
    </>
);
