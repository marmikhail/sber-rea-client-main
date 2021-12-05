import React from 'react';
import {createGlobalStyle} from 'styled-components';
import {text, background, gradient, body1} from '@sberdevices/plasma-tokens';
import {darkSber} from '@sberdevices/plasma-tokens/themes';
import type {ComponentType, ReactNode} from 'react';

import {History} from 'mobx-router/core/History';
import {RouterProvider} from 'mobx-router/components/RouterProvider';

import '@/reset.css';

const DocumentStyle = createGlobalStyle`
    html {
        color: ${text};
        background-color: ${background};
        background-image: ${gradient};
        ${body1}
    }
`;

const ThemeStyle = createGlobalStyle(darkSber);

const mockedHistory = new History();

const WithTheme = ({children}: {children: ReactNode}) => (
    <>
        <ThemeStyle />
        <DocumentStyle />
        {children}
    </>
);

export const mockedComponent = <TProps,>(Component: ComponentType<TProps>): ComponentType<TProps> => {
    const Mocked = (props: TProps) => (
        <RouterProvider history={mockedHistory}>
            <WithTheme>
                <Component {...props} />
            </WithTheme>
        </RouterProvider>
    );

    return Mocked;
};
