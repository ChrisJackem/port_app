"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { Tilt_Warp } from "next/font/google";
import './nav_bar.css'

const blk = Tilt_Warp({
    subsets:['latin'],
    style: "normal",    
    weight: '400'
});

const NavBar = () => {
  return (
    <nav id="nav-bar" className='chip-tl-lg'>
      <p>LOGO</p>
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
      className={`link ${pathName === href ? 'active' : ''} ${blk.className}`}
    >{name}
    </Link>
  </li>
}