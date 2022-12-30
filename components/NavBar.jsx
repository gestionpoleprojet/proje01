"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { navVariants, navItems, ctacolor} from "../utils/motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NavBar = () => {
    let pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggleClick = () => {
        setMenuOpen(!menuOpen);
    };

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
                    className="nav-wrapper"
                >
                    <div className="logo-wrapper">
                        <a href="#" className="brand w-nav-brand">
                            <img
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
                            <div className="navlogo-name">Pôle Projet ECE.</div>
                        </a>
                    </div>
                    <nav
                        role="navigation"
                        className={`nav-menu w-nav-menu ${menuOpen ? "hidden" : ""}`}
                    >
                        <motion.nav
                            className="navanimation"
                            
                            initial={{ opacity: 0, x: navItems[pathname].x, y: 0 }}
                            animate={{
                                opacity: 1,
                                x: navItems[pathname].x,
                                y: 0,
                                width: navItems[pathname].w,
                            }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        />
                        <Link href="/" className="navlink mr-2-5 w-nav-link">
                            Accueil
                        </Link>
                        <Link href="/pedagogie" className="navlink mr-2-5 w-nav-link">
                            Pédagogie
                        </Link>
                        <Link href="/innovawards" className="navlink mr-2-5 w-nav-link">
                            Innov&#x27;Awards
                        </Link>
                        <Link href="/fablab" className="navlink mr-2-5 w-nav-link">
                            Fablab
                        </Link>
                        <Link href="/contact" className="navlink mr-2-5 w-nav-link">
                            Contact
                        </Link>
                    </nav>
                    <Link
                        href="/depot_projet"
                        className={`depot-btn small ${pathname == "/depot_projet" ? "invert-btn" : "getstarted-bttn"}`}
                    >
                        <strong className="bold-text">Déposer un projet</strong>
                    </Link>
                    <div
                        className={`menu-button w-nav-button ${menuOpen ? "w--open" : ""}`}
                        onClick={handleMenuToggleClick}
                    >
                        <div className="w-icon-nav-menu"></div>
                    </div>
                </motion.nav>
            </div>


            <div
                className={`${menuOpen ? 'w-nav-overlay-open': 'w-nav-overlayy'} `} // VERSION MOBILE
                data-wf-ignore=""
                id="w-nav-overlay-0"
                onClick={handleMenuToggleClick}
            >
                <nav
                    role="navigation"   
                    className={`nav-menu w-nav-menu ${menuOpen ? 'w--nav-menu-open': ''}`}  
                    data-nav-menu-open
                >
                    <Link href="/" className="navlink mr-2-5 w-nav-link" onClick={handleMenuToggleClick}>
                            Accueil
                        </Link>
                        <Link href="/pedagogie" className="navlink mr-2-5 w-nav-link" onClick={handleMenuToggleClick}>
                            Pédagogie
                        </Link>
                        <Link href="/innovawards" className="navlink mr-2-5 w-nav-link" onClick={handleMenuToggleClick}>
                            Innov&#x27;Awards
                        </Link>
                        <Link href="/fablab" className="navlink mr-2-5 w-nav-link" onClick={handleMenuToggleClick}>
                            Fablab
                        </Link>
                        <Link href="/contact" className="navlink mr-2-5 w-nav-link" onClick={handleMenuToggleClick}>
                            Contact
                        </Link>
                    <a href="/depot_projet" className="getstarted-bttn text-2xl leading-8 w-button">
                        <strong className="bold-text">Déposer un projet</strong>
                    </a>
                </nav>
            </div>
        </div>
    );
};
export default NavBar;
