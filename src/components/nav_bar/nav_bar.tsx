"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
//import { /* Poppins, */ Tilt_Warp } from "next/font/google";
import { Jockey_One } from 'next/font/google';
import './nav_bar.css'
import PathButton from '../path_button/pathButton';
import { StrokeLogo } from '../loading_component/loading_component';
import PageButton from '../page_button/page_button';

const blk = Jockey_One({
    subsets:['latin'],
    style: "normal",    
    weight: '400'
});

const NavBar = () => {  
  const nav_main = useRef<HTMLElement | null>(null);
  const [navHeight, setNavHeight] = useState(100)
  
  useEffect(()=>{
    if (!nav_main.current) return;
    const rect = nav_main.current.getBoundingClientRect();
    setNavHeight(rect.height + 20);
  }, [nav_main]);

  return (
    <div id="nav-container">
      <nav 
        id="nav-bar"
        ref={nav_main}
        className='anim-bg chip-tl-lg'
      >
        <div className={'logo_container flex'}>
          <StrokeLogo infinite={false}/> 
          <small>Chris Jackem Official Website</small>       
        </div>
        <ul className='flex' style={{ gap: '0.5rem' }}>
            <NavLink name="Home" href="/home"  />
            <NavLink name="About" href="/about"/>
            <NavLink name="Work" href="/work"/>
        </ul>
      </nav>
      <PathButton threshold={navHeight}/>
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
      /* className={`link chip-a ${isActive} ${blk.className}`} */
      
    >{/* {name} */}
      <PageButton active={pathName === href} className={`${isActive}`}>{name}</PageButton>
    </Link>
  </li>);
}