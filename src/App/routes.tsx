import React from 'react';
import {Route, Switch} from 'mobx-router/components';

import {Example, Login, Main, WeekSchedule} from '@/pages';

export const Routes: React.VFC = () => (
    <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/example/:id" component={Example} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/schedule" component={WeekSchedule} />
    </Switch>
);
