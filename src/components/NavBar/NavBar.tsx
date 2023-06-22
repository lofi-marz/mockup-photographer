import { DarkModeToggle } from './DarkModeToggle';

export function NavBar() {
    return (
        <nav className="text-theme fixed top-0 z-50 flex h-24 w-full flex-row p-6 text-4xl">
            <DarkModeToggle />
        </nav>
    );
}
