import { useDarkModeContext } from 'components/DarkModeContext';
import { useDarkMode } from 'hooks/useDarkMode';
import { FaSun, FaMoon } from 'react-icons/fa';
export function DarkModeToggle() {
    const [darkMode, setDarkMode] = useDarkModeContext();
    const dark = darkMode === 'dark';
    const toggle = () => setDarkMode((v) => (v === 'light' ? 'dark' : 'light'));
    return <button onClick={toggle}>{dark ? <FaSun /> : <FaMoon />}</button>;
}
