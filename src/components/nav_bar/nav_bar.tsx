"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { Poppins, Tilt_Warp } from "next/font/google";
import './nav_bar.css'
import { motion } from 'motion/react';
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
      <nav id="nav-bar" className='chip-tl-lg'>
        <p>LOGO</p>
        <ul className='flex'>
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
    <Link 
      href={href}
      className={`link ${pathname === href ? 'active' : ''} ${blk.className}`}
    >{name}
    </Link>
  </li>
}