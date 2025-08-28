"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
//import { DM_Sans } from "next/font/google";
import './nav_bar.css'

/* const blk = DM_Sans({
    subsets:['latin'],
    style: "normal",    
    weight: '900'
}); */

const NavBar = () => {
  return (
    <nav id="nav-bar" className='chip-tl-lg'>
        <ul className='flex'>
            <NavLink name="Home" href="/home" />
            <NavLink name="About" href="/about" />           
        </ul>
    </nav>
  )
}

export default NavBar

export function NavLink({ name, href }: {name: string, href: string}){  
  const pathName = usePathname();
  return <li>
    <Link 
      href={href}
      className={`link ${pathName === href ? 'active' : ''} ${'blk.className'} chip-tl-br`}
    >{name}
    </Link>
  </li>
}