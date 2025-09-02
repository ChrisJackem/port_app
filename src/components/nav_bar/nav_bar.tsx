"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { /* Poppins, */ Tilt_Warp } from "next/font/google";
import './nav_bar.css'
import PathButton from '../path_button/pathButton';

const blk = Tilt_Warp({
    subsets:['latin'],
    style: "normal",    
    weight: '400'
});

const NavBar = () => {
  const pathName = usePathname();
  return (
    <div id="nav-container">
      <nav id="nav-bar" className='anim-bg chip-tl-lg'>
        <p>LOGO</p>
        <ul className='flex' style={{ gap: '0.5rem' }}>
            <NavLink name="Home" href="/home" pathname={pathName} />
            <NavLink name="About" href="/about" pathname={pathName}/>
        </ul>        
      </nav>
      {/* <div className='blade-1 nav-url'>{pathName}</div> */}
      <PathButton />
    </div>
  );
}

export default NavBar

export function NavLink({ name, href, pathname }: {name: string, href: string, pathname: string}){  
  //const pathName = usePathname();
  return <li>
    {/* <div className='chip-a'> */}
    <Link 
      href={href}
      className={`link chip-a ${pathname === href ? 'active' : ''} ${blk.className}`}
    >{name}
    </Link>
    {/* </div> */}
  </li>
}