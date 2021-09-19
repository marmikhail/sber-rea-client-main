import './reset.css';

import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import {App} from './App';

const appRoot = document.getElementById('root');

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    appRoot,
);
