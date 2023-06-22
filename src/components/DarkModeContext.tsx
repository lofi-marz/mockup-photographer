import { useDarkMode } from 'hooks/useDarkMode';
import { Dispatch, SetStateAction, createContext, useContext } from 'react';
import { Theme, WithChildrenProps } from 'types';

const DarkModeContext = createContext<
    [Theme | null, Dispatch<SetStateAction<Theme | null>>]
>(['dark', () => console.log('No setter')]);
export function DarkModeContextProvider({ children }: WithChildrenProps) {
    const [darkMode, setDarkMode] = useDarkMode();
    return (
        <DarkModeContext.Provider value={[darkMode, setDarkMode]}>
            {children}
        </DarkModeContext.Provider>
    );
}

export function useDarkModeContext() {
    return useContext(DarkModeContext);
}
