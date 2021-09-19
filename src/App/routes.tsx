import {Switch, Route} from 'react-router-dom';

import {Example, Login, Schedule} from '@/pages';

export const Routes: React.VFC = () => (
    <Switch>
        <Route exact path="/example" component={Example} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/schedule" component={Schedule} />
    </Switch>
);
