import { IconType } from 'react-icons';

export function IconLink({ href, Icon }: { href: string; Icon: IconType }) {
    return (
        <a className="flex items-center justify-center text-4xl">
            <Icon />
        </a>
    );
}
