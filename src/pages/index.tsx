import { IntroSection } from 'components/IntroSection';
import clsx from 'clsx';
import { NavBar } from 'components/NavBar';
import { body, title } from 'fonts';
import { useDarkMode } from 'hooks/useDarkMode';
import Head from 'next/head';
import { useDarkModeContext } from 'components/DarkModeContext';

export default function Home() {
    const [theme] = useDarkModeContext();
    console.log(theme);
    return (
        <main
            key={theme}
            className={clsx(
                'flex min-h-[300vh] w-full flex-col items-center justify-start',
                theme,
                theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark',
                title.variable,
                body.variable
            )}>
            <Head>
                <title>Hello World!</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <IntroSection />
        </main>
    );
}
