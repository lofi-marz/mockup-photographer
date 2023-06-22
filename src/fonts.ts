import { Lexend, Poppins, Inter, Fira_Sans } from 'next/font/google';

export const title = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '900'],
    variable: '--font-title',
});

export const body = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '900'],
    variable: '--font-body',
});
