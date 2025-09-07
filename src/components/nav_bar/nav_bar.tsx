"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
//import { /* Poppins, */ Tilt_Warp } from "next/font/google";
import { Jockey_One } from 'next/font/google';
import './nav_bar.css'
import PathButton from '../path_button/pathButton';

const blk = Jockey_One({
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
            <NavLink name="Home" href="/home"  />
            <NavLink name="About" href="/about"/>
            <NavLink name="Blerp" href="/about"/>
        </ul>        
      </nav>
      {/* <div className='blade-1 nav-url'>{pathName}</div> */}
      <PathButton />
    </div>
  );
}

export default NavBar

export function NavLink({ name, href }: {name: string, href: string}){
  const pathName = usePathname();
  const isActive:string = pathName === href ? 'active' : ''
  return (<li>
    <Link 
      href={href}
      className={`link chip-a ${isActive} ${blk.className}`}
    >{name}
    </Link>
  </li>);
}