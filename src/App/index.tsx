import {Helmet} from 'react-helmet';
import {createGlobalStyle} from 'styled-components';
import {darkSber} from '@sberdevices/plasma-tokens/themes';
import {DeviceThemeProvider, ToastProvider} from '@sberdevices/plasma-ui';
import {text, background, gradient} from '@sberdevices/plasma-tokens';

const DocumentStyle = createGlobalStyle`
    html {
        color: ${text};
        background-color: ${background};
        background-image: ${gradient};
    }
`;
import {Routes} from './routes';
import {ReactNode} from 'react';

const ThemeStyle = createGlobalStyle(darkSber);

const WithTheme = ({children}: {children: ReactNode}) => {
    return (
        <ToastProvider>
            <DeviceThemeProvider>
                <ThemeStyle />
                <DocumentStyle />
                {children}
            </DeviceThemeProvider>
        </ToastProvider>
    );
};

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
