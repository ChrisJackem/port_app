import { usePathname } from 'next/navigation';
import React from 'react';
import styles from './linkComponent.module.css';
import Link from 'next/link';
import { blinker } from '@/app/config/fonts';

type LinkProps = {
    name: string;
    href: string;
    className?:string;
}

const LinkComponent = ({ name, href, className }: LinkProps) => {
    const pathName = usePathname();
    const isActive:string = pathName === href ? 'active' : ''
    return (
        <Link
            href={href}
            className={`akira ${className && className} ${styles.link} ${isActive ? styles.active : ''}`}>
                {name}
        </Link>
    )
}

export default LinkComponent