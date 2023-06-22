import type { Config } from 'tailwindcss';

import colors from 'tailwindcss/colors';

import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

const theme = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                title: ['var(--font-title)', ...defaultTheme.fontFamily.sans],
                body: ['var(--font-body)', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: colors.teal[950], //'#FE2E5A'
                secondary: colors.teal[500],
                neutral: colors.neutral,
                light: colors.neutral[50],
                grey: colors.neutral[400],
                dark: colors.neutral[900],
            },
        },
    },
    plugins: [forms],
} satisfies Config;

export default theme;

export const themeColors = theme.theme.extend.colors;
