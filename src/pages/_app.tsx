import { DarkModeContextProvider } from 'components/DarkModeContext';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <DarkModeContextProvider>
            <Component {...pageProps} />;
        </DarkModeContextProvider>
    );
}
