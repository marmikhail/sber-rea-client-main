import React from 'react';
import type {ReactNode} from 'react';
import {Helmet} from 'react-helmet';
import styled, {createGlobalStyle} from 'styled-components';
import {darkSber} from '@sberdevices/plasma-tokens/themes';
import {ToastProvider} from '@sberdevices/plasma-ui';
import {text, background, gradient, body1, sberBox} from '@sberdevices/plasma-tokens';

import {Routes} from './routes';
import {useAppInit} from './useAppInit';

const DocumentStyle = createGlobalStyle`
    html {
        color: ${text};
        background-color: ${background};
        background-image: ${gradient};
        ${body1}
    }
`;

const StyledWrapper = styled.div`
    padding-bottom: 200px;
    ${sberBox[':root']}
`;

const ThemeStyle = createGlobalStyle(darkSber);

const WithTheme = ({children}: {children: ReactNode}) => (
    <ToastProvider>
        <ThemeStyle />
        <DocumentStyle />
        <StyledWrapper>{children}</StyledWrapper>
    </ToastProvider>
);

const MainHelmet = () => (
    <Helmet>
        <title>MIR REA</title>
    </Helmet>
);

export const App: React.VFC = () => {
    useAppInit();

    return (
        <div>
            <MainHelmet />

            <WithTheme>
                <Routes />
            </WithTheme>
        </div>
    );
};
