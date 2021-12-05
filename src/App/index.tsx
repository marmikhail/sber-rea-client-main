import React from 'react';
import {Helmet} from 'react-helmet';
import {createGlobalStyle} from 'styled-components';
import {darkSber} from '@sberdevices/plasma-tokens/themes';
import {ToastProvider} from '@sberdevices/plasma-ui';
import {text, background, gradient, body1} from '@sberdevices/plasma-tokens';

import {Routes} from './routes';
import {ReactNode} from 'react';

const DocumentStyle = createGlobalStyle`
    html {
        color: ${text};
        background-color: ${background};
        background-image: ${gradient};
        ${body1}
    }
`;

const ThemeStyle = createGlobalStyle(darkSber);

const WithTheme = ({children}: {children: ReactNode}) => (
    <ToastProvider>
        <ThemeStyle />
        <DocumentStyle />
        {children}
    </ToastProvider>
);

const MainHelmet = () => (
    <Helmet>
        <title>MIR REA</title>
    </Helmet>
);

export const App: React.VFC = () => {
    return (
        <>
            <MainHelmet />

            <WithTheme>
                <Routes />
            </WithTheme>
        </>
    );
};
