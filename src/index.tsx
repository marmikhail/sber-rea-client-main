import React from 'react';
import './reset.css';

import {render} from 'react-dom';
import {RouterProvider} from '@/mobx-router/components/RouterProvider';
import {IHistory} from '@/types/router';

import {App} from './App';
import {container, HISTORY_KEY} from './di';

const appRoot = document.getElementById('root');

const history = container.get<IHistory>(HISTORY_KEY);

render(
    <RouterProvider history={history}>
        <App />
    </RouterProvider>,
    appRoot,
);
