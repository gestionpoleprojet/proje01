'use client';

import {motion} from 'framer-motion';
import Link from 'next/link';
import {navVariants} from '../utils/motion'
import {usePathname} from 'next/navigation'
import {useEffect, useState} from 'react'

const navItems = {
    '/':{
        name: 'Accueil',
        x: 0,
        y: 0,
        w: '94px',
    },
    '/pedagogie':{
        name: 'Pédagogie',
        x: 98,
        y: 35,
        w: '122px',
    },
    '/innovawards':{
        name: 'Innov\'Awards',
        x: 224,
        y: 60,
        w: '140px',
    },
    '/fablab':{
        name: 'Fablab',
        x: 367,
        y: 0,
        w: '94px',
    },
    '/contact':{
        name: 'Contact',
        x: 465,
        y: 0,
        w: '100px',
    },
}

const NavBar = () => {
  let pathname = usePathname();
  
    return (
    <div
        data-collapse="medium"
        data-animation="default"
        data-duration="400"
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className={`navbar w-nav blue-ece`}
        >
        <div className="container-max-w-1060 w-container">
        <motion.nav
        variants={navVariants}
        initial="hidden"
        
        whileInView="show" 
        className="nav-wrapper">
            
            <div className="logo-wrapper">
            <a href="#" className="brand w-nav-brand"
                ><img
                src="https://uploads-ssl.webflow.com/638d06865fd2fdfa5dac0d33/638d0a482b941e4e6e885124_Logo-PP-noir.png"
                loading="lazy"
                width="29"
                sizes="29px"
                srcSet="
                    https://uploads-ssl.webflow.com/638d06865fd2fdfa5dac0d33/638d0a482b941e4e6e885124_Logo-PP-noir-p-500.png 500w,
                    https://uploads-ssl.webflow.com/638d06865fd2fdfa5dac0d33/638d0a482b941e4e6e885124_Logo-PP-noir.png       540w
                "
                alt=""
                className="logo-image"
                />
                <div className="navlogo-name">Pôle Projet ECE.</div></a
            >
            </div>
            <nav role="navigation" className="nav-menu w-nav-menu">
                <motion.nav 
                    className="navanimation"
                    layoutid="test"
                    initial={{opacity: 0, x: navItems[pathname].x , y:0}}
                    animate={{opacity: 1, x: navItems[pathname].x, y:0, width: navItems[pathname].w}}
                    transition={{type:'spring', stiffness: 100, damping: 20}}
                />
                <Link href="/" className="navlink mr-2-5 w-nav-link">Accueil
                </Link>
                <Link href="/pedagogie" className="navlink mr-2-5 w-nav-link">Pédagogie</Link>
                <Link
                    href="/innovawards"
                    className="navlink mr-2-5 w-nav-link"
                    >Innov&#x27;Awards
                </Link>
                <Link href="/fablab" className="navlink mr-2-5 w-nav-link">Fablab</Link>
                <Link href="/contact" className="navlink mr-2-5 w-nav-link">Contact</Link>
                
            </nav>
            <Link
                    href="#"
                    className="getstarted-bttn text-2xl leading-8 small w-button"
                    ><strong className="bold-text">Déposer un projet</strong></Link>
            <div className="menu-button w-nav-button" >
            <div className="w-icon-nav-menu"></div>
            </div>
        </motion.nav>
        </div>
    </div>
);
}
export	default	NavBar;