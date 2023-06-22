import { Lexend, Poppins, Rubik } from 'next/font/google';

export const title = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '900'],
    variable: '--font-title',
});

export const body = Lexend({
    subsets: ['latin'],
    weight: ['200', '300', '400', '600', '700', '900'],
    variable: '--font-body',
});
